import Couscous from "./img/couscous-tunisien.png";
import Chorba from "./img/chorba.jpeg";
import Mhamsa from "./img/mhamsa.jpeg";
const cnt = document.getElementById("content");

function menu() {
  const dishes = {
    0: ["Couscous", "12 DT", Couscous],
    1: ["Chorba", "7 DT", Chorba],
    2: ["mhamsa", "10 DT", Mhamsa],
    3: ["Chorba", "7 DT", Chorba],
    4: ["Chorba", "7 DT", Chorba],
    5: ["Chorba", "7 DT", Chorba],
  };

  Object.values(dishes).forEach((dish) => {
    cnt.classList.add("menu");
    cnt.classList.remove("about");
    const [name, price, src] = dish;
    const dishName = document.createElement("div");
    dishName.textContent = name;
    dishName.classList.add("name");

    const dishPrice = document.createElement("div");
    dishPrice.textContent = price;
    dishPrice.classList.add("price");

    const dishPic = document.createElement("img");
    dishPic.alt = name;
    dishPic.classList.add("dishPic");
    dishPic.src = src;

    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    menuItem.appendChild(dishName);
    menuItem.appendChild(dishPic);
    menuItem.appendChild(dishPrice);
    content.appendChild(menuItem);
  });
}

export default menu;
