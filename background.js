document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#background-squares");
  const numSquares = 3; // Kuinka monta neliötä tehdään

  for (let i = 0; i < numSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    // Satunnainen koko (60px - 120px)
    const size = Math.floor(Math.random() * 20) + 100;
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;

    // Satunnainen opasiteetti (0.4 - 0.8)
    const opacity = Math.random() * 0.4 + 0.4;
    square.style.opacity = opacity;

    const positions = [
      { top: "20%", left: "15%" },
      { top: "70%", left: "92%" },
      { top: "10%", left: "70%" },
    ];
    const pos = positions[i];
    square.style.top = pos.top;
    square.style.left = pos.left;

    // Satunnainen animaatioviive (jotta eivät liiku samaan aikaan)
    const delay = Math.random() * 2;
    square.style.animationDelay = `${delay}s`;

    container.appendChild(square);
  }
});
