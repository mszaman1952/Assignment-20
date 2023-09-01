const mongoose = require('mongoose');
const validator = require('mongoose-validator');
const {Schema, model} = mongoose;

const orderSchema = new Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
    items : [
       {
        product : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Products",
            required : true
        }
       },
       {
        quantity : {
            type : Number,
            required : true,
            min : 1
        }
       }
    ],
    totalAmount : {
        type : Number,
        required : true,
        validate: validator({
            validator: 'isFloat',
            arguments: [{ min: 0 }], 
            message: 'Price must be a positive value'
        })
    },
    shippingAddress : {
        type : String,
        required : true,
    },
    status : {
        type : String,
        required : true,
        default : "Pending"
    }
},{timestamps : true, versionKey : false})

const Order = model("Orders", orderSchema);

module.exports = Order;

