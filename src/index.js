import loadHome from "./home";
import loadMenu from "./menu";

const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const aboutBtn = document.querySelector(".aboutBtn");

loadHome();

homeBtn.addEventListener("click", loadHome);
menuBtn.addEventListener("click", loadMenu);

function determineUnderline() {
  if (homeBtn.classList.contains("is-active")) {
    homeBtn.classList.toggle("is-active");
  }
  if (menuBtn.classList.contains("is-active")) {
    menuBtn.classList.toggle("is-active");
  }
  if (aboutBtn.classList.contains("is-active")) {
    aboutBtn.classList.toggle("is-active");
  }
}

export { determineUnderline };
