const DataSet = [
    "Maria",
    "Mark",
    "Mario",
    "Deborah",
    "maria",
    "deborah",
    "marju",
    "Maliki"
]

function search(keywordPencarian, cb){
    let hasilPencarian = []
    let namaSiswa = keywordPencarian.toLowerCase()

    DataSet.forEach((DataSet) => {
        if(DataSet.includes(namaSiswa)){
            hasilPencarian.push(DataSet)
        }
    })

    cb(hasilPencarian)
}

function tampilkanHasil(hasilPencarian){
    console.log("Hasil pencarian siswa:")
    console.log(hasilPencarian)
    console.log("Jumlah siswa:", hasilPencarian.length)
}

search("DEB", tampilkanHasil)