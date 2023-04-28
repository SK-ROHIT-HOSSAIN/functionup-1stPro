const bookModel = require("../models/bookModel")


const createBook = async(req, res) => {
    let data = req.body;
    const bookData = await bookModel.create(data);
    res.send({ book: bookData });
}
const bookList = async(req, res) => {
    let books = await bookModel.find().select({ bookName: 1, authorName: 1, _id: 0 });
    res.send({ bookList: books });
}
const bookYear = async(req, res) => {
    let yr = req.query.year;
    let books = await bookModel.find({ year: { $eq: yr } }).select({ bookName: 1, _id: 0 });
    res.send({ bookList: books });
}
const getParticularBooks = async(req, res) => {
    let condition = req.body;
    let book = await bookModel.find(condition).select({ createdAt: 0, updatedAt: 0, _id: 0, __v: 0 })
    res.send({ bookList: book });
}
const getXINRBooks = async(req, res) => {
    let books = await bookModel.find({
        $or: [{ "prices.indianPrice": "100" }, { "prices.indianPrice": "200" }, { "prices.indianPrice": "600" }]
    }).select({ createdAt: 0, createdAt: 0, _id: 0, __v: 0 })
    res.send({ bookList: books });
}
const getRandomBooks = async(req, res) => {
    let books = await bookModel.find({
        $or: [{ totalPages: { $gt: 500 } }, { stockAvailable: true }]
    }).select({ createdAt: 0, createdAt: 0, _id: 0, __v: 0 })
    res.send({ bookList: books });
}
module.exports = { createBook, bookList, bookYear, getParticularBooks, getXINRBooks, getRandomBooks };