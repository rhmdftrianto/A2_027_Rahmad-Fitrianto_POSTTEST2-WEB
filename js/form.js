const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // ambil nilai dari form
  const nama = document.querySelector('#nama').value;
  const alamat = document.querySelector('#alamat').value;
  const telepon = document.querySelector('#telepon').value;
  const email = document.querySelector('#email').value;
  const jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked').value;
  const asal = document.querySelector('#asal').value;
  const tujuan = document.querySelector('#tujuan').value;
  const berat = document.querySelector('#berat').value;
  const jenisLayanan = document.querySelector('#jenis-layanan').value;
  const catatan = document.querySelector('#catatan').value;
  const layananTambahan = document.querySelectorAll('input[name="layanan-tambahan[]"]:checked');
  const file = document.querySelector('#file').value;

  // simpan nilai ke dalam session storage
  let orders = JSON.parse(sessionStorage.getItem('orders')) || [];
  orders.push({
    nama,
    alamat,
    telepon,
    email,
    jenisKelamin,
    asal,
    tujuan,
    berat,
    jenisLayanan,
    catatan,
    layananTambahan: Array.from(layananTambahan, e => e.value),
    file
  });
  sessionStorage.setItem('orders', JSON.stringify(orders));

  // tampilkan pemberitahuan bahwa data berhasil disimpan
  alert('Data berhasil disimpan');

  // reset form
    form.reset();

});
