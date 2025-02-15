document.getElementById('newsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    // Ambil nilai dari form
    const judul = document.getElementById('judul').value;
    const foto = document.getElementById('foto').files[0];
    const isi = document.getElementById('isi').value;

    // Buat baris baru untuk tabel
    const newRow = document.createElement('tr');

    // Tambahkan sel untuk judul
    const judulCell = document.createElement('td');
    judulCell.textContent = judul;
    newRow.appendChild(judulCell);

    // Tambahkan sel untuk foto
    const fotoCell = document.createElement('td');
    if (foto) {
        const fotoImg = document.createElement('img');
        fotoImg.src = URL.createObjectURL(foto);
        fotoImg.alt = "Foto Sampul";
        fotoImg.style.width = "100px";
        fotoCell.appendChild(fotoImg);
    } else {
        fotoCell.textContent = "Tidak ada foto";
    }
    newRow.appendChild(fotoCell);

    // Tambahkan sel untuk isi
    const isiCell = document.createElement('td');
    isiCell.textContent = isi;
    newRow.appendChild(isiCell);

    // Tambahkan baris ke tabel
    document.getElementById('newsTable').getElementsByTagName('tbody')[0].appendChild(newRow);

    // Reset form
    document.getElementById('newsForm').reset();
});