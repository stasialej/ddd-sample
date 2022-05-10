import Product from "./product.js";

export default class Cart {
    constructor(products){
        this.products = products
    }

    addProduct = (product) => {
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }
}