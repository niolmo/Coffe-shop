// Мобильное меню

const menu = document.querySelector(".bx-menu");
const burger = document.querySelector(".header__burger");
const close = document.querySelector(".header__burger_close");

menu.addEventListener("click", () => {
  burger.classList.toggle("header__burger_active");
});

close.addEventListener("click", () => {
  if (burger.classList.contains("header__burger_active")) {
    burger.classList.remove("header__burger_active");
  }
});
