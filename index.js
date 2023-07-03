
const navMenu = document.getElementById("navMenu");
const hamburgerMenu = document.getElementById("hamburgerMenu");
const menuClose = document.getElementById("menuClose");
const body = document.getElementById("body");

hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  body.classList.toggle("active");
});

menuClose.addEventListener("click", () => {
  body.classList.toggle("active");
  navMenu.classList.toggle("active");
});
