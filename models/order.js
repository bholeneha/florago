const { Schema } = require("mongoose");
const mongoose = require('mongoose');
const productSchema = require('./productSchema')

const lineItemSchema = new Schema({
    qty: { type: Number, default: 1 },
    product: productSchema
}, {
    timestamps: true,
    toJSON: { virtuals: true }
}
)

lineItemSchema.virtual('extPrice').get(function () {
    return this.qty * this.product.price
})

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    lineItems: [lineItemSchema],
    isPaid: { type: Boolean, default: false },

},
    {
        timestamps: true,
        toJSON: { virtual: true },
    });

orderSchema.virtual('orderTotal').get(function () {
    return this.lineItems.reduce((total, item) => total + item.extPrice, 0)
})

orderSchema.virtual('totalQty').get(function () {
    return this.lineItems.reduce((total, item) => total + item.qty, 0);
})

orderSchema.virtual('orderId').get(function () {
    return this.id.slice(-6).toUpperCase()
})

orderSchema.statics.getCart = function (userId) {
    return this.findOneAndUpdate(
        { user: userId, isPaid: false },
        { user: userId },
        { upsert: true, new: true }
    )
}

orderSchema.methods.addProductToCart = async function (productId) {
    const cart = this;
    const lineItem = cart.lineItems.find(lineItem => lineItem.product._id.equals(productId));
    if (lineItem) {
        lineItem.qty += 1;
    } else {
        const product = await mongoose.model('Product').findById(productId);
        cart.lineItems.push({ product });
    }
    return cart.save();
}

orderSchema.methods.setItemQty = function (itemId, newQty) {
    const cart = this;
    const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
    if (lineItem && newQty <= 0) {
        lineItem.remove();
    } else if (lineItem) {
        lineItem.qty = newQty;
    }
    return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);