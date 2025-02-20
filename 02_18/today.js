const today = new Date();
const args = process.argv.slice(2);

// Funkcija, skirta suformuoti objektą iš terminalo argumentų
const parsedArgs = args.reduce((acc, arg) => {
  const [key, value] = arg.split("=");
  acc[key] = value;
  return acc;
}, {});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

if (!parsedArgs.rezimas) {
  console.log("Pasirinkite režimą: rezimas=savaites_diena, rezimas=menuo, rezimas=menesio_diena");
} else if (parsedArgs.rezimas === "savaites_diena") {
  console.log("Šiandien -", capitalizeFirstLetter(today.toLocaleDateString('lt-LT', { weekday: 'long' })));
} else if (parsedArgs.rezimas === "menuo") {
  console.log("Šiandien -", capitalizeFirstLetter(today.toLocaleDateString('lt-LT', { month: 'long' })));
} else if (parsedArgs.rezimas === "menesio_diena") {
  console.log("Šiandien -", today.getDate(), "diena");
} else {
  console.log("Neteisingas režimas. Naudokite: rezimas=savaites_diena, rezimas=menuo arba rezimas=menesio_diena.");
}