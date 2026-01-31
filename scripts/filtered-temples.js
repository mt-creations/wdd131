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

//new week04 additions

const temples = [
	{
	  	templeName: "Aba Nigeria",
	  	location: "Aba, Nigeria",
	  	dedicated: "2005, August, 7",
	  	area: 11500,
	  	imageUrl:
	  	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	// Add more temple objects here...
	{
		templeName: "Buenos Aires Argentina",
		location: "Buenos Aires Argentina",
		dedicated: "1985, December, 17",
		area: 30659,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg"
	},
	{
		templeName: "Idaho Falls, Idaho, United States",
		location: "Idaho Falls, Idaho, United States",
		dedicated: "1940, October, 19",
		area: 85624,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/idaho-falls-idaho-temple/idaho-falls-idaho-temple-55801-main.jpg"
	},
	{
		templeName: "Newport Beach, California, United States",
		location: "Newport Beach, California, United States",
		dedicated: "2005, August, 23",
		area: 17800,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/newport-beach-california-temple/newport-beach-california-temple-46818-main.jpg"
	}
];

createTempleCard(temples);

function createTempleCard(filteredTemples) {
	const gallery = document.querySelector(".gallery");
	gallery.innerHTML = "";

	filteredTemples.forEach((temple) => {
		let card = document.createElement("section");
		let name = document.createElement("h2");
		let location = document.createElement("p");
		let dedicated = document.createElement("p");
		let area = document.createElement("p");
		let image = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML = `<span class= "label">Location:</span> ${temple.location}`;
		dedicated.innerHTML = `<span class= "label">Dedicated:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class= "label">Size:</span> ${temple.area} sq ft`;

		image.setAttribute("src", temple.imageUrl);
		image.setAttribute("alt", `${temple.templeName} Temple`);
		image.setAttribute("loading", "lazy");
		image.setAttribute("width", 400)
		image.setAttribute("height", 250)

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedicated);
		card.appendChild(area);
		card.appendChild(image);

		gallery.appendChild(card);
	});

document.querySelector("#home").addEventListener("click", () => {
	createTempleCard(temples);
});

document.querySelector("#old").addEventListener("click", () => {
	const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);

	createTempleCard(oldTemples);
});

document.querySelector("#new").addEventListener("click", () => {
	const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);

	createTempleCard(newTemples);
});

document.querySelector("#large").addEventListener("click", () => {
	const largeTemples = temples.filter(temple => temple.area > 90000);

	createTempleCard(largeTemples);
});

document.querySelector("#small").addEventListener("click", () => {
	const smallTemples = temples.filter(temple => temple.area < 10000);

	createTempleCard(smallTemples);
});

}

