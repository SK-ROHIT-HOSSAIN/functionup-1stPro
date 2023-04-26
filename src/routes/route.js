const express = require('express');
const router = express.Router();

let persons = [{
        name: "PK",
        age: 10,
        votingStatus: false
    },
    {
        name: "SK",
        age: 20,
        votingStatus: false
    },
    {
        name: "AA",
        age: 70,
        votingStatus: false
    },
    {
        name: "SC",
        age: 5,
        votingStatus: false
    },
    {
        name: "HO",
        age: 40,
        votingStatus: false
    }
]


router.post('/person', (req, res) => {
    let q = req.query.votingAge;
    let arr = [];
    persons.forEach(x => {
        if (x.age >= q) {
            x.votingStatus = true;
            arr.push(x);
        }
    })
    res.send(arr);
})
module.exports = router;