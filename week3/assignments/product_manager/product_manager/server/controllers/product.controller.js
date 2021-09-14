const { Product } = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}
module.exports.getProduct = (request, response) => {
    Product.findById(request.params.id)
        .then(product => response.json(product))
        .catch(err => response.json(err))
}
module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(allProducts => response.json(allProducts))
        .catch(err => response.json(err));
}
module.exports.updateProduct = (request, response) => {
    Product.findByIdAndUpdate(request.params.id, request.body, {new:true, runValidators:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}
module.exports.deleteProduct = (request, response) => {
    Product.findByIdAndDelete(request.params.id)
        .then(result => response.json({result: result}))
        .catch(err => response.json(err))
}




