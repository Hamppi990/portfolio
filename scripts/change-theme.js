// Valitaan dark mode -nappi ja tarkastellaan, onko dark mode tallennettuna paikalliseen säilytykseen
const themeSwitcher = document.getElementById("theme");
const bodyElement = document.body;

// Funktio dark mode:n vaihtamiseen
function toggleDarkTheme() {
  bodyElement.classList.toggle("dark");

  // Tallenna asetukset localStorageen, jotta pysyy sivun uudelleenlatauksella
  if (bodyElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    // Vaihdetaan ikoniksi esimerkiksi kuutio-ikoni tai vastaavaa
    themeSwitcher.innerHTML =
      '<i class="fa-solid fa-moon" style="font-size: 1rem; margin-top: 0;"></i>';
  } else {
    localStorage.setItem("theme", "light");
    themeSwitcher.innerHTML =
      '<i class="fa-solid fa-sun" style="font-size: 1rem; margin-top: 0;"></i>';
  }
}

// Kuunnellaan nappia
themeSwitcher.addEventListener("click", toggleDarkTheme);

// Ladataan teema, jos käyttäjä on aiemmin valinnut dark mode:n
window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    bodyElement.classList.add("dark");
    themeSwitcher.innerHTML =
      '<i class="fa-solid fa-moon" style="font-size: 1rem; margin-top: 0;"></i>';
  }
});
