function tampilkanForm() {
    let jenisSurat = document.getElementById("jenis_surat").value;
    
    // Sembunyikan semua form tambahan
    document.getElementById("form_keterangan").classList.add("hidden");
    document.getElementById("form_permohonan").classList.add("hidden");
    document.getElementById("form_pernyataan").classList.add("hidden");
    
    // Tampilkan form sesuai pilihan
    if (jenisSurat === "keterangan") {
        document.getElementById("form_keterangan").classList.remove("hidden");
    } else if (jenisSurat === "permohonan") {
        document.getElementById("form_permohonan").classList.remove("hidden");
    } else if (jenisSurat === "pernyataan") {
        document.getElementById("form_pernyataan").classList.remove("hidden");
    }
}

function resetForm() {
    document.getElementById("biodata-form").reset();
    tampilkanForm(); // Sembunyikan kembali form tambahan
}

document.getElementById("biodata-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form dari reload halaman
    document.getElementById("popup").classList.remove("hidden"); // Menampilkan popup
});

// Fungsi untuk menutup popup
function closePopup() {
    document.getElementById("popup").classList.add("hidden");
}

// Fungsi untuk mencetak data
function printData() {
    // Ambil nilai dari form
    const nama = document.getElementById("nama").value;
    const nik = document.getElementById("nik").value;
    const tgl_lahir = document.getElementById("tgl_lahir").value;
    const jenis_kelamin = document.getElementById("jenis_kelamin").value;
    const alamat = document.getElementById("alamat").value;
    const telepon = document.getElementById("telepon").value;
    const jenis_surat = document.getElementById("jenis_surat").value;
    const keterangan = document.getElementById("keterangan").value;
    const tujuan = document.getElementById("tujuan").value;
    const alasan_permohonan = document.getElementById("alasan_permohonan").value;
    const pernyataan = document.getElementById("pernyataan").value;
    const saksi = document.getElementById("saksi").value;

    // Buat konten yang akan dicetak
    const printContent = `
        <h2>Data yang Sudah Diisi</h2>
        <p><strong>Nama Lengkap:</strong> ${nama}</p>
        <p><strong>NIK:</strong> ${nik}</p>
        <p><strong>Tanggal Lahir:</strong> ${tgl_lahir}</p>
        <p><strong>Jenis Kelamin:</strong> ${jenis_kelamin}</p>
        <p><strong>Alamat:</strong> ${alamat}</p>
        <p><strong>Nomor Telepon:</strong> ${telepon}</p>
        <p><strong>Jenis Surat:</strong> ${jenis_surat}</p>
        ${jenis_surat === "keterangan" ? `<p><strong>Keterangan:</strong> ${keterangan}</p>` : ""}
        ${jenis_surat === "permohonan" ? `<p><strong>Tujuan Permohonan:</strong> ${tujuan}</p><p><strong>Alasan Permohonan:</strong> ${alasan_permohonan}</p>` : ""}
        ${jenis_surat === "pernyataan" ? `<p><strong>Isi Pernyataan:</strong> ${pernyataan}</p><p><strong>Nama Saksi:</strong> ${saksi}</p>` : ""}
    `;

    // Buka jendela baru untuk mencetak
    const printWindow = window.open("", "", "height=600,width=800");
    printWindow.document.write("<html><head><title>Print Data</title></head><body>");
    printWindow.document.write(printContent);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print(); // Cetak konten
}