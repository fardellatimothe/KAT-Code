// Initialisation de l'éditeur de code CodeMirror
document.addEventListener("DOMContentLoaded", function () {
  window.pythonEditor = CodeMirror.fromTextArea(
    document.getElementById("code-editor1"),
    {
      mode: "python",
      theme: "dracula",
      lineNumbers: true,
      indentUnit: 4,
      matchBrackets: true,
    }
  );
});

let codeSubmitted = false; // Variable pour suivre si l'élève a soumis un code
let attemptCount = 0; // Compteur de tentatives
const correctCode = `import turtle

# Configuration de la tortue
t = turtle.Turtle()
t.color("green")  # 🟢 Couleur verte
t.shape("turtle")  # 🐢 Apparence de tortue

# Dessiner un carré
t.forward(100)  # Avancer de 100 pixels
t.right(90)     # Tourner à droite de 90°

t.forward(100)  
t.right(90)     

t.forward(100)  
t.right(90)     

t.forward(100)  
t.right(90)     

# Maintenir la fenêtre ouverte
turtle.done()`;

let attempts = []; // Tableau pour stocker les tentatives uniques

function checkCode() {
  const userCode = pythonEditor.getValue().trim(); // Récupérer le code entré par l'utilisateur

  fetch("http://127.0.0.1:5000/check-code", {
    // Envoie au serveur Flask
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code: userCode }), // Envoie le code en JSON
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.valid) {
        document.getElementById("success-message").classList.remove("hidden");
        document.getElementById("error-message").classList.add("hidden");
      } else {
        document.getElementById("success-message").classList.add("hidden");
        document.getElementById("error-message").classList.remove("hidden");
        document.getElementById("error-message").innerText = data.error;
      }
    })
    .catch((error) => console.error("Erreur:", error));
}

// Fonction pour changer de chapitre
function changeChapter(chapterId) {
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active");
  });
  document.getElementById(chapterId).classList.add("active");

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active");
  });
  document
    .querySelector(`[onclick="changeChapter('${chapterId}')"]`)
    .classList.add("active");
}

// Fonction pour copier le code
function copyCode(button) {
  let codeBlock = button.nextElementSibling.innerText;
  navigator.clipboard.writeText(codeBlock).then(() => {
    button.innerText = "Copié !";
    setTimeout(() => (button.innerText = "Copier"), 1500);
  });
}

// Fonction pour afficher la correction seulement après 10 tentatives uniques
function showCorrection() {
  if (
    attemptCount >= 10 ||
    document.getElementById("code-editor1").value.trim() === correctCode
  ) {
    document.getElementById("correction1").classList.remove("hidden"); // Afficher la correction
  } else {
    alert(
      "Tu dois d'abord essayer de résoudre l'exercice au moins 10 fois avec des tentatives différentes avant de voir la correction !"
    );
  }
}

// Fonction pour copier le code de la correction
function copyCode(button) {
  const codeBlock = button.closest(".code-block").querySelector("code");
  const range = document.createRange();
  range.selectNode(codeBlock);
  window.getSelection().removeAllRanges(); // Supprimer les sélections précédentes
  window.getSelection().addRange(range); // Sélectionner le code
  document.execCommand("copy"); // Copier dans le presse-papiers
  alert("Code copié !");
}

function correction1() {
  const fullHTML = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Correction - Turtle</title>
            <style>
                :root {
                    --primary: #2563eb; /* Bleu principal */
                    --secondary: #f0f9ff; /* Bleu clair pour le fond */
                    --text: #1e293b; /* Gris foncé pour le texte */
                    --accent: #22c55e; /* Vert pour la correction */
                }

                body {
                    font-family: Arial, sans-serif;
                    background: var(--secondary);
                    color: var(--text);
                    padding: 2rem;
                }

                h1 {
                    color: var(--primary);
                }

                p {
                    font-size: 1.1rem;
                }

                pre {
                    background: white;
                    padding: 1rem;
                    border-radius: 0.5rem;
                    border-left: 4px solid var(--primary);
                    font-family: 'Courier New', monospace;
                    white-space: pre-wrap;
                }

                button {
                    background: var(--primary);
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border: none;
                    border-radius: 0.5rem;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: 0.3s;
                }

                button:hover {
                    background: #1d4ed8;
                }

                .correction {
                    background: var(--accent);
                }
            </style>
        </head>
        <body>
            <h1>Correction : Dessiner un carré avec Turtle</h1>
            <p>Voici le code optimisé selon les notions vues pour dessiner un carré en Python avec turtle:</p>
            <pre>
import turtle

# Configuration de la tortue
t = turtle.Turtle()
t.color("green")  # 🟢 Couleur verte
t.shape("turtle")  # 🐢 Apparence de tortue

# Dessiner un carré
t.forward(100)  # Avancer de 100 pixels
t.right(90)     # Tourner à droite de 90°

t.forward(100)  
t.right(90)     

t.forward(100)  
t.right(90)     

t.forward(100)  
t.right(90)     

# Maintenir la fenêtre ouverte
turtle.done()
            </pre>
        </body>
        </html>
    `;

  const newWindow = window.open();
  newWindow.document.open();
  newWindow.document.write(fullHTML);
  newWindow.document.close();
}

let cpt = 0;

function divExercice() {
  if (cpt < 1) {
    document.getElementById("code-editor").textContent = "";
    cpt = 1;
  }
}
