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
    "project1-link": ["View on GitHub", "Katso GitHubissa"],
    "project1-description": [
      "This is a website for a fictional company. The site showcases the company's services and provides useful tools for customers, such as color testing and an inspiring gallery.",
      "Tämä on kuvitteellisen yrityksen verkkosivusto. Sivuston tarkoituksena on esitellä yrityksen palvelut ja tarjota asiakkaille hyödyllisiä työkaluja, kuten värien testaus ja inspiroiva galleria.",
    ],
    "project1-technologies": [
      "Built with HTML, CSS, JavaScript, JQuery, and Bootstrap",
      "Käytin projektissa HTML, CSS, JavaScript, JQuery ja Bootstrap.",
    ],
    "project2-link": ["View on GitHub", "Katso GitHubissa"],
    "show-more": [
      "View more projects on GitHub",
      "Katso lisää projekteja GitHubissa",
    ],
    caption: ["Click anywhere to close", "Paina mistä tahansa sulkeaksesi"],
    "skills-language-text": ["Languages", "Kielet"],
    "skills-framework-text": ["Frameworks", "Kehykset"],
    "job1-position": ["TJK Period", "TJK-jakso"],
    "job1-description": [
      "During the TJK period, I have had the opportunity to develop tools for customers. The work has provided valuable experience in software development, teamwork, and project management.",
      "TJK-jakson aikana olen päässyt kehittämään työkaluja asiakkaille. Työskentely on antanut arvokasta kokemusta ohjelmistokehityksestä, tiimityöstä ja projektinhallinnasta.",
    ],
    "job1-link": ["Learn more about the place", "Katso paikasta lisää"],
    "job2-title": ["Vocational School", "Ammattikoulu"],
    "job2-position": [
      "Software Developer's Basic Degree",
      "Ohjelmistokehittäjän perustutkinto",
    ],
    "job2-description": [
      "I am studying for a vocational qualification in ICT at OSAO Kaukovainio, focusing on software development and web technologies. My grade point average is about 4.5 (no grades have yet been given for vocational demonstrations).",
      "Opiskelen tieto- ja viestintätekniikan perustutkintoa OSAO Kaukovainiolla, keskittyen ohjelmistokehitykseen ja web-teknologioihin. Keskiarvoni on noin 4,5. (ei ole vielä annettu arvosanaa ammatillisista näytöistä)",
    ],
    "job2-link": ["Learn more about the place", "Katso paikasta lisää"],
    "job3-title": ["Comprehensive School", "Peruskoulu"],
    "job3-position": ["Grades 1 - 9", "1 - 9 luokat"],
    "job3-description": [
      "I completed comprehensive school at Talvikangas School and also attended primary school at Korvensuora School. One of my elective subjects was ICT in grades 7–9, where I practiced coding basics and image editing.",
      "Suoritin peruskoulun Talvikankaan koulussa ja kävin ala-astetta myös Korvensuoran koulussa. Yksi valinnaisaineenani oli tieto- ja viestintätekniikka 7.–9. luokilla, jossa harjoittelin koodauksen perusteita sekä esimerkiksi kuvankäsittelyä.",
    ],
    "job3-link": ["Learn more about the place", "Katso paikasta lisää"],
    firstnamelabel: ["First name", "Etunimi"],
    lastname: ["Last name", "Sukunimi"],
    lastnamelabel: ["Last name", "Sukunimi"],
    firstname: ["First name", "Etunimi"],
    email: ["Email", "Sähköposti"],
    emaillabel: ["Email", "Sähköposti"],
    subject: ["Subject for message", "Viestin aihe"],
    subjectlabel: ["Subject", "Aihe"],
    message: ["Write your message here...", "Kirjoita viesti tähän..."],
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
