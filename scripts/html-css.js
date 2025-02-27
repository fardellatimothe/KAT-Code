// Copier le code
function copyCode(button) {
    const codeBlock = button.closest('.code-block'); // Trouve la div parent contenant le code
    const codeText = codeBlock.innerText; // Récupère le texte de la div, avec les entités HTML

    const codeWithoutButton = codeText.replace("Copier\n", ""); // Remplace "Copier" par rien

    navigator.clipboard.writeText(codeWithoutButton) // Copie dans le presse-papiers
        .then(() => {
            button.textContent = "Copié !"; // Change le texte du bouton pour informer l'utilisateur
            setTimeout(() => {
                button.textContent = "Copier"; // Restaure le texte du bouton après 2 secondes
            }, 2000);
        })
        .catch(err => {
            console.error("Erreur de copie :", err); // En cas d'erreur
        });
}


// Actualisation de la page
document.addEventListener("DOMContentLoaded", function() {
    let savedChapter = localStorage.getItem("currentChapter");
    if (savedChapter) {
        changeChapter(savedChapter);
    }
});

// Changement des chapitres
function changeChapter(chapterId) {
    localStorage.setItem("currentChapter", chapterId);

    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(chapterId).classList.add("active");

    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
    let navItem = document.querySelector(`.nav-item[onclick="changeChapter('${chapterId}')"]`);
    if (navItem) {
        navItem.classList.add('active');
    }

    window.scrollTo({ top: 0 });
}

// Visualisation du code chapitre 1
function visualizeCode1() {
    const editorContent = document.getElementById('code-editor1').innerText;
    const decodedContent = editorContent
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&nbsp;/g, ' ');

    if (decodedContent.trim().length === 0) {
        alert("Le champ de code est vide. Veuillez écrire du HTML avant de visualiser.");
        return;
    }

    const fullHTML = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Prévisualisation</title>
            <style>
                * {
                    margin: 10px;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }
            </style>
        </head>
        <body>
            ${decodedContent}
        </body>
        </html>
    `;

    const newWindow = window.open("","_blank");
    newWindow.document.open();
    newWindow.document.write(fullHTML);
    newWindow.document.close();
}

// Visualisation du code chapitre 2
function visualizeCode2() {
    const editorContent = document.getElementById('code-editor2').innerText;
    const decodedContent = editorContent
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&nbsp;/g, ' ');

    if (decodedContent.trim().length === 0) {
        alert("Le champ de code est vide. Veuillez écrire du HTML avant de visualiser.");
        return;
    }

    const fullHTML = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Prévisualisation</title>
            <style>
                * {
                    margin: 10px;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }
            </style>
        </head>
        <body>
            ${decodedContent}
        </body>
        </html>
    `;

    const newWindow = window.open("","_blank");
    newWindow.document.open();
    newWindow.document.write(fullHTML);
    newWindow.document.close();
}

// Visualisation du code chapitre 3
function visualizeCode3() {
    const editorContent = document.getElementById('code-editor3').innerText;
    const decodedContent = editorContent
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&nbsp;/g, ' ');

    if (decodedContent.trim().length === 0) {
        alert("Le champ de code est vide. Veuillez écrire du HTML avant de visualiser.");
        return;
    }

    const fullHTML = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Prévisualisation</title>
            <style>
                * {
                    margin: 10px;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }

                form {
                    display: flex;
                    flex-direction: column;
                    max-width: 300px;
                }

                label {
                    margin-bottom: 5px;
                }
                    
                input, textarea, button {
                    padding: 8px;
                    margin-bottom: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
            </style>
        </head>
        <body>
            ${decodedContent}
        </body>
        </html>
    `;

    const newWindow = window.open("","_blank");
    newWindow.document.open();
    newWindow.document.write(fullHTML);
    newWindow.document.close();
}

// Visualisation du code chapitre 4
function visualizeCode4() {
    let editorContent = document.getElementById('code-editor4').innerText.trim();

    if (editorContent.length === 0) {
        alert("Le champ de code est vide. Veuillez écrire du HTML avant de visualiser.");
        return;
    }

    console.log("je suis la");

    editorContent = editorContent
        .replace(/\s*{\s*/g, " { ")   // Ajoute un seul espace après les accolades
        .replace(/\s*}\s*/g, " } ")   // Ajoute un seul espace avant les accolades fermantes
        .replace(/\s*;\s*/g, "; ")    // Ajoute un seul espace après les points-virgules
        .replace(/\s*:\s*/g, ": ")    // Ajoute un seul espace après les deux-points
        .replace(/\n+/g, " ")         // Supprime les retours à la ligne
        .replace(/\s{2,}/g, " ");     // Supprime les espaces multiples

    const fullHTML = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Prévisualisation</title>
            <style>
                * {
                    margin: 10px;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }

                form {
                    display: flex;
                    flex-direction: column;
                    max-width: 300px;
                }

                label {
                    margin-bottom: 5px;
                }

                input, textarea, button {
                    padding: 8px;
                    margin-bottom: 10px;
                }

                textarea {
                    resize: none;
                }

                ${editorContent}

            </style>
        </head>
        <body>
            <form>
                <label class="grand">Prénom :</label>
                <input type="text" id="prenom" placeholder="Votre prénom" required>
        
                <label class="grand">Nom :</label>
                <input type="text" id="nom" placeholder="Votre nom" required>
        
                <label>Email :</label>
                <input type="email" id="email" placeholder="Votre email" required>
        
                <label>Message :</label>
                <textarea id="message" placeholder="Votre message" rows="4"></textarea>
        
                <label>Date de naissance :</label>
                <input type="date" id="date-naissance">
        
                <button type="submit">Envoyer</button>
            </form>
        </body>
        </html>
    `;

    const newWindow = window.open("","_blank");
    newWindow.document.open();
    newWindow.document.write(fullHTML);
    newWindow.document.close();
}


// Visualisation de la correction de l'exercice final du chapitre 1
function correction1() {
    const fullHTML = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Prévisualisation</title>
            <style>
                * {
                    margin: 10px;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }
            </style>
        </head>
        <body>
            <h1>Titre Principal</h1>
            <p>Mon premier paragraphe</p>
            <p>Mon deuxième paragraphe</p>
            <a href="cesi.fr">Visitez ce site</a>
            <ul>
                <li>Élément n°1</li>
                <li>Élément n°2</li>
                <li>Élément n°3</li>
            </ul>
        </body>
        </html>
    `;

    const newWindow = window.open("","_blank");
    newWindow.document.open();
    newWindow.document.write(fullHTML);
    newWindow.document.close();
}

// Visualisation de la correction de l'exercice final du chapitre 2
function correction2() {
    const fullHTML = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Prévisualisation</title>
            <style>
                * {
                    margin: 10px;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }
            </style>
        </head>
        <body>
            <p style="margin: 10px 0;">Voici un exemple de correction :</p>
            <header>
                <h1>Bienvenue sur mon site</h1>
                <nav>
                    <ul>
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">À propos</a></li>
                        <li><a href="#">Nous contacter</a></li>
                    </ul>
                </nav>
            </header>
            
            <div>
                <section>
                    <h2>Présentation</h2>
                    <p>Cette leçon explique les bases du<strong>HTML</strong>et<mark>CSS</mark>.</p>
                </section>
                
                <article>
                    <h2>Article</h2>
                    <p>Ceci est un exemple d'article sur le HTML.</p>
                </article>
            </div>

            <footer>
                <p>&copy; 2025 Mon Site Web - Tous droits réservés.</p>
            </footer>
        </body>
        </html>
    `;

    const newWindow = window.open("","_blank");
    newWindow.document.open();
    newWindow.document.write(fullHTML);
    newWindow.document.close();
}

// Visualisation de la correction de l'exercice final du chapitre 3
function correction3() {
    const fullHTML = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Prévisualisation</title>
            <style>
                * {
                    margin: 10px;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }

                form {
                    display: flex;
                    flex-direction: column;
                    max-width: 300px;
                }

                label {
                    margin-bottom: 5px;
                }

                input, textarea, button {
                    padding: 8px;
                    margin-bottom: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
            </style>
        </head>
        <body>
            <form action="#" method="POST">
                <label for="prenom">Prénom :</label>
                <input type="text" id="prenom" name="prenom" required>

                <label for="nom">Nom :</label>
                <input type="text" id="nom" name="nom" required>

                <label for="email">Email :</label>
                <input type="email" id="email" name="email" placeholder="Votre email" required>

                <label for="message">Message :</label>
                <textarea id="message" name="message" placeholder="Votre message" rows="4"></textarea>

                <label for="date-naissance">Date de naissance :</label>
                <input type="date" id="date-naissance" name="date-naissance">

                <button type="submit">Envoyer</button>
            </form>
        </body>
        </html>
    `;

    const newWindow = window.open("","_blank");
    newWindow.document.open();
    newWindow.document.write(fullHTML);
    newWindow.document.close();
}

// Visualisation de la correction de l'exercice final du chapitre 4
function correction4() {
    const fullHTML = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Prévisualisation</title>
            <style>
                * {
                    margin: 10px;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }

                form {
                    display: flex;
                    flex-direction: column;
                    max-width: 300px;
                    background-color: #aaa;
                }

                input, button {
                    border-radius: 10px;
                }

                label {
                    margin-bottom: 5px;
                    color: lightblue;
                }

                input, textarea, button {
                    padding: 8px;
                    margin-bottom: 10px;
                    border: 1px solid #ccc;
                }

                textarea {
                    resize: none;
                }

                .grand {
                    font-size: 20px;
                }

                #prenom {
                    background: red;
                }

                #nom {
                    background: purple;
                }

                #email {
                    background: blue;
                }

                #message {
                    background: yellow;
                }

                #date-naissance {
                    background: green;
                }
            </style>
        </head>
        <body>
            <p style="margin: 10px 0;">Voici un exemple de correction (police utilisé : Segoe UI):</p>
            <form>
                <label class="grand">Prénom :</label>
                <input type="text" id="prenom" placeholder="Votre prénom" required>
        
                <label class="grand">Nom :</label>
                <input type="text" id="nom" placeholder="Votre nom" required>
        
                <label>Email :</label>
                <input type="email" id="email" placeholder="Votre email" required>
        
                <label>Message :</label>
                <textarea id="message" placeholder="Votre message" rows="4"></textarea>
        
                <label>Date de naissance :</label>
                <input type="date" id="date-naissance">
        
                <button type="submit">Envoyer</button>
            </form>
        </body>
        </html>
    `;

    const newWindow = window.open("","_blank");
    newWindow.document.open();
    newWindow.document.write(fullHTML);
    newWindow.document.close();
}

// Supprime le texte dans le div de l'exercice
function divExercice(element) {
    if (element.textContent.trim() === "Écrivez votre code ici" | element.textContent.trim() === "Écrivez votre CSS ici") {
        element.innerHTML = "";
    }
}

// Permet de faire des tab dans la zone d'exercice
document.querySelectorAll(".interactive-demo").forEach(editor => {
    editor.addEventListener("keydown", function(e) {
        if (e.key === "Tab") {
            e.preventDefault();
            document.execCommand("insertText", false, "    ");
        }
    });
});


// Slider pour visualisation margin et padding chapitre 4.5
const marginSlider = document.getElementById("marginRange");
const paddingSlider = document.getElementById("paddingRange");
const marginValue = document.getElementById("marginValue");
const paddingValue = document.getElementById("paddingValue");
const box = document.getElementById("box");

function updateStyles() {
    const margin = marginSlider.value + "px";
    const padding = paddingSlider.value + "px";
    
    marginValue.textContent = marginSlider.value;
    paddingValue.textContent = paddingSlider.value;
    
    box.style.margin = margin;
    box.style.padding = padding;
}

marginSlider.addEventListener("input", updateStyles);
paddingSlider.addEventListener("input", updateStyles);


// Visualisation de l'effet de position en CSS chapitre 5
document.getElementById("positionSelect").addEventListener("change", function() {
    let box = document.getElementById("box-position");
    let infoText = document.getElementById("infoText");
    let selectedValue = this.value;
    
    box.style.position = selectedValue;
    box.style.top = (selectedValue === 'static') ? '' : '40px';
    box.style.left = (selectedValue === 'static') ? '' : '40px';
    
    if (selectedValue === 'fixed') {
        box.style.top = '5200px';
        box.style.left = '10px';
    }

    
    let explanations = {
        'static': "<strong>Par défaut (static)</strong> : C'est la position normale d'un élément, il est placé selon le flux du document.",
        'relative': "<strong>Relative</strong> : L'élément est placé normalement, mais on peut le déplacer sans impacter les autres éléments autour.",
        'absolute': "<strong>Absolute</strong> : L'élément se détache complètement de son emplacement habituel. Elle ne suit plus les autres éléments et se positionne en fonction du premier parent.",
        'fixed': "<strong>Fixed</strong> : L'élément est positionné par rapport à la fenêtre du navigateur, il reste toujours visible même quand on fait défiler la page.",
        'sticky': "<strong>Sticky</strong> : L'élément commence comme un élément normal, mais devient fixe lorsqu'on fait défiler la page jusqu'à sa position définie."
    };
    
    infoText.innerHTML = explanations[selectedValue];
});

// Visualisation de media query chapitre 6
document.addEventListener("DOMContentLoaded", function () {
    let div = document.querySelector(".div-media");
    let button = document.querySelector(".button-media");

    function checkWidth() {
        let divWidth = div.offsetWidth;
        if (divWidth < 600) {
            button.style.backgroundColor = "yellow";
            button.style.color = "black";
        } else {
            button.style.backgroundColor = "purple";
            button.style.color = "white";
        }
    }
    setInterval(checkWidth, 100);
});

// Quiz final
const questions = [
    { q: "Quel est le rôle du doctype en HTML ?", options: ["Définir l'encodage", "Indiquer la version du document HTML", "Ajouter un commentaire", "Spécifier le CSS à utiliser"], correct: 1 },
    { q: "Que doit on préciser lorsqu'on utilise l'élément &lt;a&gt; ?", options: ["Un attribut <code>target=''</code>", "Un attribut <code>href=''</code>", "Deux attributs <code>href</code> et <code>target</code>", "Aucun attribut est obligatoire"], correct: 1 },
    { q: "Quelle est la différence entre &lt;section&gt; et &lt;article&gt; ?", options: ["Aucune différence", "<code>&lt;section&gt</code> est plus générique", "<code>&lt;article&gt;</code> est un contenu autonome", "<code>&lt;section&gt;</code> doit être utilisé à l'intérieur de <code>&lt;article&gt;</code>"], correct: 2 },
    { q: "Quelle propriété CSS permet de changer la police du texte ?", options: ["font-family", "text-style", "font-type", "font-weight"], correct: 0 },
    { q: "Quel mode d'affichage est par défaut pour un élément &lt;span&gt; ?", options: ["block", "inline", "flex", "grid"], correct: 1 },
    { q: "Que fait 'position: sticky' en CSS ?", options: ["Fixe l'élément en haut de la page", "Le rend collant après un certain défilement", "Le centre horizontalement", "Ajuste la transparence"], correct: 1 },
    { q: "Quel est l'intérêt des feuilles de style CSS ?", options: ["Séparer le design du contenu", "Structurer le texte", "Créer des liens", "Ajouter des images"], correct: 0 },
    { q: "Quelle unité CSS est dépendante de la largeur de la fenêtre ?", options: ["px", "vw", "em", "rem"], correct: 1 },
    { q: "Quelle méthode est la plus efficace pour un site responsive ?", options: ["Utiliser uniquement des media queries", "Utiliser Flexbox et Grid", "Tout coder en pixels", "Utiliser des tableaux HTML"], correct: 1 },
    { q: "Quel est l'élément parent de &lt;th&gt; et &lt;td&gt; dans un tableau HTML ?", options: ["<code>&lt;tr&gt;</code>", "<code>&lt;table&gt;</code>", "<code>&lt;thead&gt;</code>", "<code>&lt;tbody&gt;</code>"], correct: 0 },
    { q: "Quelle pseudo-classe permet de cibler un élément au clique ?", options: ["<code>:focus</code>", "<code>:hover</code>", "<code>:checked</code>", "<code>:active</code>"], correct: 0 },
    { q: "Quelle est la meilleure pratique pour améliorer l'accessibilité HTML ?", options: ["Utiliser uniquement des &lt;div&gt;", "Éviter les balises sémantiques", "Utiliser des attributs ARIA et des labels", "Tout écrire en majuscules"], correct: 2 },
    { q: "Quelle propriété CSS permet de créer une grille de mise en page ?", options: ["grid-template-columns", "flex-direction", "display: block", "align-content"], correct: 0 },
    { q: "A quoi sert la balise &lt;rem&gt; en CSS ?", options: ["Met le texte en surbrillance", "Souligne de texte", "Barrer de texte", "Met le texte en italique"], correct: 1 },
    { q: "Quel sélecteur CSS cible tous les paragraphes ?", options: ["p", "#p", ".p", "*"], correct: 0 },
    { q: "Quel attribut permet d'ouvrir un lien dans un nouvel onglet ?", options: ["<code>target='_blank'</code>", "<code>rel='noopener'</code>", "<code>href='_new'</code>", "<code>open='newtab'</code>"], correct: 0 },
    { q: "Quelle propriété CSS permet d'ajouter une ombre à un texte ?", options: ["text-shadow", "shadow-text", "box-shadow", "font-shadow"], correct: 0 },
    { q: "Quel élément HTML est utilisé pour créer un formulaire ?", options: ["<code>&lt;form&gt;</code>", "<code>&lt;input&gt;</code>", "<code>&lt;button&gt;</code>", "<code>&lt;fieldset&gt;</code>"], correct: 0 },
    { q: "Quelle propriété CSS permet de contrôler l'espacement entre les lignes de texte ?", options: ["letter-spacing", "line-height", "word-spacing", "spacing"], correct: 1 },
    { q: "Que signifie RGB en CSS ?", options: ["Red Green Blue", "Right Grey Black", "Random Graphic Blend", "Real Gradient Blur"], correct: 0 },
];

const questionContainer = document.getElementById("questions");

questions.forEach((question, index) => {
    const div = document.createElement("div");
    div.classList.add("question");
    div.innerHTML = `<br><p class="questions-quiz">${index + 1}. ${question.q}</p>`;
    question.options.forEach((option, optIndex) => {
        div.innerHTML += `<label class="label-quiz"><input class="input-quiz" type="radio" name="q${index}" value="${optIndex}"> ${option}</label><br>`;
    });
    questionContainer.appendChild(div);
});

function calculateScore() {
    let score = 0;
    questions.forEach((question, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === question.correct) {
            score++;
        }
    });
    
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Score: ${score} / 20`;
    
    if (score >= 15) {
        resultDiv.style.color= "green"
        resultDiv.innerHTML += "<br>Félicitations, vous avez validé l'examen !";
    } else {
        resultDiv.innerHTML += "<br>Dommage, vous devrez réessayer.";
        resultDiv.style.color= "red"
    }
}