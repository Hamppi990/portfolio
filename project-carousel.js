let slideIndex = [1, 1];
let slideId = ["mySlide1", "mySlide2"];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
  updateModalImage(no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
  preloadImage(x, slideIndex[no] + 1);
  preloadImage(x, slideIndex[no] - 1);
}

function preloadImage(slides, index) {
  if (index >= 1 && index <= slides.length) {
    let img = slides[index - 1].querySelector("img");
    if (img && !img.src.includes("data:image")) {
      let temp = new Image();
      temp.src = img.dataset.src || img.src;
    }
  }
}
function modal(no) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modal-image");
  var closeBtn = document.getElementById("close-modal");

  // Hakee aktiivisen kuvan sen perusteella, mikä indeksi on aktiivinen
  let slides = document.getElementsByClassName(slideId[no]);
  let activeSlide = slides[slideIndex[no] - 1];
  let img = activeSlide.querySelector("img");

  if (img) {
    modal.style.display = "block";
    modalImg.src = img.src;

    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
    modalImg.onclick = function () {
      modal.style.display = "none";
    };
  }
}
function updateModalImage(no) {
  let slides = document.getElementsByClassName(slideId[no]);
  let activeSlide = slides[slideIndex[no] - 1];
  let img = activeSlide.querySelector("img");
  if (img) {
    document.getElementById("modal-image").src = img.src;
  }
}
