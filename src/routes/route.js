const express = require("express")
const router = express.Router();
const controller = require('../controllers/controller')

//this is middlewarefunction
const checkexist = function(req, res, next) {
    //it will check isfreeappuser key in available in headers or not
    // if isfreeappuser available in headers and value is set to false then it 
    //will return error
    if ((!req.headers.hasOwnProperty('isfreeappuser'))) {
        return res.send('missing item')

    }
    //if all set then it will goes into route handler
    next();
}



router.post('/usercreate', checkexist, controller.usercreate) //call middleware functionn
router.post('/productcreate', controller.productcreate)
router.post('/ordercreate', checkexist, controller.ordercreate)
router.put('/purchase', controller.purchase)

module.exports = router;
