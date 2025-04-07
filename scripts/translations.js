document.addEventListener("DOMContentLoaded", () => {
  // Retrieve the saved language from localStorage
  const isFinnish = localStorage.getItem("isFinnish") === "true";
  setLanguage(isFinnish);

  // Attach event listener to language switch button
  document.getElementById("language").addEventListener("click", switchLanguage);
});
function switchLanguage() {
  const isFinnish = localStorage.getItem("isFinnish") !== "true"; // Toggle
  setLanguage(isFinnish);
}
function setLanguage(isFinnish) {
  localStorage.setItem("isFinnish", isFinnish);

  const textContentMap = {
    language: ["EN", "FI"],
    "nav-home-text": ["Home", "Koti"],
    "nav-project-text": ["Projects", "Projektit"],
    "nav-skills-text": ["Skills", "Taidot"],
    "nav-experience-text": ["Experience", "Kokemus"],
    "nav-contact-text": ["Contact", "Ota yhteyttä"],
    "projects-title": ["Projects", "Projektit"],
    "skills-title": ["Skills", "Taidot"],
    "experience-title": ["Experience", "Kokemus"],
    "contact-title": ["Contact", "Ota yhteyttä"],
    "hero-title": ["Software Developer", "Ohjelmistokehittäjä"],
    "welcome-text": [
      "Welcome to my website, I am",
      "Tervetuloa sivulleni, olen",
    ],
    "hero-scroll-text": ["View Projects", "Katso projekteja"],
    "project1-pagelink": ["Show on browser", "Näytä selaimessa"],
    "project1-link": ["View on GitHub", "Katso GitHubissa"],
    "project1-description": [
      "This is a website for a fictional company. The site showcases the company's services and provides useful tools for customers, such as color testing and an inspiring gallery. In this project, I learned to use Bootstrap and JQuery.",
      "Tämä on kuvitteellisen yrityksen verkkosivusto. Sivuston tarkoituksena on esitellä yrityksen palvelut ja tarjota asiakkaille hyödyllisiä työkaluja, kuten värien testaus ja inspiroiva galleria. Tässä projektissa opettelin Bootstrap ja JQuery käyttöä.",
    ],
    "project2-description": [
      "A humorous Niilo22 YouTuber-themed memory and word game created in C#. The platform is Windows Forms. The application features two game modes: a memory game and a word game. In the memory game, the player's goal is to find all the matching pairs with as few attempts and as little time as possible. In the word game, the player's objective is to guess as many words as possible in the shortest amount of time. This was my first programming display project.",
      "C#- kielellä tehty humoristinen YouTubettaja Niilo22 teemainen muisti- ja sanapeli. Alustana toimii Windows Forms. Sovelluksessa on kaksi pelimuotoa: muistipeli ja sanapeli. Muistipelissä pelaajan tavoitteena on löytää kaikki kuvaparit mahdollisimman vähillä yrityksillä ja aikaa käyttäen. Sanapelissä pelaajan tavoitteena on arvata mahdollisimman monta sanaa ja mahdollisimman nopeassa ajassa. Tämä oli minun ensimmäinen ohjelmointinäyttötyö.",
    ],
    "project3-description": [
      "Car word game, where the player tries to guess as many car brands as possible from scrambled letters. Each correct answer earns points, and the game includes a time bonus system to reward quick thinking. Players can also enable optional hints, which appear after a short countdown to help identify the correct word. The app tracks total time used and calculates the final score based on performance. This was my web-based game project where I practiced DOM manipulation, timers, and game logic using JavaScript.",
      "Autosanapeli, jossa pelaaja yrittää arvata mahdollisimman monta automerkkiä oikein satunnaisesti sekoitetuista kirjainjonoista. Jokaisesta oikeasta vastauksesta saa pisteitä, ja peli sisältää myös aikabonusjärjestelmän. Halutessaan pelaaja voi ottaa käyttöön vihjeet, jotka auttavat oikean vastauksen löytämisessä. Sovellus mittaa käytetyn ajan ja pisteyttää suorituksen sen perusteella. Tämä oli mun selainpohjainen peliprojekti, jossa kertasin DOM-manipulointia, ajastimia ja pelilogiikkaa JavaScriptillä.",
    ],
    "project3-pagelink": ["Show on browser", "Näytä selaimessa"],
    "project1-technologies": [
      "Built with HTML, CSS, JavaScript, JQuery, and Bootstrap",
      "Käytin projektissa HTML, CSS, JavaScript, JQuery ja Bootstrap.",
    ],
    "project2-technologies": [
      "Built with C# and Windows Forms",
      "Käytin projektissa C# ja Windows Forms.",
    ],
    "project3-technologies": [
      "Built with HTML, CSS, JavaScript",
      "Käytin projektissa HTML, CSS ja JavaScript.",
    ],
    "project2-text": ["C# Memory and word game", "C# Muisti- ja sanapeli"],
    "project3-text": ["Car themed word game", "Auto teemainen sanapeli"],
    "project2-link": ["View on GitHub", "Katso GitHubissa"],
    "show-more": [
      "View rest of the projects on GitHub, and more coming soon!",
      "Katso loput projektit GitHubissa, ja lisää tulossa pian!",
    ],
    "skills-language-text": ["Languages", "Kielet"],
    "skills-framework-text": ["Frameworks", "Kehykset"],
    "job1-position": [
      "Work-based learning as part of Vocational school",
      "Työssä järjestettävä koulutus (TJK) osana Ammattikoulua",
    ],
    "job1-description": [
      "During the work-based period, I have had the opportunity to develop tools for customers. The work has provided valuable experience in software development, teamwork, and project management.",
      "TJK-jakson aikana olen päässyt kehittämään työkaluja asiakkaille. Työskentely on antanut arvokasta kokemusta ohjelmistokehityksestä, tiimityöstä ja projektinhallinnasta.",
    ],
    "job1-link": ["Read more about the place", "Katso paikasta lisää"],
    "job2-title": ["Vocational School", "Ammattikoulu"],
    "job2-position": [
      "Software Developer's Basic Degree",
      "Ohjelmistokehittäjän perustutkinto",
    ],
    "job2-description": [
      "I am studying for a vocational qualification in ICT at OSAO Kaukovainio, focusing on software development and web technologies. My grade point average is about 4.65 (no grades have yet been given for vocational demonstrations).",
      "Opiskelen tieto- ja viestintätekniikan perustutkintoa OSAO Kaukovainiolla, keskittyen ohjelmistokehitykseen ja web-teknologioihin. Keskiarvoni on noin 4,65. (ei ole vielä annettu arvosanaa ammatillisista näytöistä)",
    ],
    "job2-link": ["Read more about the place", "Katso paikasta lisää"],
    "job3-title": ["Comprehensive School", "Peruskoulu"],
    "job3-position": ["Grades 1 - 9", "1 - 9 luokat"],
    "job3-description": [
      "I completed comprehensive school at Talvikangas School and also attended primary school at Korvensuora School. One of my elective subjects was ICT in grades 7–9, where I practiced coding basics and image editing.",
      "Suoritin peruskoulun Talvikankaan koulussa ja kävin ala-astetta myös Korvensuoran koulussa. Yksi valinnaisaineenani oli tieto- ja viestintätekniikka 7.–9. luokilla, jossa harjoittelin koodauksen perusteita sekä esimerkiksi kuvankäsittelyä.",
    ],
    "job3-link": ["Read more about the place", "Katso paikasta lisää"],
    "contact-sub-title": [
      "Any questions? Send a message.",
      "Jäikö kysyttävää? Lähetä viesti.",
    ],
    firstnamelabel: ["First name", "Etunimi"],
    lastname: ["Last name", "Sukunimi"],
    lastnamelabel: ["Last name", "Sukunimi"],
    firstname: ["First name", "Etunimi"],
    email: ["Email", "Sähköposti"],
    emaillabel: ["Email", "Sähköposti"],
    subject: ["Subject for message", "Viestin aihe"],
    subjectlabel: ["Subject", "Aihe"],
    message: ["Write your message here...", "Kirjoita viestisi tähän..."],
    messagelabel: ["Message", "Viesti"],
    submit: ["Send", "Lähetä"],
    "footer-link-home": ["Home", "Koti"],
    "footer-link-projects": ["Projects", "Projektit"],
    "footer-link-skills": ["Skills", "Taidot"],
    "footer-link-experience": ["Experience", "Kokemus"],
    "footer-link-contact": ["Contact", "Ota yhteyttä"],
  };

  Object.keys(textContentMap).forEach((id) => {
    let element = document.getElementById(id);
    if (element) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = textContentMap[id][isFinnish ? 0 : 1];
      } else {
        element.textContent = textContentMap[id][isFinnish ? 0 : 1];
      }
    }
  });
}
