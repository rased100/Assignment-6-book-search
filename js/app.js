const searchBook = () => {
    const input = document.getElementById('input-area');
    const searchText = input.value;
    // console.log(searchText);
    input.value = '';

    const url = `http://openlibrary.org/search.json?q=${searchText}`;

    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => showSearchBooks(data.docs));
    // .then(data => showResultsValue(data.docs));
}
// const showResultsValue = value => {
//     console.log(value.length);
// }

const showSearchBooks = books => {
    console.log(books.length);
    if (books.length === 0) {
        // No result found
        const totalSearchResult = document.getElementById('total-srarch-result');
        const div1 = document.createElement('div');
        div1.innerHTML = `
            <h1 class="text-center">No Resut Found</h1>
`;
        totalSearchResult.appendChild(div1);
    }
    else {
        // total results in number
        const totalSearchResult = document.getElementById('total-srarch-result');
        const div1 = document.createElement('div');
        div1.innerHTML = `
    <p class="text-center  ">About <span class="fw-bold" >${books.length}</span> Search Results</p><hr class="w-50 mx-auto">
    `;
        totalSearchResult.appendChild(div1);
    }



    // book results
    const searchBookResult = document.getElementById('search-result');
    books.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
                <div>
                    <h5 class="card-title text-center">${book.title}</h5>
                </div>
                <div class="card-body">
                    <p class="card-text"><span class="fw-bold">Author:</span> ${book.author_name}</p>
                    <p class="card-text"><span class="fw-bold">Publish-Year:</span> ${book.first_publish_year}</p>
                    <p class="card-text"><span class="fw-bold">Publisher:</span> ${book.publisher}</p>
                </div>
            </div>
        `;
        searchBookResult.appendChild(div);
    })
}