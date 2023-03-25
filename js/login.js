// Mendapatkan elemen form
const loginForm = document.querySelector("form");
// Mendapatkan elemen input dari form
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');

// Mendefinisikan fungsi untuk melakukan login
function loginUser(email, password) {
  // Mendapatkan data user dari Local Storage
  const users = JSON.parse(localStorage.getItem("users")) || [];
  // Mencari user dengan email yang sesuai
  const user = users.find((user) => user.email === email);
  // Memeriksa apakah password yang dimasukkan sesuai dengan password user
  if (user && user.password === password) {
    // Menyimpan nama user ke Local Storage untuk digunakan di halaman utama
    localStorage.setItem("loggedInUser", user.fullName);
    // Redirect ke halaman utama
    alert(`Selamat Datang ${user.fullName}`);
    window.location.href = "home.html";
  } else {
    // Memberikan notifikasi ke user bahwa login gagal
    alert("Email atau Password salah!");
  }
}

// Menangani event submit form
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah form submit secara default

  // Validasi input form
  if (email.value === "" || password.value === "") {
    alert("Mohon isi semua field terlebih dahulu!");
    return;
  }

  // Melakukan login
  loginUser(email.value, password.value);
});
