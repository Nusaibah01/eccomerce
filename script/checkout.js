//  Display the current year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()


// Add to Cart

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
        </tr>
        `
    })
} catch(e) {

}


// import { products} from './code.js';
// function calculateTotal(){
//     const product = products.find(b => b.name === bookTitle)
//     let productQuanity = document.querySelector(']')
//     const totalCost = product.price * product.

// }

// 

// Retrieve cart items from localStorage
let cartItems = JSON.parse(localStorage.getItem('checkoutItems')) || [];

// Display the cart items in the table
function displayCartItems() {
  let cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';

  let totalAmount = 0;

  cartItems.forEach((product, index) => {
    let row = document.createElement('tr');
    row.innerHTML = `
      <td>${product.bookTitle}</td>
      <td>${product.genre}</td>
      <td>${product.quantity}</td>
      <td>R${product.price.toFixed(2)}</td>
      <td>R${(product.price * product.quantity).toFixed(2)}</td>
    `;
    cartItemsContainer.appendChild(row);

    totalAmount += product.price * product.quantity;
  });

  document.getElementById('total-amount').textContent = `R${totalAmount.toFixed(2)}`;
}

// Clear the cart
function clearCart() {
  cartItems = [];
  localStorage.removeItem('cartItems');
  displayCartItems();
}

// Show a thank you alert
function showThankYouAlert() {
  alert('Thank you for your purchase! (≧∇≦)ﾉ');
}

// Display the cart items on page load
displayCartItems();
