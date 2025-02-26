from flask import Flask, request, jsonify
from flask_cors import CORS
import ast

app = Flask(__name__)
CORS(app, resources={r"/check-code": {"origins": "*"}})

# Liste des bibliothèques interdites
FORBIDDEN_LIBRARIES = {"os", "sys", "random", "math", "subprocess", "shutil"}

def is_valid_turtle_code(user_code):
    try:
        # 📌 Vérifier que le code est bien du Python valide
        tree = ast.parse(user_code)

        # 📌 Vérifier les imports
        import_nodes = [node for node in ast.walk(tree) if isinstance(node, ast.Import) or isinstance(node, ast.ImportFrom)]
        used_libraries = {imp.names[0].name for imp in import_nodes if isinstance(imp, ast.Import)}

        # ✅ Accepter uniquement `import turtle`
        if used_libraries - {"turtle"}:
            return False, "❌ Tu utilises une bibliothèque non autorisée. Seul `import turtle` est permis."

        # 📌 Vérifier que l'élève n'a pas importé `turtle` mais ne l'a jamais utilisé
        calls = [node for node in ast.walk(tree) if isinstance(node, ast.Call)]
        has_turtle_usage = any(
            isinstance(call.func, ast.Attribute) and isinstance(call.func.value, ast.Name) and call.func.value.id == "turtle"
            for call in calls
        )

        if "turtle" in used_libraries and not has_turtle_usage:
            return False, "❌ Tu as importé `turtle`, mais tu ne l'utilises pas. Ajoute des commandes pour dessiner !"

        # 📌 Vérifier que le premier appel est bien turtle.Turtle()
        first_call = calls[0] if calls else None
        has_turtle_constructor_at_start = (
            first_call and isinstance(first_call.func, ast.Attribute) and 
            isinstance(first_call.func.value, ast.Name) and 
            first_call.func.value.id == "turtle" and 
            first_call.func.attr == "Turtle"
        )

        # 📌 Vérifier que le dernier appel est bien turtle.done()
        last_call = calls[-1] if calls else None
        has_turtle_done_at_end = (
            last_call and isinstance(last_call.func, ast.Attribute) and 
            isinstance(last_call.func.value, ast.Name) and 
            last_call.func.value.id == "turtle" and 
            last_call.func.attr == "done"
        )

        # 📌 Vérifier qu'il n'y a pas plusieurs instances de `turtle.Turtle()`
        turtle_instances = sum(
            1 for call in calls 
            if isinstance(call.func, ast.Attribute) and 
               isinstance(call.func.value, ast.Name) and 
               call.func.value.id == "turtle" and 
               call.func.attr == "Turtle"
        )

        # 📌 Vérifier les mouvements (forward(100) et right(90))
        forward_calls = sum(
            1 for call in calls 
            if isinstance(call.func, ast.Attribute) and 
               call.func.attr == "forward" and 
               call.args and isinstance(call.args[0], ast.Constant) and 
               call.args[0].value == 100
        )

        right_calls = sum(
            1 for call in calls 
            if isinstance(call.func, ast.Attribute) and 
               call.func.attr == "right" and 
               call.args and isinstance(call.args[0], ast.Constant) and 
               call.args[0].value == 90
        )

        # 📌 Vérifier la couleur et la forme (peu importe leur emplacement, mais une seule fois)
        color_calls = sum(1 for call in calls if isinstance(call.func, ast.Attribute) and call.func.attr == "color")
        shape_calls = sum(1 for call in calls if isinstance(call.func, ast.Attribute) and call.func.attr == "shape")

        has_color_green = any(
            isinstance(call.func, ast.Attribute) and 
            call.func.attr == "color" and 
            call.args and isinstance(call.args[0], ast.Constant) and 
            isinstance(call.args[0].value, str) and  
            call.args[0].value.lower() == "green"
            for call in calls
        )

        has_shape_turtle = any(
            isinstance(call.func, ast.Attribute) and 
            call.func.attr == "shape" and 
            call.args and isinstance(call.args[0], ast.Constant) and 
            isinstance(call.args[0].value, str) and  
            call.args[0].value.lower() == "turtle"
            for call in calls
        )

        # 📌 Vérification finale avec prise en compte des répétitions
        if (
            has_turtle_constructor_at_start and forward_calls == 4 and right_calls == 4 and 
            has_color_green and has_shape_turtle and has_turtle_done_at_end and
            turtle_instances == 1 and color_calls <= 1 and shape_calls <= 1
        ):
            return True, "🎉 Bravo ! Ton code est logique et optimisé !"

        # 🟡 Cas où il y a des répétitions → message subtil d'optimisation
        elif turtle_instances > 1 or color_calls > 1 or shape_calls > 1:
            return False, "🔍 Ton code fonctionne, mais il pourrait être mieux optimisé ! Essaie de simplifier certaines parties."

        # 🟡 Cas où le code est presque bon → encourager sans donner la réponse exacte
        elif has_turtle_constructor_at_start and has_turtle_done_at_end and forward_calls >= 3 and right_calls >= 3:
            return False, "🤔 Ton code est presque correct... Regarde bien l'ordre et l'efficacité des instructions."

        # 🔴 Cas général → message d'erreur générique
        else:
            return False, "❌ Il semble y avoir une erreur dans la logique du code. Essaie encore !"

    except SyntaxError:
        return False, "❌ Erreur de syntaxe détectée. Vérifie bien ton code !"

    except Exception as e:
        return False, "❌ Erreur dans ton code. Assure-toi d'écrire uniquement du Python valide !"

@app.route('/check-code', methods=['POST'])
def check_code():
    data = request.get_json()
    user_code = data.get("code", "")

    print("🔍 Code reçu :", user_code)  
    valid, message = is_valid_turtle_code(user_code)

    print("🔎 Résultat analyse :", valid, message)  
    return jsonify({"valid": valid, "error": message if not valid else None})

if __name__ == '__main__':
    app.run(debug=True)
