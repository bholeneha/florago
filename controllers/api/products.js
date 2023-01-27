const Product = require('../../models/product');

module.exports = {
    index,
    show
};

async function index(req, res) {
    const products = await Product.find({}).sort('name').populate('categories').exec();
    res.json(products);
}

async function show(req, res) {
    const product = await Product.findById(req.params.id);
    res.json(product);
}
