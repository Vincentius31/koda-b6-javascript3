//1. at()

// Sebuah fitur untuk mengakses elemen array atau string dari awal atau akhir 
// menggunakan indeks positif atau negatif.

const array = [5, 12, 8, 130, 44];
let index = 2;

console.log(`An index of ${index} returns ${array.at(index)}`);
// Hasil keluaran: "index of 2 returns 8"

index = -2;
console.log(`An index of ${index} returns ${array.at(index)}`);
// Hasil keluaran: "index of -2 returns 130"

//2. filter()

// fungsi array untuk membuat array baru berisi elemen yang lolos tes kondisi 
// tertentu dari fungsi callback yang diberikan, sangat berguna untuk menyaring 
// data tanpa mengubah array asli.

const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Hasil keluaran: Array ["exuberant", "destruction", "present"]

//3. find()

// Mengembalikan nilai elemen pertama dalam sebuah array yang 
// memenuhi kondisi tertentu yang disediakan oleh fungsi callback pengujian. 

const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);

console.log(found);
// Hasil keluaran: 12

//4. findIndex()

// fungsi pada array yang mencari elemen pertama yang memenuhi kondisi yang diberikan dalam 
// sebuah fungsi callback dan mengembalikan indeks elemen tersebut, bukan elemennya sendiri, 
// berhenti mencari setelah ketemu, atau mengembalikan -1 jika tidak ada yang cocok, 
// sangat berguna untuk mencari posisi item spesifik dalam array atau array of objects. 

const array2 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;

console.log(array2.findIndex(isLargeNumber));
// Hasil keluaran: 3

//5. includes()

//menentukan apakah sebuah string atau array mengandung elemen atau substring tertentu, dan akan 
// mengembalikan nilai true atau false.

const array3 = [1, 2, 3];
console.log(array3.includes(2));
// Hasil keluaran: true

const pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat"));
// Hasil keluaran: true
console.log(pets.includes("at"));
// Hasil keluaran: false

//6. Method indexOf()

//mencari indeks (posisi) pertama suatu elemen dalam array atau string; 
//mengembalikan nomor indeks jika ditemukan, dan -1 jika tidak ditemukan.

const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
// Hasil keluaran: 1
console.log(beasts.indexOf("giraffe"));
// Hasil keluaran: -1

//7. join()

//Menggabungkan semua elemen dalam sebuah array menjadi satu string tunggal.

const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Hasil keluaran: "Fire,Air,Water"

console.log(elements.join(""));
// Hasil keluaran: "FireAirWater"

console.log(elements.join("-"));
// Hasil keluaran: "Fire-Air-Water"

//8. slice()

//mengekstrak sebagian dari array atau string dan mengembalikannya sebagai 
// array baru atau string baru.

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Hasil keluaran: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Hasil keluaran: Array ["camel", "duck"]

//9. sort()

//Mengurutkan elemen dalam array.

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// Hasil keluaran: Array ["Dec", "Feb", "Jan", "March"]

const array4 = [1, 30, 4, 21, 100000];
array.sort();
console.log(array4);
// Hasil keluaran: Array [1, 100000, 21, 30, 4]

//10. splice()

//Memodifikasi array secara langsung dengan menghapus, menambah, atau mengganti 
// elemen di posisi tertentu

const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed

//11. toString()

//Mengubah tipe data lain (seperti angka, boolean, atau array) menjadi representasi teks (string).

const array5 = [1, 2, "a", "1a"];

console.log(array5.toString());
// Hasil keluaran: "1,2,a,1a"

//12. reverse()

//Membalikkan urutan elemen dalam sebuah array secara langsung.

const array6 = ["one", "two", "three"];
const reversed = array6.reverse();
console.log("reversed:", reversed);
// Hasil keluaran: "reversed:" Array ["three", "two", "one"]

//13. pop()

//Menghapus elemen terakhir dari sebuah array dan mengembalikan nilai elemen yang dihapus tersebut.

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop());
// Hasil keluaran: "tomato"

console.log(plants);
// Hasil keluaran: Array ["broccoli", "cauliflower", "cabbage", "kale"]

//14. flat()

//Meratakan array bersarang menjadi array baru dengan kedalaman tertentu.

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// Hasil keluaran: Array [0, 1, 2, 3, 4]

//15. reduce()

//Mereduksi atau menggabungkan semua elemen array menjadi satu nilai tunggal 
//(bisa berupa angka, string, objek, dll.)

const array7 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array7.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Hasil keluaran: 10

//16. reduceRight()

// Sama seperti reduce() hanya saja memproses dari kanan ke kiri.

const array8 = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result1 = array.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue),
);

console.log(result1);

//17. toLocaleString()

//Mengubah angka atau tanggal menjadi format string yang sesuai dengan 
//lokal (bahasa dan wilayah) tertentu.

const array9 = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")];
const localeString = array9.toLocaleString("en", { timeZone: "UTC" });

console.log(localeString);
// Hasil keluaran: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary

//18. values()

//mendapatkan semua nilai values dari sebuah objek dalam bentuk array.

const array10 = ["a", "b", "c"];
const iterator = array10.values();

for (const value of iterator) {
  console.log(value);
}

//19. unshift()

// Menambahkan satu atau lebih elemen ke awal (depan) sebuah array.

const array11 = [1, 2, 3];

console.log(array11.unshift(4, 5));
// Hasil keluaran: 5

console.log(array11);
// Hasil keluaran: Array [4, 5, 1, 2, 3]

// 20. with()

// Memperpendek akses properti objek

arrayInstance.with(index, value)

// 21. isNaN()

// Mengecek apakah nilai tersebut Nan atau tidak

function milliseconds(x) {
  if (isNaN(x)) {
    return "Not a Number!";
  }
  return x * 1000;
}

console.log(milliseconds("100F"));
// Expected output: "Not a Number!"

console.log(milliseconds("0.0314E+2"));
// Expected output: 3140

//22. isFinite()

// Mengecek apakah sebuah nilai infinite atau tidak

function div(x) {
  if (isFinite(1000 / x)) {
    return "Number is NOT Infinity.";
  }
  return "Number is Infinity!";
}

console.log(div(0));
// Expected output: "Number is Infinity!""

console.log(div(1));
// Expected output: "Number is NOT Infinity."

//23. eval()

// memproses sebuah string menjadi sebuah nilai Number

console.log(eval("2 + 2"));
// Expected output: 4

//24. parseFloat()

// memproses sebuah string menjadi sebuah nilai bertipe float

function circumference(r) {
  return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference(4.567));

//25. Math.PI()

// menampilkan hasil nilai pi

function lingkaran(r){
    return Math.PI * r * r
}

console.log(lingkran(7))