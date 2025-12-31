const persons = [
    { name: "Koda", wait: 5 },
    { name: "Mamet", wait: 4 },
    { name: "", wait: 7 },
    { name: "Kevin", wait: 6 },
    { name: "Mark", wait: 8 }
]

function queue(data){
    let index = 0
    function start(){
        return new Promise((resolve, reject)=>{
            const person = data[index]
            if(person){
                if(person.name !== ""){
                    console.log("Menunggu antrian...")
                    setTimeout(function(){
                    console.log(`Pesanan "${person.name}" sudah siap`)
                    index += 1
                    resolve(start())
                    },person.wait*1000)
                }
                else{
                    setTimeout(function(){
                    console.log(`Nama tidak boleh kosong`)
                    index += 1
                    resolve(start())
                    },person.wait*1000)
                }
            }
            else{
                reject()
            }
        })
    }
    return start()
}

queue(persons).then().catch(() => {
    console.log("Selesai")
})