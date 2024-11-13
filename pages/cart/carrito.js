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
            <p>${this.title}</p>
            <p class="cartDesc">${this.description}</p>
            <p class="price">${this.price}</p>
        `;
        return div; // Ahora devuelve un nodo HTML
    }
}
