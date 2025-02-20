// Argumentų suma
const args = process.argv.slice(2);

if (args.length === 0) {
    console.log("Nėra argumentų");
  } else {
    const sum = args.reduce((acc, val) => acc + Number(val), 0); // Sudeda visus argumentus
    console.log("Suma:", sum);
  }