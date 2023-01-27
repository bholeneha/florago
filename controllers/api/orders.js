const Order = require('../../models/order');
// const Product = require('../../models/product');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');

module.exports = {
    cart,
    addToCart,
    setProductQtyInCart,
    checkout,
};

// A cart is the unpaid order for a user
async function cart(req, res) {
    if (req.user) {
        const cart = await Order.getCart(req.user._id);
        res.status(200).json(cart);
    } else {
        const cart = new Order()
        cart.save()
        res.status(200).json(cart);
    }
}

// Add an item to the cart
async function addToCart(req, res) {
    if (req.user) {
        const cart = await Order.getCart(req.user._id);
        await cart.addProductToCart(req.params.id);
        res.status(200).json(cart);
    } if (req.params.cardId) {
        const cart = await Order.findById(req.params.cartId)
        await cart.addProductToCart(req.params.productID)
        res.status(200).json(cart)
    } else {
        const cart = new Order()
        await cart.addProductToCart(req.params.id)
        res.status(200).json(cart)
    }
}

// Updates an item's qty in the cart
async function setProductQtyInCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.setProductQty(req.body.productId, req.body.newQty);
    res.json(cart);
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save();
    res.json(cart);
}
