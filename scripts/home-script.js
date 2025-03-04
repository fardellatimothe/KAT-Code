function startCourse(button) {
    const card = button.closest('.course-card');
    const progress = card.querySelector('.progress');

    button.disabled = true;
    button.style.opacity = "0.7";

    let startTime = performance.now(); // Temps de départ
    const duration = 2000; // 2 secondes

    function animateProgress(currentTime) {
        let elapsedTime = currentTime - startTime;
        let progressPercentage = Math.min(1, elapsedTime / duration); // Valeur entre 0 et 1

        // Fonction d'interpolation ease-out (accélération rapide, décélération lente)
        let easedProgress = 1 - Math.pow(1 - progressPercentage, 3); 

        progress.style.width = `${easedProgress * 100}%`;

        if (elapsedTime < duration) {
            requestAnimationFrame(animateProgress);
        } else {
            button.disabled = false;
            button.style.opacity = "1";
        }
    }

    requestAnimationFrame(animateProgress);
}