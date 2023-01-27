const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/orders/cart
router.get('/cart', ordersCtrl.cart);
// POST /api/orders/cart/items/:id
router.post('/cart/:cartId/products/:productId', ordersCtrl.addToCart);
// POST /api/orders/cart/checkout
router.post('/cart/checkout', ensureLoggedIn, ordersCtrl.checkout);
// POST /api/orders/cart/qty
router.put('/cart/:cartId/qty', ordersCtrl.setProductQtyInCart);

module.exports = router;
