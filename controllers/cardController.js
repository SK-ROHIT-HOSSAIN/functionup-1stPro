const cardModel = require("../models/cardModel");


const getAllCards = async function(req, res) {
    try {
        let card = await cardModel.find({ status: "ACTIVE" })
        if (!card) {
            return res.status(404).send({ status: false, msg: "card not found" })
        }
        return res.status(200).send({ status: true, data: card })
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

const createCard = async(req, res) => {
    try {
        let data = req.body;
        let count = await cardModel.find();
        data["cardNumber"] = `C${count.length + 1}`;
        let savedData = await cardModel.create(data)
        res.status(201).json({ status: true, card: savedData });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
}



module.exports = { getAllCards, createCard };