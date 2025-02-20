import fs from "fs";
fs.rmSync("duomenys", { recursive: true, force: true });
console.log("Istrinta");
