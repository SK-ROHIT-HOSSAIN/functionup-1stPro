const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook = async function(req, res) {
    let data = req.body
    let savedData = await bookModel.create(data)
    res.send({ msg: savedData })
}

const createAuthor = async function(req, res) {
    let data = req.body
    let savedData = await authorModel.create(data)
    res.send({ msg: savedData })
}

const createPublisher = async function(req, res) {
    let data = req.body
    let savedData = await publisherModel.create(data)
    res.send({ msg: savedData })
}

const findAuthor = async(req, res) => {
    let data = req.body;
    console.log(data);
    let obj = await authorModel.findOne(data);
    if (obj) {
        res.json({ data: obj })
    } else {
        res.json({ error: "Author ID is invalid" })
    }
}

const findPublisher = async(req, res) => {
    let data = req.body;
    let obj = await publisherModel.findOne(data);
    if (obj) {
        res.json({ data: obj })
    } else {
        res.json({ error: "Publisher ID is invalid" })
    }
}

const getBooksData = async function(req, res) {
    let books = await bookModel.find().populate("author").populate("publisher");
    res.send({ data: books });
};


//   5. Create at least 4 publishers (Penguin, Bloomsbury, Saraswati House, HarperCollins). Create at least 6 authors with ratings 2, 3, 3.5, 4, 4.5 and 5. Create around 10 books with these publishers and authors.
//   Create a new PUT api /books and perform the following two operations
//    a) Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.
//    b) For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60)
const putdata = async(req, res) => {
    try {
        let name = { $or: [{ name: "Penguin" }, { name: "HarperCollins" }] };
        let update = await publisherModel.updateMany(name, { isHardCover: true }, { new: true });
        let dummy = await bookModel.updateMany({ rating: { $gt: 3.5 } }, { $inc: { price: 10 } }, { new: true });
        res.send({ msg: "Updation Done" });
    } catch (err) {
        res.json({ error: err.message });
    }
};

module.exports = { createAuthor, createPublisher, createBook, findAuthor, findPublisher, getBooksData, putdata };