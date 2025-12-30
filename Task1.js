// Mencari nilai Min 

//Versi menggunakan method Math.Min

const numbers = [10, 20, 30, 40, 50];
const minNumber = Math.min(...numbers);
console.log(minNumber);

//Versi duplicate nya
let terkecil = numbers[0]
for(i=0; i<= numbers.length-1; i++){
    if(numbers[i]<terkecil){
        terkecil = numbers[i]
    }
}
console.log(terkecil)