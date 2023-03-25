// ambil nilai dari session storage
const orders = JSON.parse(sessionStorage.getItem('orders'));

// buat tampilan data
let html = '';
orders.forEach(order => {
  html += `
    <div>
      <h3>${order.nama}</h3>
      <p>Alamat: ${order.alamat}</p>
      <p>Telepon: ${order.telepon}</p>
      <p>Email: ${order.email}</p>
      <p>Jenis Kelamin: ${order.jenisKelamin}</p>
      <p>Asal: ${order.asal}</p>
      <p>Tujuan: ${order.tujuan}</p>
      <p>Berat: ${order.berat} kg</p>
      <p>Jenis Layanan: ${order.jenisLayanan}</p>
      <p>Catatan: ${order.catatan}</p>
      <p>Layanan Tambahan: ${order.layananTambahan.join(', ')}</p>
      <p>File: ${order.file}</p>
    </div>
  `;
});

// tampilkan data pada halaman
document.querySelector('#data').innerHTML = html;

// kembali ke halaman order
function kembali() {
    window.location.href = 'order.html';
}

