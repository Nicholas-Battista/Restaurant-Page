function loadHome() {
  const content = document.getElementById("content");

  const home = document.createElement("div");
  home.classList.add("home");

  const img = document.createElement("img");
  img.src = "images/pexels-ivan-samkov-8951149.jpg";
  img.alt = "sushi chef";

  home.appendChild(createP("Welcome to Blessed Suhsi!"));
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
