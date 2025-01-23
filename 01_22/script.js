// Tikslas: Sugeneruoti sąrašą, sudarytą iš pirkinių:

const shoppingList = [
  { name: "Duona", price: 1.491 },
  { name: "Pienas", price: 0.9923 },
  { name: "Sūris", price: 3.789 },
  { name: "Kiaušiniai", price: 2.392 },
  { name: "Bananas", price: 1.194 },
];
// Funkcija, pridedanti naują prekę
function addItem(name, price) {
    // Patikriname, ar kaina yra teigiama ir tada pridedame prekę
    if (price > 0) {
      shoppingList.push({ name: name, price: price });
      renderShoppingList();  // Atnaujiname HTML sąrašą
    } else {
      console.error("Netinkama kaina!");
    }
  }
  
//   // Funkcija, kuri atnaujina HTML sąrašą
//   function renderShoppingList() {
//     let visuProduktuHTML = "";
    
//     for (let i = 0; i < shoppingList.length; i++) {
//       if (shoppingList[i].price > 0) {
//         visuProduktuHTML += `
//           <div class="product">
//             <div class="details">
//               <h3>${shoppingList[i].name}</h3>
//               <p>Price: <span class="price">${formatPrice(shoppingList[i].price)}€</span></p>
//             </div>
//           </div>
//         `;
//       }
//     }
    
//     const shoppingListElement = document.querySelector("#shopping-list");
//     shoppingListElement.innerHTML = visuProduktuHTML;
//   }
  
//   // Testas: Pridedame naują prekę
//   addItem("Obuoliai", 2.49);
  

function formatPrice(price) {
    if (typeof price !== "number" || isNaN(price)) {
      return "Nėra kainos";
    }
    return price.toFixed(2);
  }

  function renderShoppingList() {
    const listElement = document.getElementById("shopping-list");
    listElement.innerHTML = shoppingList
      .map(function (item) {
        return `
          <li>
            ${item.name} - 
            <span class="price" style="color: blue;">
              ${formatPrice(item.price)}€
            </span>
          </li>
        `;
      })
      .join(""); // Sukuriame HTML su sabloninemis eilutemis
  }

function addItem(name, price) {
    if (!name || typeof name !== "string") {
      alert("Neteisingas pavadinimas!");
      return;
    }
    if (typeof price !== "number" || isNaN(price) || price <= 0) {
      alert("Neteisinga kaina!");
      return;
    }
    shoppingList.push({ name: name, price: price }); // Pridedame i sarasa
    renderShoppingList();

    document.getElementById("item-name").value = "";
    document.getElementById("item-price").value = "";
  }
   renderShoppingList();
