const loggedInUser = localStorage.getItem("loggedInUser");
const userGreeting = document.querySelector("#user-greeting");
if (loggedInUser) {
    userGreeting.textContent = loggedInUser;
}

// Menampilkan greeting selamat pagi / siang / sore / malam berdasarkan waktu
const timeGreeting = document.querySelector("#time-greeting");
const currentTime = new Date();
const currentHour = currentTime.getHours();

if (currentHour >= 5 && currentHour <= 11) {
    timeGreeting.textContent = "Pagi";
} else if (currentHour >= 12 && currentHour <= 17) {
    timeGreeting.textContent = "Siang";
} else if (currentHour >= 18 && currentHour <= 19) {
    timeGreeting.textContent = "Sore";
} else {
    timeGreeting.textContent = "Malam";
}