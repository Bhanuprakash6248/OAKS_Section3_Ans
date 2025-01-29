const mongoose = require('mongoose');

//  Product schema
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,  // Makes the field required
    },
    price: {
        type: Number,
        required: true,  
        min: 0,  // Ensures price is a non-negative number
    },
    category: {
        type: String,
        required: true,  
    },
    inStock: {
        type: Boolean,
        required: true, 
    }
});

// Created a model 
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
