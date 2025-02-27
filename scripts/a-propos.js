document.addEventListener("DOMContentLoaded", () => {
  console.log("Page À Propos chargée !");

  // Sélection des éléments de la page
  const teamSection = document.querySelector(".team");
  const cards = document.querySelectorAll(".card");
  const visionSection = document.querySelector(".vision");

  // Fonction pour révéler les cartes d'équipe au scroll
  const revealCards = () => {
    if (!teamSection) return;

    const sectionTop = teamSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight / 1.2;

    if (sectionTop < triggerPoint) {
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("visible");
        }, index * 200); // Effet décalé pour chaque carte
      });
    }
  };

  // Fonction pour révéler la section "Notre Mission" au scroll
  const revealVision = () => {
    if (!visionSection) return;

    const sectionTop = visionSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight / 1.2;

    if (sectionTop < triggerPoint) {
      visionSection.classList.add("visible");
    }
  };

  // Ajout des écouteurs d'événements
  window.addEventListener("scroll", () => {
    revealCards();
    revealVision();
  });

  // Lancer l'effet au chargement si les sections sont déjà visibles
  revealCards();
  revealVision();

  // Animation de bienvenue dans la console
  setTimeout(() => {
    console.log(
      "%cBienvenue sur la page À Propos de KAT & Code !",
      "color: blue; font-size: 16px;"
    );
  }, 500);
});
