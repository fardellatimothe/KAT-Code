function startCourse(button) {
    const card = button.closest('.course-card');
    const progress = card.querySelector('.progress');

    let currentProgress = 0;
    button.disabled = true;
    button.style.opacity = "0.7";

    console.log("c'est bon");

    const interval = setInterval(() => {
        currentProgress += 1;
        progress.style.width = `${currentProgress}%`;

        if (currentProgress >= 100) {
            clearInterval(interval);
            button.disabled = false;
            button.style.opacity = "1";
        }
    }, 50);

    console.log("c'est bon 2");
}