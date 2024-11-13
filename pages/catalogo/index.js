console.log("Hola")
console.log(data)

let products = []
let cart = []

function guardarDatos() {
    localStorage.setItem("nombre", "Juan");
    localStorage.setItem("edad", "30");
    document.getElementById("mensaje").innerText = "Datos guardados en localStorage.";
}

function parseDataToProducts() {
    console.log("parseDataToProduct")
    for (let i = 0; i < data.length; i++) {
        console.log(i)
        console.log(data[i])
        let map = data[i]
        console.log(map)
        let product = new Product(data[i].Title, data[i].Title, data[i].Price, data[i].description, data[i].Photo)
        products.push(product)
    }
}

function renderAllProducts() {
    console.log("renderAllProducts")
    let container = document.getElementById("product-grid")
    for (let i = 0; i < products.length; i++) {
        const card = document.createElement('section')
        const btn = document.createElement('button')
        btn.textContent = 'Add to cart'
        btn.addEventListener('click', () => {
            const loggedUserCart = localStorage.getItem('logedUserCart')
            console.log(loggedUserCart);

            if (loggedUserCart) {
                const JSONLoggedUserCart = JSON.parse(loggedUserCart)
                // constructor(id, title, price, description, image)
                const newProduct = new Product(data[i].id, data[i].Title, data[i].Price, data[i].description, data[i].Photo)
                JSONLoggedUserCart.push(newProduct)
                localStorage.setItem('logedUserCart', JSON.stringify(JSONLoggedUserCart))
            } else {
                const newLoggedUserCart = []
                const newProduct = new Product(data[i].id, data[i].Title, data[i].Price, data[i].description, data[i].Photo)
                newLoggedUserCart.push(newProduct)
                localStorage.setItem('logedUserCart', JSON.stringify(newLoggedUserCart))
            }
        })
        let product = products[i]
        card.innerHTML += product.htmlCard()
        card.appendChild(btn)
        container.appendChild(card)
    }
}

parseDataToProducts()
renderAllProducts()