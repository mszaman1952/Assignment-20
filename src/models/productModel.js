const mongoose = require('mongoose');
const validator = require('mongoose-validator')
const {Schema, model} = mongoose;

const productSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
    },
    price : {
        type : Number,
        requierd : true,
        validate: validator({
            validator: 'isFloat',
            arguments: [{ min: 0 }], 
            message: 'Price must be a positive value'
        })
    },
    stock : {
        type : Number,
        required : true,
        validate : validator({
            validator: 'isInt',
            arguments: [{ min: 0 }],
            message: 'Stock must be a non-negative integer'
        })
    },
    category : {
        type : String,
        required : true
    },
    imageUrl : {
        type : String,
    }

},{ timestamps : true, versionKey : false})

const Products = model("Products", productSchema);

module.exports = Products;
