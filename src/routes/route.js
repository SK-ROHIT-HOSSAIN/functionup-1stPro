const express = require('express');
const router = express.Router();
const authorAndBook = require("../controllers/book_author")



router.post("/createAuthor", authorAndBook.createAuthor)

router.post("/createBook", authorAndBook.createBook)

router.get("/findBook", authorAndBook.findBook)

router.get('/findAuthorUpdate', authorAndBook.findAuthorAndUpdate)

router.get('/findBookAuthor', authorAndBook.findBookAuthor)

module.exports = router;