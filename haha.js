document.getElementById('recommend-button').addEventListener('click', getRecommendation);

function getRecommendation() {
    const vehicleType = document.getElementById('vehicle-type').value;
    const recommendationDiv = document.getElementById('recommendation');

    const recommendations = {
        car: [
            { name: 'Toyota Camry', description: 'Nyaman dan efisien.', image: '1.JPEG', pros: ['Kenyamanan tinggi', 'Efisiensi bahan bakar'], cons: ['Harga tinggi', 'Perawatan mahal'], price: 'Rp 500.000.000', reviews: ['Bagus sekali', 'Performa oke'] },
            { name: 'Honda Civic', description: 'Teknologi canggih dan hemat bahan bakar.', image: '2.JPEG', pros: ['Teknologi terbaru', 'Hemat bahan bakar'], cons: ['Ruang kabin kecil', 'Tidak ada opsi mesin V6'], price: 'Rp 350.000.000', reviews: ['Terbaik di kelasnya', 'Desain menarik'] },
            { name: "Ford Mustang", description: "Desain sporty dan performa tinggi.", image: "3.JPEG", pros: ["Desain sporty", "Performa tinggi"], cons: ["Konsumsi bahan bakar tinggi", "Kenyamanan kursi terbatas"], price: "Rp 600.000.000", reviews: ["Kinerja mesin mengesankan", "Gaya desain ikonik"] },
            { name: "BMW 3 Series", description: "Kinerja tinggi dan kenyamanan premium.", image: "4.JPEG", pros: ["Kinerja mesin yang responsif", "Kenyamanan berkendara"], cons: ["Harga tinggi", "Biaya perawatan mahal"], price: "Rp 800.000.000", reviews: ["Sangat nyaman untuk perjalanan panjang", "Handling yang sangat baik"] },
            { name: "Audi A4", description: "Desain elegan dan fitur canggih.", image: "5.JPEG", pros: ["Desain elegan", "Fitur teknologi canggih"], cons: ["Harga relatif tinggi", "Ruang kabin sedikit sempit"], price: "Rp 750.000.000", reviews: ["Interior premium", "Teknologi infotainment yang sangat baik"] },
            { name: "Mercedes-Benz C-Class", description: "Kemewahan dan teknologi terbaru.", image: "6.JPEG", pros: ["Kemewahan interior", "Teknologi terbaru"], cons: ["Harga premium", "Biaya perawatan tinggi"], price: "Rp 900.000.000", reviews: ["Pengalaman berkendara yang sangat mewah", "Fitur keselamatan yang lengkap"] },
            { name: "Volkswagen Golf", description: "Praktis dan menyenangkan untuk dikendarai.", image: "7.JPEG", pros: ["Praktis untuk penggunaan sehari-hari", "Pengendalian yang menyenangkan"], cons: ["Ruang bagasi terbatas", "Fitur standar yang kurang lengkap"], price: "Rp 400.000.000", reviews: ["Kendaraan yang sangat serbaguna", "Kualitas berkendara yang baik"] }
              
            // Tambahkan data lain sesuai kebutuhan
        ],
        motorcycle: [
            { name: 'Yamaha MT-07', description: 'Performa luar biasa dan harga terjangkau.', image: '8.JPEG', pros: ['Performa kuat', 'Harga terjangkau'], cons: ['Kenyamanan suspensi kurang', 'Ruang penyimpanan kecil'], price: 'Rp 100.000.000', reviews: ['Sangat memuaskan', 'Mudah dikendarai'] },
            { name: 'Kawasaki Ninja ZX-6R', description: 'Desain aerodinamis dan kecepatan tinggi.', image: '9.JPEG', pros: ['Desain aerodinamis', 'Performa cepat', 'Handling stabil'], cons: ['Harga tinggi', 'Kenyamanan kurang untuk perjalanan jauh'], price: 'Rp 200.000.000', reviews: ['Menawarkan akselerasi luar biasa', 'Ideal untuk pengendara yang mencari kecepatan'] },
            { name: 'Honda CRF250L', description: 'Ideal untuk petualangan off-road.', image: '10.JPEG', pros: ['Kapasitas off-road yang baik', 'Harga terjangkau', 'Konsumsi bahan bakar efisien'], cons: ['Kekuatan mesin terbatas di jalan raya', 'Fitur-fitur minimalis'], price: 'Rp 60.000.000', reviews: ['Sangat cocok untuk pemula', 'Tangguh di medan berat'] },
            { name: 'Ducati Monster', description: 'Desain ikonik dan performa mengesankan.', image: '11.JPEG', pros: ['Desain menarik', 'Performa tinggi', 'Kualitas build premium'], cons: ['Harga premium', 'Suspensi bisa lebih baik'], price: 'Rp 300.000.000', reviews: ['Sangat stylish dan bertenaga', 'Pengalaman berkendara yang memuaskan'] },
            { name: 'Suzuki V-Strom 650', description: 'Versatil dan nyaman untuk perjalanan jauh.', image: '12.JPEG', pros: ['Kenyamanan perjalanan', 'Fitur-fitur lengkap', 'Kinerja mesin baik'], cons: ['Desain kurang sporty', 'Dimensi besar membuat manuver agak sulit'], price: 'Rp 120.000.000', reviews: ['Cocok untuk perjalanan jarak jauh', 'Kenyamanan sangat baik'] },
            { name: 'Harley-Davidson Street 750', description: 'Gaya klasik dan performa yang solid.', image: '13.JPEG', pros: ['Desain klasik yang keren', 'Performa mesin solid', 'Nyaman untuk berkendara santai'], cons: ['Harga relatif tinggi', 'Akselerasi tidak secepat kompetitor'], price: 'Rp 90.000.000', reviews: ['Gaya retro yang menarik', 'Ideal untuk cruising'] },
            { name: 'BMW R1250GS', description: 'Kenyamanan dan kekuatan untuk perjalanan jauh.', image: '14.JPEG', pros: ['Kenyamanan berkendara tinggi', 'Performa mesin sangat baik', 'Fitur teknologi canggih'], cons: ['Harga sangat tinggi', 'Ukuran besar membuatnya sulit untuk parkir'], price: 'Rp 400.000.000', reviews: ['Sangat ideal untuk touring panjang', 'Teknologi mutakhir dan performa sangat mengesankan'] }
        
            // Tambahkan data lain sesuai kebutuhan
        ],
        truck: [
            { name: 'Isuzu D-Max', description: 'Tangguh dan kuat untuk pekerjaan berat.', image: '15.JPEG', pros: ['Daya angkut besar', 'Kekuatan mesin'], cons: ['Konsumsi bahan bakar tinggi', 'Desain kurang modern'], price: 'Rp 600.000.000', reviews: ['Sangat handal', 'Kapasitas besar'] },
            { name: 'Toyota Hilux', description: 'Terpercaya dan memiliki performa yang solid.', image: '16.JPEG', pros: ['Performa solid', 'Tahan lama', 'Reputasi terpercaya'], cons: ['Harga bisa tinggi', 'Fitur interior minimalis'], price: 'Rp 500.000.000', reviews: ['Sangat andal', 'Cocok untuk berbagai medan'] },
            { name: 'Ford Ranger', description: 'Teknologi modern dan kapasitas angkut yang besar.', image: '17.JPEG', pros: ['Teknologi terbaru', 'Kapasitas angkut besar', 'Performa mesin baik'], cons: ['Harga tinggi', 'Konsumsi bahan bakar cukup besar'], price: 'Rp 550.000.000', reviews: ['Fitur modern yang memadai', 'Kenyamanan berkendara baik'] },
            { name: 'Mitsubishi Triton', description: 'Kemampuan off-road dan daya tahan.', image: '18.JPEG', pros: ['Kemampuan off-road unggul', 'Daya tahan tinggi', 'Harga kompetitif'], cons: ['Desain interior kurang mewah', 'Pengendalian kurang halus'], price: 'Rp 480.000.000', reviews: ['Tangguh di medan berat', 'Harga terjangkau untuk kelasnya'] },
            { name: 'Nissan Navara', description: 'Kenyamanan dan daya angkut yang baik.', image: '20.JPEG', pros: ['Kenyamanan berkendara', 'Daya angkut baik', 'Fitur-fitur modern'], cons: ['Harga tinggi', 'Akselerasi agak lambat'], price: 'Rp 530.000.000', reviews: ['Kenyamanan tinggi', 'Fitur lengkap dan modern'] },
            { name: 'Chevrolet Colorado', description: 'Kinerja andal dan fitur modern.', image: '21.JPEG', pros: ['Kinerja andal', 'Fitur modern', 'Kualitas build baik'], cons: ['Harga bisa lebih tinggi', 'Konsumsi bahan bakar relatif tinggi'], price: 'Rp 560.000.000', reviews: ['Kinerja sangat baik', 'Fitur-fitur canggih'] },
            { name: 'Ram 1500', description: 'Kekuatan dan kenyamanan premium.', image: '22.JPEG', pros: ['Kekuatan mesin sangat baik', 'Kenyamanan premium', 'Fitur interior canggih'], cons: ['Harga sangat tinggi', 'Dimensi besar membuat parkir sulit'], price: 'Rp 700.000.000', reviews: ['Sangat kuat dan nyaman', 'Ideal untuk penggunaan berat dan panjang'] },
            
            // Tambahkan data lain sesuai kebutuhan
        ]
    };

    const items = recommendations[vehicleType] || [];
    recommendationDiv.innerHTML = items.map(item => `
        <div class="recommendation-item">
            <a href="isi.html?name=${encodeURIComponent(item.name)}&image=${encodeURIComponent(item.image)}&description=${encodeURIComponent(item.description)}&pros=${encodeURIComponent(JSON.stringify(item.pros))}&cons=${encodeURIComponent(JSON.stringify(item.cons))}&price=${encodeURIComponent(item.price)}&reviews=${encodeURIComponent(JSON.stringify(item.reviews))}">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                </div>
            </a>
        </div>
    `).join('');
}
