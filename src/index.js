import "./scss/style.scss";

const burgerBtn = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burgerBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});