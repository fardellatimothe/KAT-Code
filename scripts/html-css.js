function copyCode(button) {
  const codeText = button.nextElementSibling.innerText;
  navigator.clipboard.writeText(codeText);

  button.textContent = "Copié !";
  setTimeout(() => {
    button.textContent = "Copier";
  }, 2000);
}

function changeChapter(chapterId) {
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active");
  });
  document.getElementById(chapterId).classList.add("active");

  document
    .querySelectorAll(".nav-item")
    .forEach((nav) => nav.classList.remove("active"));
  document
    .querySelector(`.nav-item[onclick="changeChapter('${chapterId}')"]`)
    .classList.add("active");
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

let cpt = 0;

function divExercice() {
  if (cpt < 1) {
    document.getElementById("code-editor").textContent = "";
    cpt = 1;
  }
}
