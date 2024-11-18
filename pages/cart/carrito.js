class Product {
    constructor(id, title, price, description, image) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
    }

    htmlCard() {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <img alt="${this.title}"
                height="150"
                src="${this.image}"
                width="150" />
            <div class="productTextContainer">
                <h3>${this.title}</h3>
                <p class="cartDesc">${this.description}</p>
                <p class="price">Price: ${this.price}</p>
            </div>
        `;
        return div; // Ahora devuelve un nodo HTML
    }
}
