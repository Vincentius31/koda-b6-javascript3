const data = [
    { name: "Koda", wait: 5 },
    { name: "Mamet", wait: 4 },
    { name: "James", wait: 7 },
    { name: "Kevin", wait: 6 },
    { name: "Mike", wait: 8 }
]

console.log("Menunggu Antrian...")

function tunggu(waktu) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Menunggu Pesanan...")
            resolve()
        }, waktu * 1000)
    })
}

function pesananSiap(nama) {
    return new Promise(resolve => {
        console.log(`Halo ${nama}, pesanan kamu sudah siap`)
        resolve()
    })
}

function tungguPesanan(data) {
    let hasil = Promise.resolve()

    for (let i = 0; i < data.length; i++) {
        hasil = hasil.then(() => tunggu(data[i].wait)).then(() => pesananSiap(data[i].name))
    }

    return hasil
}

tungguPesanan(data)
    .then(() => {
        console.log("Semua pesanan selesai")
    })