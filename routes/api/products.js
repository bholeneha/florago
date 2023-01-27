const express = require('express');
const router = express.Router();
const productsCtrl = require('../../controllers/api/products');

// GET /api/items
router.get('/', productsCtrl.index);

// GET /api/items/:id
router.get('/:id', productsCtrl.show);

module.exports = router;
