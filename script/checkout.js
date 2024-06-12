//  Display the current year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()


function checkoutPage(products) {
    let checkoutTable = document.getElementById('con');
    checkoutTable.innerHTML = "";
  
    try {
      let tableBody = document.createElement('tbody');
      products.forEach(product => {
        let row = document.createElement('tr');
  
        let titleCell = document.createElement('td');
        let titleDiv = document.createElement('div');
        titleDiv.classList.add('container', 'title');
        titleDiv.textContent = product.title;
        titleCell.appendChild(titleDiv);
        row.appendChild(titleCell);
  
        let genreCell = document.createElement('td');
        let genreDiv = document.createElement('div');
        genreDiv.classList.add('container', 'genre');
        genreDiv.textContent = product.genre;
        genreCell.appendChild(genreDiv);
        row.appendChild(genreCell);
  
        let quantityCell = document.createElement('td');
        let quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.min = '1';
        quantityCell.appendChild(quantityInput);
        row.appendChild(quantityCell);
  
        let priceCell = document.createElement('td');
        priceCell.textContent = 'R' + product.price.toFixed(2);
        row.appendChild(priceCell);
  
        let totalCell = document.createElement('td');
        let totalInput = document.createElement('div');
        totalInput.type = 'number';
        totalCell.appendChild(totalInput);
        row.appendChild(totalCell);
  
        let amountTotalCell = document.createElement('td');
        amountTotalCell.id = 'amountTotal';
        row.appendChild(amountTotalCell);
  
        tableBody.appendChild(row);
      });
  
      let totalRow = document.createElement('tr');
      let totalLabelCell = document.createElement('td');
      totalLabelCell.setAttribute('colspan', '4');
      totalLabelCell.textContent = 'Total Amount Due';
      totalRow.appendChild(totalLabelCell);
  
      let totalPriceCell = document.createElement('td');
      totalPriceCell.id = 'totalPrice';
      totalRow.appendChild(totalPriceCell);
  
      tableBody.appendChild(totalRow);
      checkoutTable.appendChild(tableBody);
    } catch (e) {
      checkoutTable.textContent = "Please try again later. If problem persists contact our site administrator.";
    }
  }
  
  checkoutPage(products);

// Calculating the total amount due 
function amountDue() {
    let totalPrice = 0;
    let checkoutItems = JSON.parse(localStorage.getItem('checkout')) || [];
  
    checkoutItems.forEach(product => {
      let quantity = document.querySelector(`input[data-product-id="${product.id}"]`).value;
      let itemTotal = product.price * quantity;
      totalPrice += itemTotal;
    });
  
    
    let totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = `R${totalPrice.toFixed(2)}`;
  }

// If the user increases the quantity of an item
let quantityInputs = document.querySelectorAll('input[type="number"]');

quantityInputs.forEach(input => {
  input.addEventListener('input', () => {
    calculateTotal(products);
  });
});

// Display Message 
function purchaseMessage(){
    let message = document.querySelector('[userMessage]')
    message.textContent = "Thank you for your purchase!(≧∀≦)ゞ"

}

