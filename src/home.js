import { determineUnderline } from ".";

function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  determineUnderline();
  const homeBtn = document.querySelector(".homeBtn");
  homeBtn.classList.toggle("is-active");

  const home = document.createElement("div");
  home.classList.add("home");

  const img = document.createElement("img");
  img.src = "images/cartoon.png";
  img.alt = "sushi chef cartoon";

  home.appendChild(createP("Welcome to Blessed Sushi!"));
  home.appendChild(createP("The most fresh & most chill in town!"));
  home.appendChild(img);
  home.appendChild(createP("Visit us, or Order Online!"));

  content.appendChild(home);
}

function createP(info) {
  const pElement = document.createElement("p");
  pElement.textContent = info;
  return pElement;
}

export default loadHome;
export { createP };
