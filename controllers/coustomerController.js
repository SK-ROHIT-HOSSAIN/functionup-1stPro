const coustomerModel = require("../models/coustomerModel");


const getActiveCustomers = async(req, res) => {
    try {
        const customers = await coustomerModel.find({ status: "ACTIVE" });
        if (!customers) {
            return res.status(404).send({ status: false, message: "No customers found" });
        }
        res.status(200).send({ status: true, customersData: customers });
    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
}


const deleteCoustomer = async(req, res) => {
    try {
        let customerID = req.query.customerID
        if (!customerID) {
            return res.status(400).send({ status: false, msg: "customerId is required for deletion" })
        }
        let customer = await coustomerModel.updateMany({ customerID: customerID, status: "ACTIVE" }, { $set: { status: "INACTIVE" } }, )
        if (customer.modifiedCount > 0) {
            return res.status(200).send({ status: true, msg: "successfully deleted" })
        }
        return res.status(404).send({ status: false, msg: "customer not found" })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}



const createCoustomer = async(req, res) => {


    try {
        let data = req.body;

        const customer = await coustomerModel.create(data);
        if (!customer) {
            return res.status(404).send({ status: false, message: "No customer found" });
        }
        res.status(200).send({ status: true, message: "Customer created successfully", coustomerData: customer });
    } catch (error) {
        if (error.message.includes("validation")) {
            return res.status(400).send({ status: false, message: error.message })
        } else {
            return res.status(500).send({ status: false, message: error.message })
        }
    }

}

module.exports = { getActiveCustomers, deleteCoustomer, createCoustomer }