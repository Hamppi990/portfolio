const backToTopButton = document.getElementById("back-to-top");
const scrollDown = document.getElementById("hero-scroll-down");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 650) {
    backToTopButton.style.opacity = "1";
    scrollDown.style.opacity = "0";
    backToTopButton.style.pointerEvents = "auto";
    scrollDown.style.pointerEvents = "none";
    backToTopButton.style.cursor = "pointer";
  } else {
    backToTopButton.style.opacity = "0";
    scrollDown.style.opacity = "1";
    backToTopButton.style.pointerEvents = "none";
    scrollDown.style.pointerEvents = "auto";
    backToTopButton.style.cursor = "none";
  }
});

const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

elements.forEach((el) => observer.observe(el));
