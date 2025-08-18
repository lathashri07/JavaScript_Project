function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format Ex: 13 % 12 = 1 → 1 PM
    hours= hours.toString().padStart(2, 0); // add two digits
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const clockElement = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById("clock").textContent = clockElement;
}
updateClock();
setInterval(updateClock, 1000); // Update every second