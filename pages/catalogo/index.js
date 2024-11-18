// console.log("Hola")
// console.log(data)

// let cart = []

// function guardarDatos() {
//     localStorage.setItem("nombre", "Juan");
//     localStorage.setItem("edad", "30");
//     document.getElementById("mensaje").innerText = "Datos guardados en localStorage.";
// }

async function parseDataToProducts() {
    // console.log("parseDataToProduct")
    const response = await fetch('http://localhost:5050/products')
    const jsonResponse = await response.json()
    // console.log("jsonResponse: ", jsonResponse)

    const products = []

    for (let i = 0; i < jsonResponse.length; i++) {
        const productList = jsonResponse[i]
        // console.log(i)
        // console.log(data[i])
        // let map = data[i]
        // console.log(map)
        // console.log(productList)
        const product = new Product(productList.id, productList.title, productList.price, productList.description, productList.image)
        products.push(product)
    }

    renderAllProducts(products)
}

async function renderAllProducts(fetchProductList) {
    // console.log("renderAllProducts")
    const container = document.getElementById("product-grid")

    for (let i = 0; i < fetchProductList.length; i++) {
        const card = document.createElement('section')
        const btn = document.createElement('button')
        btn.textContent = 'Add to cart'

        card.addEventListener('click', (e) => {
            e.stopPropagation()
            const id = fetchProductList[i].id;
            window.location = `../info/html info.html?id=${id}`;
        });



        btn.addEventListener('click', (e) => {
            e.stopPropagation()
            const loggedUserCart = localStorage.getItem('logedUserCart')

            if (loggedUserCart) {
                const JSONLoggedUserCart = JSON.parse(loggedUserCart)
                const newProduct = new Product(data[i].id, data[i].Title, data[i].Price, data[i].description, data[i].Photo)
                JSONLoggedUserCart.push(newProduct.id)
                localStorage.setItem('logedUserCart', JSON.stringify(JSONLoggedUserCart))
            } else {
                const newLoggedUserCart = []
                const newProduct = new Product(data[i].id, data[i].Title, data[i].Price, data[i].description, data[i].Photo)
                newLoggedUserCart.push(newProduct.id)
                localStorage.setItem('logedUserCart', JSON.stringify(newLoggedUserCart))
            }
        })

        const product = fetchProductList[i]
        card.innerHTML += product.htmlCard()
        card.appendChild(btn)
        container.appendChild(card)
    }
}

parseDataToProducts()
