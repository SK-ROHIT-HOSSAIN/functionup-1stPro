const userModel = require('../models/userModel')
const jwt = require("jsonwebtoken");
let headerCheck = (req, res, next) => {

    let token = req.headers["x-auth-token"];
    if (!token) {
        return res.status(404).send({ status: false, msg: "token must be present in Request Header" });
    }
    next();

}
let userCheck = async(req, res, next) => {

    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
        return res.status(404).send("No such user exists in my DataBase");
    }
    next();

}

let checkAuth = async(req, res, next) => {

    let token = req.headers["x-auth-token"];

    let decodedToken = jwt.verify(token, "MySecretMsg");
    if (!decodedToken) {
        return res.status(404).send({ status: false, msg: "token is invalid" });
    }
    req.decodedToken = decodedToken;
    next();


}

module.exports = { headerCheck, userCheck, checkAuth }