const vardas = document.querySelector("#vardo-ivestis");
const pavarde = document.querySelector("#pavardes-ivestis");
const email = document.querySelector("#email-ivestis");
const termsCheckbox = document.querySelector("#terms");



function getFormData() {
	
	let arSutinkaSuTaisyklemis = termsCheckbox.checked; //true
	console.log(arSutinkaSuTaisyklemis); //true
	if (!arSutinkaSuTaisyklemis) {
		alert(
			"Jūs privalote sutikti su taisyklėmis ir sąlygomis prieš registruojantis"
		);
	}

	let vard = vardas.value;
	console.log(vardas);
	let pav = pavarde.value;
	console.log(pavarde);
	let elPastas = email.value;
	console.log(elPastas);

}