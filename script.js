// GANTI STRING DI BAWAH DENGAN URL APLIKASI WEB DARI GOOGLE SCRIPT KAMU
const scriptURL = 'URL_WEB_APP_GOOGLE_SCRIPT_KAMU_PASTE_DISINI';
const form = document.getElementById('form-ips');
const btnSubmit = document.getElementById('btn-submit');

form.addEventListener('submit', e => {
  e.preventDefault(); // Mencegah halaman reload
  
  // Mengubah teks tombol saat loading
  btnSubmit.innerHTML = "Mengirim...";
  
  // Mengirim data form ke Google Apps Script
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      alert('Data berhasil dikirim ke Spreadsheet!');
      form.reset(); // Mengosongkan form setelah berhasil
      btnSubmit.innerHTML = "Kirim Data"; // Mengembalikan teks tombol
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert('Terjadi kesalahan, pastikan URL Script sudah benar.');
      btnSubmit.innerHTML = "Kirim Data";
    });
});
