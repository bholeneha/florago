const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/cart', ordersCtrl.cart);
router.post('/cart/:cartId/products/:productId', ordersCtrl.addToCart);
router.post('/cart/checkout', ensureLoggedIn, ordersCtrl.checkout);
router.put('/cart/:cartId/qty', ordersCtrl.setProductQtyInCart);

module.exports = router;
