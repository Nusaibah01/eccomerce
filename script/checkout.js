//  Checkout table
// Calculate Total 
function calculateTotal(){
    let total = 0;
    products.forEach(product => {
        total += product.price
})
document.querySelector('[total]')
}return total.toFixed(2)


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





// <div class="container-fluid">
//  <caption>Cart</caption>
// <table>

//  <tr>
//    <thead>
//    <th>Book Title</th>
//    <th>Genre</th>
//    <th>Quantity</th>
//    <th>Price</th>
//    <th>Total</th>
//  </thead>
// </tr>
// <tbody>
// <td></td>
// <td></td>
// <td></td>
// <td></td>
// <td></td>
// </tbody>
// </table>
// </div>






















// Display the current year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()