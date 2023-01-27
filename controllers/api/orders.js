const Order = require('../../models/order');
// const Product = require('../../models/product');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');

module.exports = {
    cart,
    addToCart,
    setProductQtyInCart,
    checkout,
};

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

async function addToCart(req, res) {
    console.log(req.params)

    if (req.user) {
        const cart = await Order.getCart(req.user?._id, req.params.cartId);
        await cart.addProductToCart(req.params.productId);
        res.status(200).json(cart);
    } if (req.params.cartId) {
        const cart = await Order.findById(req.params.cartId)
        await cart.addProductToCart(req.params.productId)
        res.status(200).json(cart)
    } else {
        const cart = new Order()
        await cart.addProductToCart(req.params.productId)
        res.status(200).json(cart)
    }
}

async function setProductQtyInCart(req, res) {
    console.log(req.body)
    const cart = await Order.findById(req.params.cartId);
    await cart.setProductQty(req.body.productId, req.body.newQty);
    res.json(cart);
}

async function checkout(req, res) {
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save();
    res.json(cart);
}
