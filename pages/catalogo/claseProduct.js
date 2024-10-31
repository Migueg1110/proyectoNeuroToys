class Product {
    constructor(id, title, price, description, image) {
        this.id = id
        this.title = title
        this.price = price
        this.description = description
        this.image = image
    }
    htmlCard() {
        return `
            <div class="product">
                    <img alt="${this.title}"
                        height="150"
                        src="${this.image}"
                        width="150" />
                    <p>
                        ${this.title}
                    </p>
                    <p>
                        ${this.description}
                    </p>
                    <p class="price">
                        ${this.price}
                    </p>
                </div>
        `
    }
}
