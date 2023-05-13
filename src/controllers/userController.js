const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function(req, res) {
    try {
        let data = req.body;
        let savedData = await userModel.create(data);
        res.status(201).send({ msg: savedData });
    } catch (err) {
        res.status(500).send("Internal Server Error.")
    }
};

const loginUser = async function(req, res) {
    try {
        let userName = req.body.emailId;
        let password = req.body.password;

        let user = await userModel.findOne({ emailId: userName, password: password });
        if (!user) {
            return res.status(404).send({
                status: false,
                msg: "username or the password is not corerct",
            });
        } else {
            let id = user._id;
            let token = jwt.sign({ _id: id }, 'MySecretMsg');
            res.setHeader("x-auth-token", token);
            res.status(200).send({ status: "true", data: { Token: token } });
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
};

const getUserData = async function(req, res) {
    try {
        let decodedToken = req.decodedToken;

        if (decodedToken._id === req.params.userId) {
            let userId = req.params.userId;
            let userDetails = await userModel.findById(userId);
            res.status(200).send({ status: true, token: decodedToken, data: userDetails });
        } else
            res.status(403).send({ msg: "User is not authorised." })
    } catch (err) {
        res.status(500).send(err.message)
    }

};

const updateUser = async function(req, res) {
    try {
        let decodedToken = req.decodedToken;
        if (decodedToken._id === req.params.userId) {
            let userId = req.params.userId;
            let userData = req.body;
            let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
            res.status(200).send({ status: "Updated User", data: updatedUser });
        } else
            res.status(403).send({ msg: "User is not authorised." })
    } catch (err) {
        res.status(500).send(err.message)
    }
}

let deleteUser = async(req, res) => {
    try {
        let decodedToken = req.decodedToken;
        if (decodedToken._id === req.params.userId) {
            let userId = req.params.userId;
            let deletedUser = await userModel.findOneAndUpdate({ _id: userId }, { isDeleted: true }, { new: true });
            res.status(200).send({ status: " Deleted User", data: deletedUser });
        } else
            res.status(403).send({ msg: "User is not authorised." })
    } catch (err) {
        res.status(500).send(err.message)
    }

}


module.exports = { createUser, getUserData, updateUser, loginUser, deleteUser };