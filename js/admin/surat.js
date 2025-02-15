function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

// Add active class to the current menu item
const menuItems = document.querySelectorAll('.sidebar-menu li a');
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        menuItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});
function tampilkanTabel() {
    var jenisSurat = document.getElementById("jenis_surat").value;

    // Sembunyikan semua tabel
    document.getElementById("tabel_keterangan").classList.add("hidden");
    document.getElementById("tabel_permohonan").classList.add("hidden");
    document.getElementById("tabel_pernyataan").classList.add("hidden");

    // Tampilkan tabel sesuai pilihan
    if (jenisSurat === "keterangan") {
        document.getElementById("tabel_keterangan").classList.remove("hidden");
    } else if (jenisSurat === "permohonan") {
        document.getElementById("tabel_permohonan").classList.remove("hidden");
    } else if (jenisSurat === "pernyataan") {
        document.getElementById("tabel_pernyataan").classList.remove("hidden");
    }
}