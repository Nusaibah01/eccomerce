// Products
let products= JSON.parse(localStorage.getItem('products')) ? JSON.parse
(localStorage.getItem('products')) : localStorage.setItem(
    'products',
JSON.stringify(
    [
{
    id: 1,
    bookName:"Jane Eyre",
    genre: "Historical",
    description: "Jane Eyre: Deluxe Hardbound Edition by Charlotte Bront: follows the story of Jane, a seemingly plain and simple girl as she battles through life's struggles.",
    amount: 439.00 ,
    img_url: "https://nusaibah01.github.io/e-images/images/Jane Eyre_Deluxe Hardbound Edition.jpg"
},
{
    id: 2,
    bookName:"Caraval",
    genre: "High Fantasy",
    description: "The sweeping tale of two sisters who escape their ruthless father when they enter the dangerous intrigue of a legendary game ",
    amount: 443.00,
    img_url: "https://nusaibah01.github.io/e-images/images/"
},
{
    id: 3,
    bookName:"As Long As the Lemon Trees Grow",
    genre: "Fiction",
    description: "Set in Syria during the country's civil war, 'As Long as the Lemon Trees Grow' follows 18-year-old Salama Kassab as she navigates life under a cruel dictatorship. It's a story of unwavering love for one's country and the resilience that sustains people even in the darkest of times",
    amount: 350.00,
    img_url: "https://nusaibah01.github.io/e-images/images/As Long As the Lemon Trees Grow.jpg"
},
{
    id: 4,
    bookName:"Circe",
    genre: "Mythology",
    description: "The chronicle of an outsider woman who uses her power and wits to protect herself and the people she loves, ultimately looking within to define herself.",
    amount: 400.00,
    img_url: "https://nusaibah01.github.io/e-images/images/Circe - Madeline Miller.jpg"
},
{
    id: 5,
    bookName:"Prices for The Butterflys burden",
    genre: "Poetry",
    description: "A collection of poems which provide continual contrasts, balancing old literary traditions with new, highlighting lyrical, loving reflections alongside a bitter longing for the Palestine that was lost when Israel was created",
    amount: 500.00,
    img_url: "https://nusaibah01.github.io/e-images/images/Prices for The Butterfly's Burden by Mahmoud Darwish.jpg"
},

]
   )
)























// Display the current year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()