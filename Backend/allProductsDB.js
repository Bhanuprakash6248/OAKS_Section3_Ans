const Product = require('./models/productModel');  

Product.find({ 
    category: 'Electronics',  // Filter for the 'Electronics' category
    price: { $gt: 500 }       // Filter for price greater than $500
})
.sort({ price: -1 })          // Sort in descending order of price
.exec((err, products) => {
    if (err) {
        console.error(err);
    } else {
        console.log(products);  
    }
});
