//console.log("Labas visiems! :)");

import fs from 'fs';
import path from 'path';

const folderPath = path.join(process.cwd(), 'duomenys'); // Katalogas
const filePath = path.join(folderPath, 'ivedimai.txt'); // Failas

// Patikrinam, ar failas jau egzistuoja
if (fs.existsSync(folderPath) === false) {
  fs.mkdirSync(folderPath, { recursive: true });
  console.log("Sukurtas katalogas: duomenys");
}

if (fs.existsSync(filePath) === false) {
  fs.writeFileSync(filePath, '');
  console.log("Sukurtas failas: ivedimai.txt");
} else {
  console.log("Failas jau egzistuoja. Duomenys bus papildyti.");
}

// Gauti argumentus is terminalo (praleidziant pirmus du elementus)
const args = process.argv.slice(2);
if (args.length > 0) {
  const text = args.join(' '); 
// Sudedame argumentus i naujas eilutes
  fs.appendFileSync(filePath, text + '\n');
  console.log("Irašyta i failą:", text);
} else {
  console.log("Nenurodyti duomenys irasymui. Naudokite: node uzduotis1.js tekstas1 tekstas2");
}