const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function(req, res) {
    let data = req.body;
    let savedData = await userModel.create(data);
    res.send({ msg: savedData });
};

const loginUser = async function(req, res) {
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user) {
        return res.send({
            status: false,
            msg: "username or the password is not corerct",
        });
    } else {
        let id = user._id;
        let token = jwt.sign({ _id: id }, 'MySecretMsg');
        res.setHeader("x-auth-token", token);
        res.send({ status: "true", data: { Token: token } });
    }
};

const getUserData = async function(req, res) {
    let token = req.headers["x-auth-token"];

    let decodedToken = jwt.verify(token, "MySecretMsg");
    if (!decodedToken) {
        return res.send({ status: false, msg: "token is invalid" });
    }
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    res.send({ status: true, token: decodedToken, data: userDetails });

};

const updateUser = async function(req, res) {
    let userId = req.params.userId;
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
    res.send({ status: "Updated User", data: updatedUser });
}

let deleteUser = async(req, res) => {
    let userId = req.params.userId;
    let deletedUser = await userModel.findOneAndUpdate({ _id: userId }, { isDeleted: true }, { new: true });
    res.send({ status: " Deleted User", data: deletedUser });
}


module.exports = { createUser, getUserData, updateUser, loginUser, deleteUser };