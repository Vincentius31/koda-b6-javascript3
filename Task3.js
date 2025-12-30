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

function cocok(namaSiswa, keywordPencarian){ 
    let translateNamaSiswa = namaSiswa.toLowerCase()
    let translateKeywordPencarian = keywordPencarian.toLowerCase()

    for(let i = 0; i<= translateNamaSiswa.length - keywordPencarian.length; i++){
        let res = true; 
        for(let j = 0; j< translateKeywordPencarian.length; j++){
            if(translateNamaSiswa[i+j] !== translateKeywordPencarian[j]){
                res = false;
                break;
            }
        }
        if(res){
            return true
        }
    }
}

function search(keywordPencarian, cb){
    let hasilPencarian = []

    for(let i=0; i<DataSet.length; i++){
        if(cocok(DataSet[i], keywordPencarian)){
            hasilPencarian.push(DataSet[i])
        }
    }
    cb(hasilPencarian)
}

function tampilkanHasil(hasilPencarian){
    console.log("Hasil pencarian siswa:")
    console.log(hasilPencarian)
    console.log("Jumlah siswa:", hasilPencarian.length)
}

search("MaR", tampilkanHasil)