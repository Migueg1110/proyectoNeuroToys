const deleteCartButton = document.getElementById('deleteCartButton')
const container = document.getElementById("productCartContainer");


function renderAllProducts() {

    // Obtener el carrito del usuario logueado
    const loggedUserCart = localStorage.getItem('logedUserCart');
    console.log(loggedUserCart)
    if (loggedUserCart) {
        const JSONloggedUserCart = JSON.parse(loggedUserCart);

        
        console.log(JSONloggedUserCart);
        JSONloggedUserCart.forEach((cartProduct) => {
            console.log(cartProduct);
            const product = new Product(cartProduct.id, cartProduct.title, cartProduct.price, cartProduct.description, cartProduct.image);

            // Ahora productHTML es un nodo, no una cadena
            const productHTML = product.htmlCard();
            console.log(productHTML);

            container.appendChild(productHTML); // Sin necesidad de crear un nodo adicional
        });
    } else {
        container.innerText = "El carrito esta vacio"
    }
}

function deleteCart() {
    localStorage.removeItem('logedUserCart')
    window.location.reload();

}

deleteCartButton.addEventListener('click', () => {
    deleteCart()
})

renderAllProducts()