console.log("Hola")
console.log(data)

let products = []
let cart = []

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
            console.log('products', products);
            let product = new Product(data[i].Title, data[i].Price, data[i].Photo)
            cart.push(product)
            console.log('carrito', cart);
            
        })
        let product = products[i]
        card.innerHTML += product.htmlCard()
        card.appendChild(btn)
        container.appendChild(card)
    }
}

parseDataToProducts()
renderAllProducts()