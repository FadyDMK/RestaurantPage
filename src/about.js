const cnt = document.getElementById("content");

function about() {
    cnt.classList.remove("menu");
    cnt.classList.add("about");
  
    const aboutText = document.createElement("div");
  
    const title = document.createElement("div");
    title.textContent = "Welcome To Fennec";
    
  
    const desc = document.createElement("div");
    
    desc.textContent =
      "At Fennec, we bring the vibrant flavors and rich culinary traditions of Tunisia to your table. Located in the heart of the city, our restaurant offers an authentic taste of North Africa, where every dish tells a story of heritage, culture, and passion.";
  
  
    const contact = document.createElement("div");
    contact.appendChild(document.createElement("br"));
    contact.appendChild(document.createTextNode("Contact Us!"));
    contact.appendChild(document.createElement("br"));
    contact.appendChild(
      document.createTextNode("Address: 123 Tunisian Street, Cityname, Country")
    );
    contact.appendChild(document.createElement("br"));
    contact.appendChild(document.createTextNode("Phone: +123-456-7890"));
    contact.appendChild(document.createElement("br"));
    contact.appendChild(document.createTextNode("Email: info@fennec-restaurant.com"));
    aboutText.appendChild(title);
    aboutText.appendChild(desc);
    aboutText.appendChild(contact);
    content.appendChild(aboutText);
  }

  export default about;