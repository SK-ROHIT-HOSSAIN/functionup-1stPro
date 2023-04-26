const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const commonFile = require('./common')
const myUnderscore = require('underscore')

/*router.get('/test-me', function(req, res) {
    res.send('This should be working!')
});

router.get('/test-you', function(req, res) {
    console.log('This is the constant I created', commonFile.name)
    commonFile.doSomething()
    res.send('Hello there, welcome to this application!')
});

router.get('/test-underscore', function(req, res) {
    let result = myUnderscore.first([1, 2, 3, 4])
    console.log(result)
    res.send('working!')
});

router.get('/students/:studentName', function(req, res) {
    console.log(req.params.studentName)
    res.send('working!')
});


router.get('/students/:studentName', function(req, res) {
    console.log(req.params.studentName)
    res.send('working!')
});


router.post('/trial', function(req, res) {
    res.send('done')
});

router.put('/update-profile', function(req, res) {
    res.send('profile-updated')
});

router.delete('/deactivate-account', function(req, res) {
    res.send('profile deleted')
});*/

//problem 1:
const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
router.get('/movies', function(req, res) {
    //console.log(req.params.studentName)
    res.send(movies)
});


/*Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 
1). You can define an array of movies again in your api */

router.get('/movies/:indexNumber', function(req, res) {
    if (req.params.indexNumber === '1' || req.params.indexNumber === '2' || req.params.indexNumber === '3' || req.params.indexNumber === '0')
        res.send(movies[req.params.indexNumber])
        /*Handle a scenario in problem 2 where if the index is greater than 
        the valid maximum value or smaller that the valid minimum value, 
        a message is returned that tells the user to use a valid index in an error message. */
    else
        res.send("It is not valid request")
});

/*Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. Each movie object should have attributes - id and name. An example of movies array is 
[ {
 “id”: 1,
 “name”: “The Shining”
}, {
 “id”: 2,
 “name”: “Incendies”
}, {
 “id”: 3,
 “name”: “Rang de Basanti”
}, {
 “id”: 4,
 “name”: “Finding Nemo”
}]

Return the entire array in this api’s response*/
const films = [{
        id: 1,
        name: "The Shining"
    },
    {
        id: 2,
        name: "Incendies"
    },
    {
        id: 3,
        name: "Rang de Basanti"
    }, {
        id: 4,
        name: "Finding Nemo"
    }
]

router.get('/films', function(req, res) {

    res.send(films)

});

/*Write api GET /films/:filmId where filmId is the value received in request path params. 
Use this value to return a movie object with this id. 
In case there is no such movie present in the array, return a suitable message 
in the response body. Example for a request GET /films/3 should return the movie object 
{
 “id”: 3,
 “name”: “Rang de Basanti”
}
Similarly for a request GET /films/9 the response can be something like - ‘No movie exists with this id’*/
let film = ""
router.get('/films/:filmId', function(req, res) {

    const newFilms = films.filter(e => e.hasOwnProperty("id"))


    newFilms.forEach(e => {

        if (e.id == req.params.filmId) {
            if (e.hasOwnProperty("name"))
                film += e.name
            else
                film += "film's name is not present"

        }

    })

    if (film != "")
        res.send(film)
    else
        res.send("No movie exists with this id")
})

//missing number
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