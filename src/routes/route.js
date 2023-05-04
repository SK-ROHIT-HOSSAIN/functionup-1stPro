const express = require('express');
const router = express.Router();
const authorBook = require("../controllers/authorBook");
const bookModel = require('../models/bookModel');



router.post("/createAuthor", authorBook.createAuthor)

router.post("/createPublisher", authorBook.createPublisher)

router.post("/createBook", authorBook.createBook)

router.post('/findAuthor', authorBook.findAuthor)

router.post("/findPublisher", authorBook.findPublisher)

router.get("/getBookData", authorBook.getBooksData)

router.get("/putData", authorBook.putdata)


module.exports = router;