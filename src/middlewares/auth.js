const userModel = require('../models/userModel')
let headerCheck = (req, res, next) => {
    let token = req.headers["x-auth-token"];
    if (!token) {
        return res.send({ status: false, msg: "token must be present in Request Header" });
    }
    next();
}
let userCheck = async(req, res, next) => {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
        return res.send("No such user exists in my DataBase");
    }
    next();
}

module.exports = { headerCheck, userCheck }