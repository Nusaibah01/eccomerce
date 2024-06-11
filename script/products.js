// Products
let container = document.querySelector('[ourBooks]')
let bookSearch = document.querySelector('[findBook]')
let sortByPrice = document.querySelector('[sort]')
let books = JSON.parse(
    localStorage.getItem(books)
)
// Display all books in my store
function displayBooks(args){
container.innerHTML = ""
try{
    args.forEach(book => {
container.innerHTML += `
  <div class="card">
  <img src="${book.img_url}" class="card-img-top" alt="${book.bookName}" loading='lazy'>
  <div class="card-body">
    <h5 class="card-title">${book.bookName}</h5>
    <p class="card-text">${book.description}</p>
    <p class="card-text">
     <span class="shadow text-success fw-bold">Price</span>
     R${book.price}
     </p>
    <button type='button' class="btn btn-success" onclick='addToCart(${JSON.stringify(book)})'><i class="bi bi-cart4"></i></button>
  </div>
</div>`
})
    
}
catch (e){
container.textContent = "Please try again later"
}
}
displayBooks(books)

// find book
bookSearch.addEventListener('keyup', () => {
    try {
        if (searchBook.value.length < 1) {
            displayBooks(books)
        }
        let filteredBooks = books.filter(book => book.bookName.toLowerCase().includes(searchBook.value))
        displayBooks(filteredBooks)
        if (!filteredBook.length) throw new Error(`${searchBook.value} book was not found. To request it's addition to our collection<br>
            <label>Click Here:</label>
             <button><a href="../html/contact.html">Enquiries</button>`)
    } catch (e) {
        container.textContent = e.message || 'Please try again later'
    }
})

// Sort by Price 

let isToggle = false
sortingByAmount.addEventListener('click', () => {
    try {
        if (!books) throw new Error('Please try again later')
        if (!isToggle) {
            books.sort((a, b) => b.price - a.price)
            sortingByAmount.textContent = 'Sorted by highest amount'
            isToggle = true
        } else {
            books.sort((a, b) => a.price - b.price)
            sortingByAmount.textContent = 'Sorted by lowest amount'
            isToggle = false
        }
        displayBooks(books)
    } catch (e) {
        container.textContent = e.message || 'We are working on this issue'
    }
})



// Display the current year
document.querySelector('[cY]').textContent =new Date().getUTCFullYear()