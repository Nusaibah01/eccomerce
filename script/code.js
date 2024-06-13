// Display the current year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()
// Products
let products = JSON.parse(localStorage.getItem('products')) ? JSON.parse
(localStorage.getItem('products')) : localStorage.setItem(
    'products',
JSON.stringify(
    [
{
    id: 1,
    bookTitle:"Jane Eyre",
    genre: "Historical",
    description: "Jane Eyre: Deluxe Hardbound Edition by Charlotte Bront:Follows the story of Jane, a seemingly plain and simple girl as she battles through life's struggles.",
    price: 439.00 ,
    img_url: "https://nusaibah01.github.io/all-images/images/Jane.jpg"
},
{
    id: 2,
    bookTitle:"Caraval",
    genre: "High Fantasy",
    description: "The sweeping tale of two sisters who escape their ruthless father when they enter the dangerous intrigue of a legendary game ",
    price: 443.00,
    img_url: "https://nusaibah01.github.io/all-images/Caravel.jpg"
},
{
    id: 3,
    bookTitle:"As Long As the Lemon Trees Grow",
    genre: "Fiction",
    description: "Set in Syria during the country's civil war, 'As Long as the Lemon Trees Grow' follows 18-year-old Salama Kassab as she navigates life under a cruel dictatorship. It's a story of unwavering love for one's country and the resilience that sustains people even in the darkest of times",
    price: 350.00,
    img_url: "https://nusaibah01.github.io/all-images/Lemon.jpg"
},
{
    id: 4,
    bookTitle:"Circe",
    genre: "Mythology",
    description: "The chronicle of an outsider woman who uses her power and wits to protect herself and the people she loves, ultimately looking within to define herself.",
    price: 400.00,
    img_url: "https://nusaibah01.github.io/all-images/images/Circe.jpg"
},
{
    id: 5,
    bookTitle:"Prices for The Butterfly's burden",
    genre: "Poetry",
    description: "A collection of poems which provide continual contrasts, balancing old literary traditions with new, highlighting lyrical, loving reflections alongside a bitter longing for the Palestine that was lost when Israel was created",
    price: 500.00,
    img_url: "https://nusaibah01.github.io/all-images/Burden.jpg"
},
{
    id: 6,
    bookTitle:"Six of Crows",
    genre: "Young Adult",
    description:"Follows the adventures of six teenage criminals hired to undertake a dangerous heist, while searching for love and redemption along the way",
    price: 145.00 ,
    img_url: "https://nusaibah01.github.io/all-images/Crows.jpg"
},
{
    id: 7,
    bookTitle:"A tempest of Tea(Blood and Tea, #1)",
    genre: "Fantasy",
    description: "On the streets of White Roaring, Arthie Casimir is a criminal mastermind and collector of secrets. Her prestigious tearoom transforms into an illegal bloodhouse by dark, catering to the vampires feared by society. But when her establishment is threatened, Arthie is forced to strike an unlikely deal with an alluring adversary to save it—and she can’t do the job alone.",
    price: 286.00,
    img_url: "https://nusaibah01.github.io/all-images/images/A Tempest of Tea (Blood and Tea, #1) .jpg"
},
{
    id: 8,
    bookTitle:"The Metamorphosis",
    genre: "Absurdist Fiction",
    description:"Gregor Samsa, a traveling salesman, wakes up in his bed to find himself transformed into a large insect.",
    price: 145.00,
    img_url: "https://nusaibah01.github.io/all-images/images/The Metamorphosis.jpg"
},
{
    id: 9,
    bookTitle:"Life of Pi",
    genre: "Psychological Fiction",
    description:"The fantasy novel revolves around a teenage Indian boy, Pi, who becomes lost at sea after a shipwreck. Pi finds himself struggling for survival against the torrential ocean with his only companion, a Bengal tiger.",
    price: 165.00,
    img_url: "https://nusaibah01.github.io/all-images/images/Life Of Pi.jpg"
},
{
    id: 10,
    bookTitle:"The Book Thief",
    genre: "Historical Fiction",
    description:"The Book Thief is a story narrated by a compassionate Death who tells us about Liesel, a girl growing up in Germany during World War II.",
    price: 500.00,
    img_url: "https://nusaibah01.github.io/all-images/images/The book thief.jpg"
},



]
   )
)






















