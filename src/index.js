import "./style.css";

import about from "./about";
import home from "./home";
import menu from "./menu";

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

homeBtn.classList.add("active");

homeBtn.addEventListener("click", () => {
  homeBtn.classList.add("active");
  menuBtn.classList.remove("active");
  aboutBtn.classList.remove("active");

  clearPage();
  home();
});

menuBtn.addEventListener("click", () => {
  homeBtn.classList.remove("active");
  menuBtn.classList.add("active");
  aboutBtn.classList.remove("active");
  clearPage();
  menu();
});

aboutBtn.addEventListener("click", () => {
  homeBtn.classList.remove("active");
  menuBtn.classList.remove("active");
  aboutBtn.classList.add("active");
  clearPage();
  about();
});

function clearPage() {
  const cnt = document.getElementById("content");
  while (cnt.firstChild) {
    cnt.removeChild(cnt.firstChild);
  }
}

document.body.appendChild(home());
