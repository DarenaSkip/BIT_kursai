document.addEventListener("DOMContentLoaded", function() {
    const booksList = document.getElementById("booksList");
    const searchInput = document.getElementById("search");
    const categoryFilter = document.getElementById("categoryFilter");
    const loadingText = document.getElementById("loading");
    const noResultsText = document.getElementById("noResults");
    
    Promise.all([
        fetch("https://in3.dev/knygos/"),
        fetch("https://in3.dev/knygos/types/")
    ])
    .then(function(responses) {
        return Promise.all(responses.map(res => res.json()));
    })
    .then(function([books, categories]) {
        loadingText.style.display = "none";
        
        categories.forEach(category => {
            const option = document.createElement("option");
            option.value = category.id;
            option.textContent = category.title;
            categoryFilter.appendChild(option);
        });
        
        function displayBooks(filteredBooks) {
            booksList.innerHTML = "";
            if (filteredBooks.length === 0) {
                noResultsText.style.display = "block";
            } else {
                noResultsText.style.display = "none";
                filteredBooks.forEach(book => {
                    const bookItem = document.createElement("div");
                    bookItem.classList.add("col-md-4", "mb-4");
                    bookItem.innerHTML = `
                        <div class="card book-card">
                            <img src="${book.img}" class="card-img-top" alt="${book.title}">
                            <div class="card-body">
                                <h5 class="card-title">${book.title}</h5>
                                <p class="card-text">Autorius: ${book.author}</p>
                                <p class="card-text">Kategorija: ${categories.find(cat => cat.id === book.type).title}</p>
                            </div>
                        </div>
                    `;
                    booksList.appendChild(bookItem);
                });
            }
        }
        
        searchInput.addEventListener("input", function() {
            const searchValue = searchInput.value.toLowerCase();
            const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchValue));
            displayBooks(filteredBooks);
        });
        
        searchInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                searchInput.value = "";
                displayBooks(books);
            }
        });
        
        categoryFilter.addEventListener("change", function() {
            const categoryValue = categoryFilter.value;
            const filteredBooks = categoryValue ? books.filter(book => book.type == categoryValue) : books;
            displayBooks(filteredBooks);
        });
        
        displayBooks(books);
    })
    .catch(function() {
        loadingText.textContent = "Įvyko klaida kraunant duomenis!";
    });
});