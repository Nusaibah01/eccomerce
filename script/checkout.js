//  Checkout table 
let bookTitle = 

function updateQuantity(button, direction) {
    const quantityInput = button.closest('.quantity-control').querySelector('.quantity');
    let quantity = parseInt(quantityInput.value);
    quantity += direction;
    if (quantity < 1) {
      quantity = 1;
    }
    quantityInput.value = quantity;
    calculateTotal();
  }
  
  function calculateTotal() {
    let totalAmount = 0;
    const quantities = document.querySelectorAll('.quantity');
    const productTotals = document.querySelectorAll('.product-total');
  
    quantities.forEach((quantity, index) => {
      const price = parseFloat(productTotals[index].textContent.replace('R', ''));
      const qty = parseInt(quantity.value);
      const total = price * qty;
      productTotals[index].textContent = `R${total.toFixed(2)}`;
      totalAmount += total;
    });
  
    const totalAmountElement = document.querySelector('.total-amount');
    totalAmountElement.textContent = `R${totalAmount.toFixed(2)}`;
  }






































// let container = document.querySelector('[checkout]')
// function checkoutPage (args){
//    container.innerHTML = ""
//         try {
//             args.forEach(product => {
//                 container.innerHTML += `
//                 <div class="container-fluid">
//  <caption>Cart</caption>
// <>

//  <tr>
//    <thead>
//    <th>Book Title</th>
//    <th>Img</th>
//    <th>Genre</th>
//    <th>Quantity</th>
//    <th>Price</th>
//    <th>Total</th>
//  </thead>
// </tr>
// <>
// <td>${product.bookTitle}</td>
// <td>"${product.img_url}</td>
// <td>${product.genre}</td>
// <td>R${product.price}</td>
// <td></td
//             })
    
//         } catch (e) {
//             container.textContent = "Please try again later"
//         }
//     }





<div class="container-fluid">
 <caption>Cart</caption>
<table>

 <tr>
   <thead>
   <th>Book Title</th>
   <th>Genre</th>
   <th>Quantity</th>
   <th>Price</th>
   <th>Total</th>
 </thead>
</tr>
<tbody>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tbody>
</table>
</div>






















// Display the current year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()