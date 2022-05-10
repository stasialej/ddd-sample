
describe('shopping cart should add product to cart', () => {
    const cart = new Cart();
    const product = new Product("some test product");

    cart.addProduct(product);

    expect(cart.getProducts().lenght).toBe(1);


});