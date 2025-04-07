document.addEventListener("click", function (event) {
  let nav = document.getElementById("navigation");
  let menuButton = document.getElementById("hamburger");

  // sulje navigaatio vain (<725px), jos klikataan ulkopuolella
  if (
    getComputedStyle(nav).display === "flex" &&
    !nav.contains(event.target) &&
    !menuButton.contains(event.target) &&
    window.innerWidth < 725
  ) {
    nav.style.display = "none";
    document.getElementById("hamburger-icon-x").style.display = "none";
    document.getElementById("hamburger-icon-bars").style.display = "block";
  }
});

window.addEventListener("resize", function () {
  let nav = document.getElementById("navigation");

  if (window.innerWidth > 725) {
    // näyttää isolla näytöillä pakosta navbarin
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
    document.getElementById("hamburger-icon-x").style.display = "none";
    document.getElementById("hamburger-icon-bars").style.display = "block";
  }
});
function showNav(x) {
  x.style.top = "20px";
}
function toggleNav() {
  let nav = document.getElementById("navigation");
  if (nav.style.display === "none" || nav.style.display === "") {
    nav.style.display = "flex";
  } else {
    nav.style.display = "";
  }
}
var prevScrollpos = window.pageYOffset;
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "20px";
  } else {
    document.getElementById("header").style.top = "-55px";
  }
  prevScrollpos = currentScrollPos;

  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let id = section.getAttribute("id");
    let height = section.offsetHeight;

    if (top >= offset && top < offset + height) {
      // activate navbar links
      navLinks.forEach((links) => {
        links.classList.remove("link-active");

        document
          .querySelector("nav a[href*=" + id + "]")
          .classList.add("link-active");
      });
    }
  });
};
