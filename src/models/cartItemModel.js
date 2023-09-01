
const mongoose = require('mongoose');
const validator = require('mongoose-validator');
const { Schema, model } = mongoose;

const cartItemSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        validate: [
            validator({
                validator: 'isInt',
                arguments: { min: 1 },
                message: 'Quantity must be a positive integer'
            })
        ]
    }
}, { timestamps: true, versionKey: false });

const CartItems = model('CartItems', cartItemSchema);

module.exports = CartItems;
