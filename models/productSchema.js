const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
    name: { type: String, required: true },
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    size: { type: Number, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, default: 0 }
}, {
    timestamps: true
});

module.exports = itemSchema;
