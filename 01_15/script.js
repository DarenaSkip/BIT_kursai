// 1. Sukurkite funkciją, kuri sukuria atsitiktinių skaičių masyvą iš N elementų. Atsitiktiniai skaičiai nuo M iki O;
// pvz:
// console.log(generuotiAtsitiktinius(4, 100, 105));
// atsakymas konsolėje: [101, 101, 100, 105]

// function rand(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const atsitiktiniai = [];

// index = 0;
// while (index < 4) {
//     const atsitiktinisSk = rand(100, 105);
//     atsitiktiniai.push(atsitiktinisSk);
//     index++;
// }
// console.log(atsitiktiniai);

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
// console.log(`Skaitmens 3 kiekis masyve: ${countAllThrees(skaiciuMasyvas)}`); //Nedariau universalumo, tik kaip uzduoty, trejetus tik isrinkt, suskaiciuot...Ir taip kiek laiko surijo ir tiek isstenet...Realiuoju laiku taip greit, be pradzios ir neprikoduociau, bent kol kas, vis is kitur reikia ziuret, panasuma pritaikyt...

// 4. Sukurkite funkcijas countAllEven(array) ir countAllOdd(array). Pirmoji funkcija suskaičiuoja, kiek yra lyginių skaičių pateiktame masyve. Kita suskaičiuoja kiek yra nelyginių skaičių;

// function

// 5. Sukurkite funkciją countAllEvenUnderSix(array), kuri suskaičiuoja, kiek yra lyginių skaičių, kurių reikšmė yra  6 arba mažesnė  pateiktame masyve.

// function

// 6. Sukurkite funkciją throwCoin(), kuri imituoja monetos metimą. funkcijos gražinama reikšmė: “H” - Herbas arba “S” - Skaičius;

// function

// 7. Sukurkite funkciją, kuri imituoja monetos metimą 20 kartų, suskaičiuokite kiek kartų iškrito skaičius, kiek kartų iškrito herbas. Paskaičiuokite procentaliai, kokiu dažnumu krito skaičius, kokiu dažnumu krito skaičius;
// (pasiūlymas patobulinimui mini-game - > pridėti puslapyje mygtuką, leisiantį pasirinkti kokios pusės monetos tikitės, ir pridėti mesti monetą mygtukus, tada atitinkamai atvaizduoti, buvo laimėta - ar pralaimėta)

// function

// 8. Sukurkite funkciją sumAll(masyvas), kuri susumuoja visus masyvo elementus, bei gražina šią sumą kaip rezultatą;

// function

// 9. Sukurkite funkciją average(arr), kuri atranda visų masyve pateiktų skaičių vidurkį; PVZ: average([1,2,3,4,5])//3

// function

// 10. Sukurkite funkciją findAllUniqueNumbers(masyvas), kuri atranda masyve esančius unikalius skaičius. gražina juos masyvo pavidalu: pvz: findAllUniqueNumbers([1,1,2,8,8,1, 4, 6]) // [1,2,8,4,6];

// function
