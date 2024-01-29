function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const menu = document.createElement("div");
  menu.classList.add("menu");

  createMenuList(menu);

  content.appendChild(menu);
}

function createMenuItem(name, info) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const itemName = document.createElement("h3");
  itemName.textContent = name;
  itemName.classList.add("itemName");

  const itemInfo = document.createElement("p");
  itemInfo.textContent = info;
  itemInfo.classList.add("itemInfo");

  menuItem.appendChild(itemName);
  menuItem.appendChild(itemInfo);
  return menuItem;
}

function createMenuList(menu) {
  menu.appendChild(createMenuItem("Dragon Roll", "blah blah"));
  menu.appendChild(createMenuItem("Rainbow Roll", "blha blah"));
  menu.appendChild(createMenuItem("Spicy Tuna Roll", "blha blah"));
  menu.appendChild(createMenuItem("Dragon Roll", "blah blah"));
  menu.appendChild(createMenuItem("Rainbow Roll", "blha blah"));
  menu.appendChild(createMenuItem("Spicy Tuna Roll", "blha blah"));
}

export default loadMenu;
