const { Author } = require('../models/author.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Author.create({
        name
    })
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err));
}
module.exports.getAuthor = (request, response) => {
    Author.findById(request.params.id)
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err))
}
module.exports.getAllAuthors = (request, response) => {
    Author.find({})
        .then(allAuthor => response.json(allAuthor))
        .catch(err => response.status(400).json(err));
}
module.exports.updateAuthor = (request, response) => {
    Author.findByIdAndUpdate(request.params.id, request.body, {new:true, runValidators:true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.status(400).json(err))
}
module.exports.deleteAuthor = (request, response) => {
    Author.findByIdAndDelete(request.params.id)
        .then(result => response.json({result: result}))
        .catch(err => response.status(400).json(err))
}




