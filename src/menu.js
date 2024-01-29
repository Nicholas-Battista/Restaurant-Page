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
  menu.appendChild(
    createMenuItem(
      "Dragon Roll",
      "A delectable fusion of shrimp tempura, avocado, and cucumber, topped with spicy mayo and eel sauce for a savory kick."
    )
  );
  menu.appendChild(
    createMenuItem(
      "Rainbow Roll",
      "A colorful assortment of fresh sashimi slices, including tuna, salmon, and avocado, rolled with crab and cucumber for a burst of flavors."
    )
  );
  menu.appendChild(
    createMenuItem(
      "Spicy Tuna Roll",
      "A zesty combination of spicy tuna, cucumber, and green onions, finished with a drizzle of spicy mayo for a bold and fiery taste."
    )
  );
  menu.appendChild(
    createMenuItem(
      "California Roll",
      "A classic roll featuring imitation crab, avocado, and cucumber, wrapped in seaweed and rice, perfect for those seeking a milder sushi experience."
    )
  );
  menu.appendChild(
    createMenuItem(
      "Crispy Tempura Roll",
      "A delightful mix of tempura shrimp, avocado, and cucumber, complemented by a crunchy tempura coating and a touch of eel sauce."
    )
  );
  menu.appendChild(
    createMenuItem(
      "Mango Tango Roll",
      "A tropical delight with shrimp tempura, mango slices, and cucumber, harmonized with a sweet mango sauce for a refreshing twist."
    )
  );
}

export default loadMenu;
