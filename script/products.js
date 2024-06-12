// Display the current year
document.querySelector('[currentYear]').textContent =new Date().getUTCFullYear()

let container = document.querySelector('[ourBooks]')
let searchProduct = document.querySelector('[findBook]')
let sortingByAmount = document.querySelector('[sort]')
let products = JSON.parse(
    localStorage.getItem('products')
)
// Checkout Books
let checkoutItems = JSON.parse(localStorage.getItem('checkout'))
    ? JSON.parse(localStorage.getItem('checkout'))
    : []


function displayProducts(args) {
    container.innerHTML = ""
    try {
        args.forEach(product => {
            container.innerHTML += `
            <div class="row">
            <div class="card">
                    <img src="${product.img_url}" class="card-img-top" alt="${product.bookTitle}" loading='lazy'>
                    <div class="card-body">
                        <h5 class="card-title">${product.bookTitle}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">
                            <span class="shadow text-success fw-bold">Amount</span>
                            R${product.price}
                        </p>
                        <button type='button' class="btn btn-success" onclick='addToCart(${JSON.stringify(product)})'><i class="bi bi-cart4"></button>
                    </div>
                </div>
            `
        })

    } catch (e) {
        container.textContent = "Please try again later"
    }
}
displayProducts(products)


// Search For Books
searchProduct.addEventListener('keyup', () => {
    try {
        if (searchProduct.value.length < 1) {
            displayProducts(products)
        }
        let filteredProduct = products.filter(product => product.bookTitle.toLowerCase().includes(searchProduct.value))
        displayProducts(filteredProduct)
        if (!filteredProduct.length) throw new Error(`${searchProduct.value} title not found`)
    } catch (e) {
        container.textContent = e.message || 'Please try again later'
    }
})
// Sorting by ascending and descending
let isToggle = false
sortingByAmount.addEventListener('click', () => {
    try {
        if (!products) throw new Error('Please try again later')
        if (!isToggle) {
            products.sort((a, b) => b.price - a.price)
            sortingByAmount.textContent = 'Sorted by highest amount'
            isToggle = true
        } else {
            products.sort((a, b) => a.price - b.price)
            sortingByAmount.textContent = 'Sorted by lowest amount'
            isToggle = false
        }
        displayProducts(products)
    } catch (e) {
        container.textContent = e.message || 'We are resolving this issue'
    }
})
// Add to cart
function addToCart(product) {
    try {
        checkoutItems.push(product)
        localStorage.setItem('checkout', JSON.stringify(checkoutItems))
        document.querySelector('[counter]').textContent = checkoutItems.length || 0
    } catch (e) {
        alert("Unable to add to cart")
    }
}
window.onload = () => {
    document.querySelector('[counter]').textContent = checkoutItems.length || 0
}










































// Products
// let container = document.querySelector('[ourBooks]')
// let searchBook = document.querySelector('[findBook]')
// let sortByPrice = document.querySelector('[sort]')
// let books = JSON.parse(
//     localStorage.getItem('products')
// )
// Display all books in my store
// function displayBooks(args) {
// container.innerHTML = ""
// try{
//     args.forEach(book => {
// container.innerHTML += `
//   <div class="card">
//   <img src="${book.img_url}" class="card-img-top" alt="${book.bookName}" loading='lazy'>
//   <div class="card-body">
//     <h5 class="card-title">${book.bookName}</h5>
//     <p class="card-text">${book.description}</p>
//     <p class="card-text">
//      <span class="shadow text-success fw-bold">Price</span>
//      R${book.price}
//      </p>
//     <button type='button' class="btn btn-success" onclick='addToCart(${JSON.stringify(book)})'><i class="bi bi-cart4"></i></button>
//   </div>
// </div>`
// })
    
// }
// catch (e){
// container.textContent = "Please try again later"
// }
// }
// displayBooks(books)

// find book
// searchBook.addEventListener('keyup', () => {
//     try {
//         if (searchBook.value.length < 1) {
//             displayBooks(books)
//         }
//         let filteredBooks = books.filter(book => book.bookName.toLowerCase().includes(searchBook.value))
//         displayBooks(filteredBooks)
//         if (!filteredBooks.length) throw new Error(`${searchBook.value} book not found.`)
//     } catch (e) {
//         container.textContent = e.message || 'Please try again later'
//     }
// })

// Sort by Price 

// let isToggle = false
// sortByPrice.addEventListener('click', () => {
//     try {
//         if (!books) throw new Error('Please try again later')
//         if (!isToggle) {
//             books.sort((a, b) => b.price - a.price)
//             sortByPrice.textContent = 'Sorted by highest amount'
//             isToggle = true
//         } else {
//             books.sort((a, b) => a.price - b.price)
//             sortByPrice.textContent = 'Sorted by lowest amount'
//             isToggle = false
//         }
//         displayBooks(books)
//     } catch (e) {
//         container.textContent = e.message || 'We are resolving this issue'
//     }
// })
// Add to cart
// function addToCart(product) {
//     try {
//         checkoutItems.push(product)
//         localStorage.setItem('checkout', JSON.stringify(checkoutItems))
//         document.querySelector('[counter]').textContent = checkoutItems.length || 0
//     } catch (e) {
//         alert("Unable to add to cart")
//     }
// }
// window.onload = () => {
//     document.querySelector('[counter]').textContent = checkoutItems.length || 0
// }




// Counter
// window.onload = () => {
//     document.querySelector('[counter]').textContent = JSON.parse(localStorage.getItem('checkout'))
//         ? JSON.parse(localStorage.getItem('checkout')).length
//         : 0
// }