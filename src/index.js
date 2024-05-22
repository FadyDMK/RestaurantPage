import "./style.css";
import Image from "./fennec5.jpeg";

function home() {
  const content = document.getElementById("content");
  const title = document.createElement("h3");
  const image = document.createElement("img");
  title.textContent = "Fennec";
  image.src = Image;
  image.alt = "fennec";

  content.appendChild(title);
  content.appendChild(image);
}

function main() {
  const wrapper = document.createElement('div');
  wrapper.className = "wrapper";

  const header = document.createElement('header');

  const buttons = ['Home','Menu','About']


  wrapper.appendChild(header)
}

document.body.appendChild(home());
