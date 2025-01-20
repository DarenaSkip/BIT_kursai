// 1. Sukurkite funkciją, kuri sukuria atsitiktinių skaičių masyvą iš N elementų. Atsitiktiniai skaičiai nuo M iki O;
// pvz:
// console.log(generuotiAtsitiktinius(4, 100, 105));
// atsakymas konsolėje: [101, 101, 100, 105]
//n -
//m -
//o - maksimali reiksme iki kurio generuojamas skaicius

// function rand(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // 1.
// const atsitiktiniai = [];

// i = 0;
// while (i < 4) {
//     const atsitiktinisSk = rand(100, 105);
//     atsitiktiniai.push(atsitiktinisSk);
//     i++;
// }
// console.log(atsitiktiniai);
// 2.

// function atstSkMasyvas(n,m,o){
//     // 1. deklaruojame nauja masyva
//     const masyvas = [];
//     // 2.naudosim cikla, vykdanti koda n kartu
//     for(let i = 0; i < n; i++){
//     // 2.1. generuojamas atsitiktinis skaicius nuo m iki o
//         let atsitiktinis = rand(m, o);
//     // 2.2.tas atsitiktinis bus pridedamas i naujai deklaruota masyva
//         masyvas.push(atsitiktinis);
//     // return [4,5,6,7,54]
//     }
//     return masyvas;
// }
// //console.log(atstSkMasyvas(10, 0, 5));
// const atsitiktiniai1 = kurtiAtsitiktiniuSkaiciuMasyva(1000, 1, 100);
// console.log(atsitiktiniai1);

// 2. Sukurkite funkciją, kuri console.log’e parašo tik skaičius iš masyvo M, mažesnius nei N.
// pvz:
// tikMazesni([4,5,6,7,2,4], 5);
// atsakymas konsolėje: 4, 2, 4

// function tikMazesni(M, N) {
//   for (let i = 0; i < M.length; i++) {
//     if (M[i] < N) {
//       console.log(M[i]);
//     }
//   }
// }
// tikMazesni([4, 5, 6, 7, 2, 4], 6);

// 3. Sukurkite funkciją, countAllThrees(array), kuri suskaičiuotų, kiek kartų pateiktame skaičių masyve yra pasikartojantis skaičius 3;

// 1. mano variantas
// const skaiciuMasyvas = [36, 1233345, -4321, 3.77303, -5.3893];

// function countAllThrees(skaiciuMasyvas) {
//   let count = 0;
//   for (let i = 0; i < skaiciuMasyvas.length; i++) {
//     let eilute = Math.abs(skaiciuMasyvas[i]).toString();
//     for (let j = 0; j < eilute.length; j++) {
//       if (eilute[j] === '3') {
//         count++;
//       }
//     }
//   }
//   return count;
// }
// // console.log(countAllThrees(skaiciuMasyvas));
// console.log(`Skaitmens 3 kiekis masyve: ${countAllThrees(skaiciuMasyvas)}`);
// //Nedariau universalumo, tik kaip uzduoty, trejetus tik isrinkt, suskaiciuot...Ir taip kiek laiko surijo ir tiek isstenet...Realiuoju laiku taip greit, be pradzios ir neprikoduociau, bent kol kas, vis is kitur reikia ziuret, panasuma pritaikyt...

// 2. paskaitos variantas

// function countAllThrees(array){
//     let pasikartSk = 0;
//     for(let i = 0; i < array.length; i++){
//         if(array[i] == 3){
//         // if(array[i] == 3 || array[i] == 6)
//             pasikartSk++;
//         }
//     }
//     return pasikartSk;
// }
// console.log(countAllThrees(atsitiktiniai))

// 4. Sukurkite funkcijas countAllEven(array) ir countAllOdd(array). Pirmoji funkcija suskaičiuoja, kiek yra lyginių skaičių pateiktame masyve. Kita suskaičiuoja kiek yra nelyginių skaičių;

// 1. mano variantas
// const skaiciuMasyvas = [1,2,11,0,-1,-4,12,11,666,999,33];

// function countAllEven(skaiciuMasyvas){

//     let kiekLyginiu = 0;
//     let kiekNelyginiu = 0;
//     for(let i = 0; i < skaiciuMasyvas.length; i++){
//         if(skaiciuMasyvas[i]%2 === 0){
//             kiekLyginiu++;
//             return kiekLyginiu;
//         }

//         else if(skaiciuMasyvas[i]%2 !== 0){kiekNelyginiu = skaiciuMasyvas.length - kiekLyginiu}
//         return kiekNelyginiu;
//     }
//     }
// return kiekLyginiu;

// const skaiciuMasyvas = [1,2,11,0,-1,-4,12,11,666,999,33]

// function countAllEven(array){
//     let kiekPasikart = 0;
//     for(let i = 0; i < array.length; i++){
//         if(array[i] % 2 == 0){
//             kiekPasikart++;
//         }
//     }

// }

// function countAllOdd(array){
//     let kiekPasikart = 0;
//     for(let i = 0; i < array.length; i++){
//         if(array[i] % 2 != 0){
//             kiekPasikart++;
//         }
//     }
// }
// // console.log(countAllEven([2,3,4,5,6,7,8]))
// console.log(countAllEven(atsitiktiniai))
// console.log(countAllOdd([1,2,3,4,5,6]))

// 5. Sukurkite funkciją countAllEvenUnderSix(array), kuri suskaičiuoja, kiek yra lyginių skaičių, kurių reikšmė yra  6 arba mažesnė  pateiktame masyve.

// function countAllEvenUnderSix(array) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 6 == 0) {
//       i++;
//     }
//   }
//   return array;
// }
// console.log(countAllEvenUnderSix([1,2,3,4,5,6]))

// 6. Sukurkite funkciją throwCoin(), kuri imituoja monetos metimą. funkcijos gražinama reikšmė: “H” - Herbas arba “S” - Skaičius;

// function throwcoin() {
//   // 50% - H
//   // 50% - S
//   //     let atsitiktinis = rand(1,2);
//   //     if(atsitiktinis==1){
//   //         return "H";
//   //  }
//   //     else {
//   //         return "S";
//   //     }
// //!!! - trumpesnis variantas:
//   if (rand(1, 2) == 1) return "H";
//   return "S";

// }

// 7. Sukurkite funkciją, kuri imituoja monetos metimą 20 kartų, suskaičiuokite kiek kartų iškrito skaičius, kiek kartų iškrito herbas. Paskaičiuokite procentaliai, kokiu dažnumu krito skaičius, kokiu dažnumu krito skaičius;
// (pasiūlymas patobulinimui mini-game - > pridėti puslapyje mygtuką, leisiantį pasirinkti kokios pusės monetos tikitės, ir pridėti mesti monetą mygtukus, tada atitinkamai atvaizduoti, buvo laimėta - ar pralaimėta)

// function throwCoinTimes(n){
//     let kartuIskrSk = 0;
//     let kartuIskrHr = 0;

//     for(let i = 0; i < n; i++){
//         //vyksta metimas
//         let iskritusReiksme = throwCoin();
//         //metimo vartinimas
//         if(iskritusReiksme == "H")
//             kartuIskrHr++;
//             else
//             kartuIskrSk++;
        
//     }

//     let procentaliaiIskrSk = (kartuIskrSk/n)*100;
//     let rocentaliaiIskrHr = (kartuIskrHr/n)*100;

//     console.log(`Skaicius iskrito ${kartuIskrSk} kartu`);
//     console.log(`Skaicius iskrito ${kartuIskrHr} kartu`);
//     console.log(`Skaicius procentaliai krito ${procentaliaiIskrSk}% atveju, herbas krito ${procentaliaiIskrHr}% atveju`);
// }
// throwCoinTimes(20);

// 8. Sukurkite funkciją sumAll(masyvas), kuri susumuoja visus masyvo elementus, bei gražina šią sumą kaip rezultatą;

// function sumAll(masyvas){
//     let suma = 0;
//     for(let i = 0; i < masyvas.length; i++){
//         suma += masyvas[i];
//     }
//     return suma;
// }
// console.log(sumAll(atsitiktiniai1));


// 9. Sukurkite funkciją average(arr), kuri atranda visų masyve pateiktų skaičių vidurkį; PVZ: average([1,2,3,4,5])//3

// function average(arr){
//     let suma = sumAll(arr);
//     return suma / arr.length;
// }

// 10. Sukurkite funkciją findAllUniqueNumbers(masyvas), kuri atranda masyve esančius unikalius skaičius. gražina juos masyvo pavidalu: pvz: findAllUniqueNumbers([1,1,2,8,8,1, 4, 6]) // [1,2,8,4,6];

// function findAllUniqueNumbers(masyvas){
//     const unikalusSkaiciai = [];

//     for(let i = 0; i < masyvas.length; i++){
//         if(!unikalusSkaiciai.includes(masyvas[i])){
//             masyvas.push(masyvas[i]);
//         }
//     }
//     return unikalusSkaiciai;
// }
// console.log(findAllUniqueNumbers([1,3,5,7,8,9]));

