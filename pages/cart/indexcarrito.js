const deleteCartButton = document.getElementById('deleteCartButton');
const container = document.getElementById("productCartContainer");

async function parseDataToProducts() {
    try {
        const response = await fetch('http://localhost:5050/products');
        if (!response.ok) throw new Error('Error al obtener los productos');

        const jsonResponse = await response.json();

        const products = jsonResponse.map(
            product => new Product(product.id, product.title, product.price, product.description, product.image)
        );

        renderAllProducts(products);
    } catch (error) {
        console.error('Hubo un error:', error);
        container.innerText = "Error al cargar los productos.";
    }
}

function renderAllProducts(fetchProductList) {
    const loggedUserCart = localStorage.getItem('logedUserCart');

    if (loggedUserCart) {
        const JSONloggedUserCart = JSON.parse(loggedUserCart);

        const dataCart = fetchProductList.filter(product =>
            JSONloggedUserCart.includes(product.id)
        );

        if (dataCart.length > 0) {
            dataCart.forEach(product => {
                const productHTML = product.htmlCard();
                container.appendChild(productHTML);
            });
        } else {
            container.innerText = "El carrito está vacío";
        }
    } else {
        container.innerText = "El carrito está vacío";
    }
}

function deleteCart() {
    localStorage.removeItem('logedUserCart');
    window.location.reload();
}

deleteCartButton.addEventListener('click', () => {
    deleteCart();
});

parseDataToProducts();