import Swiper, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./scss/style.scss";

const burgerBtn = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burgerBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const slider = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  modules: [Navigation],
});
