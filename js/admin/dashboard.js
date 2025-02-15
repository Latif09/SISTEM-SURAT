// Data untuk diagram statistik pengunjung
    const visitorCtx = document.getElementById('visitorChart').getContext('2d');
    const visitorChart = new Chart(visitorCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
            datasets: [{
                label: 'Pengunjung',
                data: [120, 190, 300, 250, 200, 150],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Data untuk diagram surat masuk
    const letterCtx = document.getElementById('letterChart').getContext('2d');
    const letterChart = new Chart(letterCtx, {
        type: 'pie',
        data: {
            labels: ['Surat Keterangan', 'Surat Permohonan', 'Surat Pernyataan'],
            datasets: [{
                label: 'Jumlah Surat',
                data: [10, 5, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        }
    });

    