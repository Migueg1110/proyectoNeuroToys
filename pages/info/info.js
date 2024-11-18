const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const descriptionElement = document.getElementById('pDesc')
const productImage = document.getElementById('productImage')
const productPrice = document.getElementById('productPrice')
const nombreProducto = document.getElementById('nombreProducto')
const colorSelector = document.getElementById('colorSelector')
const buynowButton = document.getElementById('buynowButton')

async function getInfoProductData(id) {
    const response = await fetch(`http://localhost:5050/products/${id}`)
    const jsonResponse = await response.json()
    return jsonResponse
}

async function renderInfoProductDetail() {
    const productDetailData = await getInfoProductData(id)

    if (id) {
        nombreProducto.innerText = productDetailData.title
        descriptionElement.innerText = productDetailData.description
        productImage.src = productDetailData.image
        productPrice.innerText = `$ ${productDetailData.price}`

        colorSelector.innerHTML = ''
        productDetailData.color.forEach((color) => {
            const colorOption = document.createElement('option')
            colorOption.innerText = color
            colorSelector.appendChild(colorOption)
        });

        buynowButton.addEventListener('click', () => {
            goAndAddToCart(productDetailData.id)
        })
    } else {
        console.log("No se encontró el parámetro 'id' en la URL.");
    }

}

function goAndAddToCart(id) {
    const loggedUserCart = localStorage.getItem('logedUserCart')

    if (loggedUserCart) {
        const JSONLoggedUserCart = JSON.parse(loggedUserCart)
        JSONLoggedUserCart.push(id)
        localStorage.setItem('logedUserCart', JSON.stringify(JSONLoggedUserCart))
    } else {
        const newLoggedUserCart = []
        newLoggedUserCart.push(id)
        localStorage.setItem('logedUserCart', JSON.stringify(newLoggedUserCart))
    }

    window.location = '../cart/html you cart.html'

}

renderInfoProductDetail()