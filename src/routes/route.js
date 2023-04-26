const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const commonFile = require('./common')
const myUnderscore = require('underscore')

//missing number// Problem 1 and Problem 2
let arr = [4, 5, 6, 8, 9]
router.get('/missingNumber', function(req, res) {
    let result
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] != 1)
            result = arr[i] + 1

    }
    console.log(result)
    return res.send("done")
})



module.exports = router;
