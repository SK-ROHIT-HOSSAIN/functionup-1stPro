const express = require('express');
const router = express.Router();
const myLodash = require('lodash')
const welcomeFunction = require('../logger/logger.js')
const { printDate, printMonth, getBatchInfo } = require('../util/helper.js')
const { trimIt, changeToLowerCase, changeToUpperCase } = require('../validater/formatter.js');


router.get('/test-me', function(req, res) {
    res.send('My first ever api!')
    welcomeFunction.welcome();
});

router.get('/test-me1', function(req, res) {
    res.send('My first ever api!')
    printDate();
    printMonth();
    getBatchInfo();
});

router.get('/test-me2', function(req, res) {
    res.send('My first ever api!')
    trimIt();
    changeToLowerCase();
    changeToUpperCase();
});

router.get('/test-me3', function(req, res) {
    res.send('My first ever api!')
        /*- Create an array of strings containing the names all the months of a year and split 
        the array into 4 equally sized sub-arrays using the chunk function.
         Print these sub-arrays on console.*/
    console.log(myLodash.chunk(["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sept", "oct", "nov", "dec"], 4))

    /*- Create an array containing the first 10 odd numbers. 
    Using the tail function, return the last 9 elements of it and print them on console. */

    console.log(myLodash.tail([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]))

    /*Create 5 arrays of numbers containing a few duplicate values.
     Using the function union create a merged array with only unique values and print them on console */

    console.log(myLodash.union([1, 2], [2, 3], [3, 4], [4, 5], [5, 6]))

    /*Use the function fromPairs to create an object containing key value pairs.
     For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"] */
    const pairs = [
        ["horror", "TheShining"],
        ["drama", "Titanic"],
        ["thriller", "Shutter Island"],
        ["fantasy", "Pans Labyrinth"]
    ]
    console.log(myLodash.fromPairs(pairs))

});


module.exports = router;