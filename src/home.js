function loadHome() {
  const content = document.getElementById("content");

  const home = document.createElement("div");
  home.classList.add("home");

  home.appendChild(createP("Welcome to Blessed Suhsi!"));

  content.appendChild(home);
}

function createP(info) {
  const pElement = document.createElement("p");
  pElement.textContent = info;
  return pElement;
}

export default loadHome;
