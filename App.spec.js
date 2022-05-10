import Product from './src/ddd-sample-domain/Product';

describe('cart should add product', () => {
    const cart = new Cart();
    const product = new Product("some test product");

    cart.addProduct(product);

    expect(cart.getProducts().lenght).toBe(1);


});