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

    const newWindow = window.open();
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

    const newWindow = window.open();
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

    const newWindow = window.open();
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

    const newWindow = window.open();
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

    const newWindow = window.open();
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

    const newWindow = window.open();
    newWindow.document.open();
    newWindow.document.write(fullHTML);
    newWindow.document.close();
}


function divExercice(element) {
    if (element.textContent.trim() === "Écrivez votre code ici") {
        element.innerHTML = "";
    }
}