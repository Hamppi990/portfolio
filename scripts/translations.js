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
      "Image banner resizer, where the user can adjust the size of a selected image to fit different music platforms. The user can choose the image download format and compress the image if desired. On platforms like Soundcloud and YouTube, an overlay image can also be enabled to help with finding the correct area. The app calculates the modified image size in real-time. It also warns if the image quality is poor or the download file is too large for the selected platform. This was my first Next.js project, where I learned the basics of Next.js, using Tailwind, the benefits of TypeScript types, handling images in-browser, dynamic DOM manipulation, and utilizing components and reactive state.",
      "Kuvabannerin koon muuttaja, jossa käyttäjä voi muokata valitsemansa kuvan kokoa sopimaan eri musiikkialustoille. Käyttäjä voi valita kuvan latausmuodon ja kompressoida kuvaa halutessaan. Soundcloud ja YouTube alustoilla voi myös ottaa käyttöön peittokuvan, joka auttaa oikean kohdan löytämisessä. Sovellus laskee muokatun kuvan koon realiajassa. Sovellus myös varoittaa, jos kuva on huonolaatuinen tai ladattavan kuvan koko on liian iso valitulle alustalle. Tämä oli mun ensimmäinen Next.js projekti, jossa opettelin Next.js:n perusteita, Tailwindin käyttöä, TypeScript-tyyppien hyötyjä, kuvan käsittelyä selaimessa, dynaamista DOM-manipulaatiota, komponenttien ja reaktiivisten tilojen hyödyntämistä.",
    ],
    "project4-description": [
      "A typing speed test web application that allows users to measure their typing speed and accuracy. The app displays random words or sentences, tracks the time taken, and calculates words per minute (WPM) and error rate. You can also change how the test behaves on the settings. This project helped me practice DOM manipulation, event handling, and real-time feedback implementation in TypeScript.",
      "Kirjoitusnopeustesti-verkkosovellus, jonka avulla käyttäjät voivat mitata kirjoitusnopeuttaan ja tarkkuuttaan. Sovellus näyttää satunnaisia sanoja tai lauseita, seuraa käytettyä aikaa ja laskee kirjoitusnopeuden (WPM) sekä virheprosentin. Voit myös muuttaa miten testi käyttäytyy asetuksissa. Projektissa harjoittelin DOM-manipulaatiota, tapahtumien käsittelyä ja reaaliaikaisen palautteen toteutusta TypeScriptillä.",
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
      "Built with Next.js, Tailwind CSS and TypeScript.",
      "Käytin projektissa Next.js, Tailwind CSS ja TypeScript.",
    ],
    "project4-technologies": [
      "Built with Next.js, Tailwind CSS and TypeScript.",
      "Käytin projektissa Next.js, Tailwind CSS ja TypeScript.",
    ],
    "project2-text": ["C# Memory and word game", "C# Muisti- ja sanapeli"],
    "project3-text": [
      "Image banner resizer for music platforms",
      "Kuvabanner koon muuttaja musiikkialustoille",
    ],
    "project4-text": ["Typing speed test", "Kirjoitusnopeustesti"],
    "project2-link": ["View on GitHub", "Katso GitHubissa"],
    "project4-pagelink": ["Show on browser", "Näytä selaimessa"],
    "show-more": [
      "View rest of the projects on GitHub, and more coming soon!",
      "Katso loput projektit GitHubissa, ja lisää tulossa pian!",
    ],
    "skills-software-text": ["Software", "Ohjelmat"],
    "skills-language-text": ["Languages", "Kielet"],
    "skills-framework-text": ["Frameworks", "Kehykset"],
    "job1-position": [
      "Work-based learning as part of Vocational school",
      "Työssä järjestettävä koulutus (TJK) osana Ammattikoulua",
    ],

    "job1-description": [
      "During my work-based learning at OSAO, I developed tools for customers. This experience provided valuable insights into software development, teamwork, and project management.",
      "TJK-jakson aikana pääsin kehittämään työkaluja asiakkaille. Työskentely antoi arvokasta kokemusta ohjelmistokehityksestä, tiimityöstä ja projektinhallinnasta.",
    ],
    "job1-link": ["Read more about the place", "Katso paikasta lisää"],
    "job2-title": ["Vocational School", "Ammattikoulu"],
    "job2-position": [
      "Software Developer's Basic Degree",
      "Ohjelmistokehittäjän perustutkinto",
    ],
    "job2-description": [
      "I completed the basic degree in software development at OSAO Kaukovainio, focusing on software development and web technologies. My weighted average is 4.92",
      "Suoritin tieto- ja viestintätekniikan perustutkinnon OSAO Kaukovainiolla, keskittyen ohjelmistokehitykseen ja web-teknologioihin. Painotettu keskiarvoni on 4,92",
    ],
    "job2-link": ["Read more about the place", "Katso paikasta lisää"],
    "job3-title": ["Comprehensive School", "Peruskoulu"],
    "job3-position": ["Grades 1 - 9", "1 - 9 luokat"],
    "job3-description": [
      "I completed comprehensive school at Talvikangas School and also attended primary school at Korvensuora School. One of my elective subjects was ICT in grades 7–9, where I practiced coding basics and image editing. My average grade in comprehensive school is 8.2.",
      "Suoritin peruskoulun Talvikankaan koulussa ja kävin ala-astetta myös Korvensuoran koulussa. Yksi valinnaisaineenani oli tieto- ja viestintätekniikka 7.–9. luokilla, jossa harjoittelin koodauksen perusteita sekä esimerkiksi kuvankäsittelyä. Keskiarvoni peruskoulusta on 8,2.",
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
    "submit-button": ["Send", "Lähetä"],
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
