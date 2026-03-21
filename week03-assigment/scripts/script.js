// Footer info
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Weather values
const temp = 8;
const wind = 10;

// Function
function calculateWindChill(t, w) {
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(w, 0.16) + 0.3965 * t * Math.pow(w, 0.16)).toFixed(1);
}

// Condition
let windChill = "N/A";

if (temp <= 10 && wind > 4.8) {
    windChill = calculateWindChill(temp, wind) + " °C";
}

// Output
document.getElementById("windchill").textContent = windChill;