//  Display the current year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()

// Checkout-Products (Books) 
let checkoutItems = JSON.parse(localStorage.getItem('checkout')) ?
    JSON.parse(localStorage.getItem('checkout')) :
    []

// Retrieve cart items from localStorage
let cartItems = JSON.parse(localStorage.getItem('checkoutItems')) || [];

// Checkout Table
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
  }
       
window.onload = () => {
  document.querySelector('[counter]').textContent = checkoutItems.length || 0
}

// Display the cart items in the table
function displayCartItems() {
  let container = document.querySelector('[data-container]')
  container.innerHTML = ''

  let totalAmount = 0

  checkoutItems.forEach((product) => {

    container.innerHTML += `
    <tr>
      <td>${product.bookTitle}</td>
      <td>${product.genre}</td>
      <td><input type="number" class="itemQuantity" min="1"></td>
      <td>R${product.price.toFixed(2)}</td>
      <td>R${(product.price * product.quantity).toFixed(2)}</td>
      </tr>
    `

    totalAmount += product.price * product.quantity;
  
  })

  document.getElementById('total-amount').textContent = `R${totalAmount.toFixed(2)}`
}
displayCartItems()

let quantityInputs = document.querySelectorAll('.itemQuantity');
quantityInputs.forEach(input => {
  
})
// Clear the cart
function clearCart() {
  // Clear the cart items array
  cartItems = [];

  // Remove cart items from localStorage
  localStorage.removeItem('checkoutItems');

  // Update the displayed cart items
  displayCartItems();
}

// Show a thank you alert
function thankYouAlert() {
  alert('Thank you for your purchase! (≧∇≦)ﾉ')
}

// Display the cart items on page load
displayCartItems()
