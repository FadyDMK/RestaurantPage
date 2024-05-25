import Place from "./img/fennec5.jpeg";

function home() {
  const title = document.createElement("h3");
  const image = document.createElement("img");
  title.textContent = "Fennec";
  image.src = Place;
  image.alt = "fennec";
  content.appendChild(title);
  content.appendChild(image);
}

export default home;
