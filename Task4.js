const data = [
    {
        name: "Koda", 
        wait: 5
        
    },
    {
        name: "Mamet", 
        wait: 4
    },
    {
        name: "James", 
        wait: 7
    },
    {
        name: "Kevin", 
        wait: 6
    },
    {
        name: "Mike", 
        wait: 8
    }
]

console.log("Menunggu Antrian...")

function tungguPesanan(data, callback){
    let totalWaktu = 0
    for(let i=0; i<data.length; i++){
        totalWaktu += data[i].wait
        callback(data[i].name, totalWaktu)
    }
}

function hasil(nama, waktu){
    setTimeout(() => console.log(`Halo ${nama} pesanan kamu sudah siap`)
    , waktu * 1000 )
}

tungguPesanan(data, hasil)