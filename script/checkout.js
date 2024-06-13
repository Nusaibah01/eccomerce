//  Display the current year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()

// Add to Cart

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


function checkoutTable(){
    let container = document.querySelector('[data-container]')
    checkoutItems.forEach(product => {
        container.innerHTML += `
        <tr>
        <td>${product.img_url}</td>
        <td>${product.bookTitle}</td>
        <td>${product.genre}</td>
        <td>${product.description}</td>
        <td>${product.quantity}</td>
        <td id="amount">R ${product.price}</td>
        </tr>`
    });
}



