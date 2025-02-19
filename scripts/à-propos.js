document.addEventListener("DOMContentLoaded", function () {
  // 🎨 Effet de texte qui s'écrit tout seul
  const textElement = document.querySelector(".typing-text");
  const text = "De Zéro à Calé en code";
  let index = 0;

  function typeText() {
    if (index < text.length) {
      textElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeText, 50);
    }
  }
  typeText();

  // ✨ Animation d'apparition des sections au scroll
  const sections = document.querySelectorAll("section");

  function revealSections() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight - 100) {
        section.classList.add("visible");
      }
    });
  }
  window.addEventListener("scroll", revealSections);
  revealSections();

  // 🌀 Effet flip card sur les étudiants
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });

  // 🔥 Zoom sur les images de la galerie au survol
  document.querySelectorAll(".gallery img").forEach((img) => {
    img.addEventListener("mouseover", () => {
      img.style.transform = "scale(1.1)";
      img.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
    });
    img.addEventListener("mouseout", () => {
      img.style.transform = "scale(1)";
      img.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    });
  });
});
