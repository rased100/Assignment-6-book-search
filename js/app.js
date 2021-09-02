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
}

const showSearchBooks = books => {
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
                    <p class="card-text">Author: ${book.author_name}</p>
                    <p class="card-text">Publish-Year: ${book.first_publish_year}</p>
                    <p class="card-text">Publisher: ${book.publisher}</p>
                </div>
            </div>
        `;
        searchBookResult.appendChild(div);
    })
}