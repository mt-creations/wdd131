const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = `©️${currentYear} 🌴 Michael Thomas 🌴 California`;

document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});