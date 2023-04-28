const bookModel = require("../models/bookModel")

const createBook = async function(req, res) {
    let data = req.body;
    let showData = await bookModel.create(data);
    res.send({ book: showData });
}
const getBookInfo = async function(req, res) {
    let allBook = await bookModel.find();
    res.send({ books: allBook });
}


module.exports.createBook = createBook
module.exports.getBookInfo = getBookInfo