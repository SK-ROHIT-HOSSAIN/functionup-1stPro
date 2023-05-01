//import
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
    //for creating book
const createBook = async function(req, res) {
        let data = req.body
        let savedData = await bookModel.create(data)
        res.send({ msg: savedData })
    }
    // for creating author
const createAuthor = async function(req, res) {
        let data = req.body
        let savedData = await authorModel.create(data)
        res.send({ msg: savedData })
    }
    //for finding book
const findBook = async function(req, res) {
        let obj = await authorModel.findOne({ author_name: "Chetan Bhagat" });
        let id = obj.author_id;
        let data = await bookModel.find({ author_id: id }).select({ name: 1, _id: 0 });
        res.send({ book: data });
    }
    //find & update
const findAuthorAndUpdate = async(req, res) => {
    let obj = await bookModel.findOneAndUpdate({ name: "Two states" }, { price: 100 }, { new: true });
    let id = obj.author_id;
    let data = await authorModel.findOne({ author_id: id });
    res.send({ Book: obj, Author: data.author_name });
}

//last problem
const findBookAuthor = async(req, res) => {
    let obj = await bookModel.find({ price: { $gte: 50, $lte: 100 } });
    let result = [];
    for (let i = 0; i < obj.length; i++) {
        let x = obj[i];
        let a = await authorModel.findOne({ author_id: x.author_id });
        result.push({ Author: a.author_name, Book: x.name });
    }
    res.send({ msg: result });
}
module.exports = { createAuthor, createBook, findBook, findAuthorAndUpdate, findBookAuthor };