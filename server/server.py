from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import ast
import os

app = Flask(__name__, static_folder='python', template_folder='../python')  # Définit le dossier contenant les fichiers HTML
CORS(app, resources={r"/check-code": {"origins": "*"}})

@app.route('/')
def home():
    return "🚀 Serveur Flask en ligne sur Render ! Utilise /check-code pour tester."
@app.route('/check-code', methods=['POST'])
def check_code():
    data = request.get_json()
    if not data or "code" not in data:
        return jsonify({"valid": False, "error": "Aucun code envoyé."}), 400

    user_code = data["code"]
    print(f"🔍 Code reçu : {user_code}")  # Debug dans les logs Render

    valid, message = is_valid_turtle_code(user_code)
    
    return jsonify({"valid": valid, "error": message if not valid else None})


# 📌 Route pour afficher `python.html`
@app.route('/python')
def show_python_page():
    return render_template("python.html")  # Charge `python.html` depuis le dossier `python/`



# Liste des bibliothèques interdites
FORBIDDEN_LIBRARIES = {"os", "sys", "random", "math", "subprocess", "shutil"}

# 📌 Nombre maximal d'instructions autorisées pour éviter les répétitions inutiles
MAX_INSTRUCTIONS = 20

def is_valid_turtle_code(user_code):
    try:
        tree = ast.parse(user_code)  # Analyse du code en AST
        calls = [node for node in ast.walk(tree) if isinstance(node, ast.Call)]
        error_types = set()  # 📌 Types d'erreurs détectées

        # 📌 Vérifier que le code ne contient pas trop d'instructions inutiles
        if len(calls) > MAX_INSTRUCTIONS:
            error_types.add("❌ Ton code contient trop d'instructions inutiles. Essaie de le simplifier.")

        # 📌 Vérifier les imports interdits et s'assurer que import turtle est présent
        import_nodes = [node for node in ast.walk(tree) if isinstance(node, ast.Import) or isinstance(node, ast.ImportFrom)]
        used_libraries = {imp.names[0].name for imp in import_nodes if isinstance(imp, ast.Import)}

        if used_libraries & FORBIDDEN_LIBRARIES:
            error_types.add("❌ Il y a des éléments non autorisés dans ton code.")

        if "turtle" not in used_libraries:
            error_types.add("❌ Il semble manquer un élément essentiel au début du code.")

        # 📌 Vérifier si turtle est importé mais jamais utilisé
        has_turtle_usage = any(
            isinstance(call.func, ast.Attribute) and isinstance(call.func.value, ast.Name) and call.func.value.id == "turtle"
            for call in calls
        )
        if "turtle" in used_libraries and not has_turtle_usage:
            error_types.add("❌ Il semble manquer des éléments essentiels pour que ton code fonctionne.")

        # 📌 Vérifier que la tortue est bien créée avant son utilisation
        turtle_created = False
        for call in calls:
            if isinstance(call.func, ast.Attribute) and isinstance(call.func.value, ast.Name):
                if call.func.value.id == "turtle" and call.func.attr == "Turtle":
                    turtle_created = True
                elif call.func.attr in ["forward", "right", "color", "shape"] and not turtle_created:
                    error_types.add("❌ Certaines instructions sont placées avant la création de la tortue. Vérifie ton code.")
                    break  # Pas besoin de continuer à vérifier, on a détecté une erreur

        # 📌 Vérifier que le premier appel est turtle.Turtle()
        first_call = calls[0] if calls else None
        has_turtle_constructor_at_start = (
            first_call and isinstance(first_call.func, ast.Attribute) and 
            isinstance(first_call.func.value, ast.Name) and 
            first_call.func.value.id == "turtle" and 
            first_call.func.attr == "Turtle"
        )
        if not has_turtle_constructor_at_start:
            error_types.add("❌ L'organisation du code ne semble pas correcte.")

        # 📌 Vérifier que le dernier appel est turtle.done()
        last_call = calls[-1] if calls else None
        has_turtle_done_at_end = (
            last_call and isinstance(last_call.func, ast.Attribute) and 
            isinstance(last_call.func.value, ast.Name) and 
            last_call.func.value.id == "turtle" and 
            last_call.func.attr == "done"
        )
        if not has_turtle_done_at_end:
            error_types.add("❌ L'organisation du code ne semble pas correcte.")

        # 📌 Vérifier qu'il n'y a pas plusieurs turtle.Turtle()
        turtle_instances = sum(
            1 for call in calls 
            if isinstance(call.func, ast.Attribute) and 
               isinstance(call.func.value, ast.Name) and 
               call.func.value.id == "turtle" and 
               call.func.attr == "Turtle"
        )
        if turtle_instances > 1:
            error_types.add("❌ Il y a des répétitions inutiles dans ton code.")

        # 📌 Vérifier les mouvements
        forward_calls = sum(
            1 for call in calls 
            if isinstance(call.func, ast.Attribute) and 
               call.func.attr == "forward" and 
               call.args and isinstance(call.args[0], ast.Constant) and 
               call.args[0].value == 100
        )
        if forward_calls != 4:
            error_types.add("❌ Le déplacement de la tortue semble incorrect.")

        right_calls = sum(
            1 for call in calls 
            if isinstance(call.func, ast.Attribute) and 
               call.func.attr == "right" and 
               call.args and isinstance(call.args[0], ast.Constant) and 
               call.args[0].value == 90
        )
        if right_calls != 4:
            error_types.add("❌ Le déplacement de la tortue semble incorrect.")

        # 📌 Vérifier la couleur et la forme (peu importe l'emplacement)
        has_color_green = any(
            isinstance(call.func, ast.Attribute) and 
            call.func.attr == "color" and 
            call.args and isinstance(call.args[0], ast.Constant) and 
            isinstance(call.args[0].value, str) and  
            call.args[0].value.lower() == "green"
            for call in calls
        )
        if not has_color_green:
            error_types.add("❌ Il manque un élément de personnalisation.")

        has_shape_turtle = any(
            isinstance(call.func, ast.Attribute) and 
            call.func.attr == "shape" and 
            call.args and isinstance(call.args[0], ast.Constant) and 
            isinstance(call.args[0].value, str) and  
            call.args[0].value.lower() == "turtle"
            for call in calls
        )
        if not has_shape_turtle:
            error_types.add("❌ Il manque un élément de personnalisation.")

        # 📌 Suggérer une simplification si le code est presque bon
        if forward_calls >= 2 and right_calls >= 2 and (forward_calls < 4 or right_calls < 4):
            error_types.add("💡 Ton code semble presque bon, mais il pourrait être mieux organisé.")

        # 📌 Vérification finale avec gestion des erreurs multiples
        if not error_types:
            return True, "🎉 Bravo ! Ton code est logique et optimisé !"
        
        # 📌 Si plusieurs erreurs sont détectées, donner un message global
        if len(error_types) > 2:
            return False, "❌ Il y a plusieurs erreurs dans ton code. Reprends-le et vérifie chaque élément."
        
        # 📌 Si une ou deux erreurs seulement, afficher des messages plus généraux
        return False, "\n".join(error_types)

    except SyntaxError:
        return False, "❌ Erreur de syntaxe détectée. Vérifie bien ton code !"

    except Exception as e:
        return False, "❌ Il y a une erreur générale dans ton code. Vérifie bien ce que tu as écrit."




if __name__ == '__main__':
    port = int(os.environ.get("PORT", 10000))  # Render définit le PORT automatiquement
    app.run(host="0.0.0.0", port=port)  # 0.0.0.0 pour écouter sur toutes les interfaces
