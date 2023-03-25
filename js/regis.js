// Mendapatkan elemen form
const registerForm = document.querySelector("form");
// Mendapatkan elemen input dari form
const fullName = document.querySelector('input[name="fullname"]');
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');
const repeatPassword = document.querySelector('input[name="repeat_password"]');

// Mendefinisikan fungsi untuk menyimpan data ke Local Storage
function saveUser(fullName, email, password) {
  // Mendapatkan data user dari Local Storage
  const users = JSON.parse(localStorage.getItem("users")) || [];
  // Menambahkan user baru ke dalam array users
  users.push({ fullName, email, password });
  // Menyimpan data users kembali ke Local Storage
  localStorage.setItem("users", JSON.stringify(users));
}

// Menangani event submit form
registerForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah form submit secara default

  // Validasi input form
  if (fullName.value === "" || email.value === "" || password.value === "" || repeatPassword.value === "") {
    alert("Mohon isi semua field terlebih dahulu!");
    return;
  }

  if (password.value !== repeatPassword.value) {
    alert("Password dan Repeat Password tidak cocok!");
    return;
  }

  // Menyimpan data user ke Local Storage
  saveUser(fullName.value, email.value, password.value);

  // Memberikan notifikasi ke user bahwa registrasi berhasil
  alert("Registrasi berhasil!");
  window.location.href = "login.html";

  // Me-reset form
  registerForm.reset();
});
