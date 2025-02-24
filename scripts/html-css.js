function copyCode(button) {
    const codeText = button.nextElementSibling.innerText;
    navigator.clipboard.writeText(codeText)
    
    button.textContent = "Copié !";
    setTimeout(() => {
        button.textContent = "Copier";
    }, 2000);
}

function changeChapter(chapterId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(chapterId).classList.add('active');
    
    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
    document.querySelector(`.nav-item[onclick="changeChapter('${chapterId}')"]`).classList.add('active');
    window.scrollTo({top: 0});
}

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


function divExercice(element) {
    if (element.textContent.trim() === "Écrivez votre code ici" | element.textContent.trim() === "Écrivez votre CSS ici") {
        element.innerHTML = "";
    }
}

document.querySelectorAll(".interactive-demo").forEach(editor => {
    editor.addEventListener("keydown", function(e) {
        if (e.key === "Tab") {
            e.preventDefault();
            document.execCommand("insertText", false, "    ");
        }
    });
});

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