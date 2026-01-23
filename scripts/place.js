// normal footer stuff
const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = `©️${currentYear} 🌴 Michael Thomas 🌴 California`;

document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;


// windChill calculation
function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

const temperature = 29;
const windSpeed = 5;
const windChill = calculateWindChill(temperature, windSpeed);

if (temperature <= 10 && windSpeed > 4.8) {
    
    document.getElementById("windChill").textContent = `${windChill.toFixed(1)} °C`;
}

else {
    document.getElementById("windChill").textContent = "N/A";
}