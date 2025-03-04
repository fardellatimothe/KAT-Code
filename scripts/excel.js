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

// Actualisation de la page
document.addEventListener("DOMContentLoaded", function() {
    let savedChapter = localStorage.getItem("currentChapter");
    if (savedChapter) {
        changeChapter(savedChapter);
    }
});

function showSolution(solutionId) {
    const solution = document.getElementById(solutionId);
    if (solution) {
        solution.style.display = "block";
    }
}