const searchBook = () => {
    const input = document.getElementById('input-area');
    const searchText = input.value;
    // console.log(searchText);
    input.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchText}`;

    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => showSearchBooks(data.docs));

}


const showSearchBooks = books => {
    // console.log(books.length);
    if (books.length === 0) {
        // No result found
        const totalSearchResult = document.getElementById('total-srarch-result');
        totalSearchResult.textContent = '';
        const div1 = document.createElement('div');
        div1.innerHTML = `
            <h1 class="text-center">No Resut Found</h1>
`;
        totalSearchResult.appendChild(div1);
    }
    else {
        // total results in number
        const totalSearchResult = document.getElementById('total-srarch-result');
        totalSearchResult.textContent = '';
        const div1 = document.createElement('div');
        div1.innerHTML = `
    <p class="text-center  ">About <span class="fw-bold" >${books.length}</span> Search Results</p><hr class="w-50 mx-auto">
    `;
        totalSearchResult.appendChild(div1);
    }



    // book results
    const searchBookResult = document.getElementById('search-result');
    searchBookResult.textContent = '';
    books.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top book-imag w-75 mx-auto" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text"><span class="fw-bold">Author:</span> ${book.author_name}</p>
                    <p class="card-text"><span class="fw-bold">Publish-Year:</span> ${book.first_publish_year}</p>
                    <p class="card-text"><span class="fw-bold">Publisher:</span> ${book.publisher}</p>
                </div>
            </div>
        `;
        searchBookResult.appendChild(div);
    })
}