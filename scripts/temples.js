//footer stuff
const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = `©️${currentYear} 🌴 Michael Thomas 🌴 California`;

document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;


//hamburger menu stuff
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});
