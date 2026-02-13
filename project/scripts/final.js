// footer

const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = `©️${currentYear} 🌴 Michael Thomas 🌴 California`;

document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;


// hamburger menu

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


// form

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectContact = document.querySelector("input[name='contactType']:checked");
    let contactValue;

    if (selectContact !== null) {
        contactValue = selectContact.value
    }
    else {
        contactValue = "Not specified";
    }

    const formData = {
        name: form.fullName.value,
        phone: form.phone.value,
        address: form.address.value, 
        email:form.email.value,
        newsletter: form.newsletter.checked,
        contactType: contactValue
    };

    localStorage.setItem("contactSubmission", JSON.stringify(formData));

    form.innerHTML = 
        `<h2>Thank You, ${formData.name}</h2>
        <p>We received your ${formData.contactType.toLowerCase()}.  We are so happy that you reached out to us!</p>`;
});