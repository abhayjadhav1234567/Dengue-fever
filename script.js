// Countdown to next event
const eventDate = new Date("2023-10-20");
const today = new Date();
const daysLeft = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
document.getElementById("countdown").innerText = `${daysLeft} days left!`;
