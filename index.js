const btn_menu = document.getElementById("icon-menu");
const menu = document.getElementById("mobile-menu");
const header = document.getElementById("header-sticky");
const slide = document.querySelectorAll(".service-content");
let i = 0;

function toggleMenu() {
  menu.classList.toggle("toggle-menu");
}

function stickyHeader() {
  window.pageYOffset > 100
    ? header.classList.add("sticky-menu")
    : header.classList.remove("sticky-menu");
}

setInterval(function () {
  ++i;
  if (i > 2) {
    slide[i - 1].classList.remove("active");
    slide[0].classList.add("active");
    i = 0;
  } else {
    slide[i - 1].classList.remove("active");
    slide[i].classList.add("active");
  }
}, 3000);

slide[0].classList.add("active");
btn_menu.addEventListener("click", toggleMenu);
window.addEventListener("scroll", stickyHeader);
