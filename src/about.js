import { determineUnderline } from ".";

function loadAbout() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  determineUnderline();
  const aboutBtn = document.querySelector(".aboutBtn");
  aboutBtn.classList.toggle("is-active");
}

export default loadAbout;
