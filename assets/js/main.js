function kirimKeWhatsApp() {
    let namaPelanggan = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let alamat = document.getElementById("alamat").value;
    let namaRekening = document.getElementById("name").value;
    let transfer_ke = document.getElementById("transfer_ke").value;
    let date = document.getElementById("date").value;
    let jumlah = document.getElementById("jumlah").value;

    // Nomor WhatsApp tujuan (tanpa tanda +)
    let nomorWA = "6287844132077"; 

    // Format pesam WhatsApp
    let url = `https://wa.me/${nomorWA}?text=` + 
              `Halo, saya atas Nama: ${namaPelanggan}%0A` + 
              `Email: ${email}%0A` + 
              `Alamat: ${alamat}%0A` + 
              `Rekening atas Nama: ${namaRekening}%0A` + 
              `transfer_ke: ${transfer_ke}%0A` + 
              `tanggal: ${date}%0A` + 
              `jumlah harga: ${jumlah}%0A` +
              `dan akan memberikan bukti transfer melalui WhatsApp`;

    // Redirect ke WhatsApp
    window.open(url, "_blank");
}