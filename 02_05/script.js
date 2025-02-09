const selectElement = document.getElementById("breedSelect");
const imgElement = document.getElementById("breedImage");

// Kreipimasis į API, kad gautume visų šunų veislių sąrašą
function fetchBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            populateBreeds(breeds);
        });
}

// Užpildome <select> veislių sąrašu
function populateBreeds(breeds) {
    breeds.forEach(breed => {
        const option = document.createElement("option");
        option.value = breed;
        option.textContent = breed;
        selectElement.appendChild(option);
    });
}

// Kreipimasis į API, kad gautume pasirinktos veislės nuotrauką
function fetchBreedImage(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(data => {
            imgElement.src = data.message;
        });
}

// Event listeneris pasirinkimui iš sąrašo
selectElement.addEventListener("change", function() {
    const selectedBreed = this.value;
    if (selectedBreed) {
        fetchBreedImage(selectedBreed);
    }
});

// Paleidžiam funkciją, kad užkrautų veisles
fetchBreeds();
