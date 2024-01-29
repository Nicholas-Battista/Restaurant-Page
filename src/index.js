import loadHome from "./home";
import loadMenu from "./menu";

loadHome();

const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const aboutBtn = document.querySelector(".aboutBtn");

homeBtn.addEventListener("click", loadHome);
menuBtn.addEventListener("click", loadMenu);
