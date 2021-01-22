const btn_menu = document.getElementById("icon-menu");
const menu = document.getElementById("mobile-menu");
const header = document.getElementById("header-sticky");
const slides = document.querySelectorAll(".service-content");
const button = document.querySelectorAll(".service-content a")
let i = 0;

function toggleMenu() {
  menu.classList.toggle("toggle-menu");
}

function stickyHeader() {
  window.pageYOffset > 100
    ? header.classList.add("sticky-menu")
    : header.classList.remove("sticky-menu");
}

function hoverSlide(index) {
  console.log(index)
  slides[i].classList.remove("active");
  i = index;
  slides[index].classList.add("active");
}

setInterval(function () {
  ++i;
  if (i > 2) {
    slides[i - 1].classList.remove("active");
    slides[0].classList.add("active");
    i = 0;
  } else {
    slides[i - 1].classList.remove("active");
    slides[i].classList.add("active");
  }
}, 3000);

slides[0].classList.add("active");
btn_menu.addEventListener("click", toggleMenu);
window.addEventListener("scroll", stickyHeader);
button.forEach((btn, index) => btn.addEventListener('mousedown', () => console.log(index)))
