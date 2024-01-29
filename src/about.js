import { determineUnderline } from ".";
import { createP } from "./home";

function loadAbout() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  determineUnderline();
  const aboutBtn = document.querySelector(".aboutBtn");
  aboutBtn.classList.toggle("is-active");

  const about = document.createElement("div");
  about.classList.add("about");

  about.appendChild(createP("☎️: 123 - 456 - 7890"));
  about.appendChild(createP("🏘️: 2323 Blessed Ave, Flagstaff AZ"));

  content.appendChild(about);
}

export default loadAbout;
