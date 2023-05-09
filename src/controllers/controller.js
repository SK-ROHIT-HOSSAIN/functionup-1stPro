const usermodel = require('../models/usermodel')
const productmodel = require('../models/productmodel')
const ordermodel = require('../models/ordermodel')

const usercreate = async(req, res) => {
    //convert string into boolean using boolean function
    // let isFreeAppUser = Boolean(req.headers.isfreeappuser);
    let data = req.body;
    //set the field value with headers key value
    data.isFreeAppUser = req.headers.isfreeappuser;
    let saveddata = await usermodel.create(data);
    res.send(saveddata)

}
const productcreate = async(req, res) => {
    let data = req.body;
    let saveddata = await productmodel.create(data);
    res.send(saveddata)
}
const ordercreate = async(req, res) => {
    const data = req.body;
    data.isFreeAppUser = req.headers.isfreeappuser;
    let userid_exist = await usermodel.findById({ _id: req.body.userId });
    let product_exist = await productmodel.findById({ _id: req.body.productId });
    if (!userid_exist) {
        return res.send({ message: "user id not exist" })
    }
    if (!product_exist) {
        return res.send({ message: "product is not exist" })
    }
    let saveddata = await ordermodel.create(data)
    return res.send(saveddata)
}
const purchase = async(req, res) => {
    // let isFreeAppUser = Boolean(req.headers.isfreeappuser);
    let orderDetails = await ordermodel.findById({ _id: "645a2f75c999e361bfd5e4c6" })
    let orderAmount = orderDetails.amount;
    let userId = orderDetails.userId;
    let pId = orderDetails.productId;
    let isFreeAppUser = orderDetails.isFreeAppUser;

    let purchaseDetails = await productmodel.findById({ _id: pId })
    let pAmount = purchaseDetails.price;

    let userDetails = await usermodel.findById({ _id: userId })
    let userBalance = userDetails.balance;

    if (isFreeAppUser === true)

    {

        let amount = await ordermodel.findOneAndUpdate({ isFreeAppUser: true }, { $set: { amount: 0 } }, { new: true });
        return res.send(amount);

    } else {
        let updated = await ordermodel.findOneAndUpdate({ isFreeAppUser: false }, { $set: { amount: pAmount } }, { new: true })
            //let updateMore = await ordermodel.findOneAndUpdate({ isFreeAppUser: false }, { $set: {isFreeAppUser: true  } }, { new: true })
            // if (!updated) {
            //     return res.send(updated);
            // }

        if (orderAmount <= userBalance) {
            let userUpdate = await usermodel.findOneAndUpdate({ _id: userId }, { $set: { balance: userBalance - orderAmount } }, { new: true })
            res.send("updated")
        } else {
            return res.send("insufficient balance");
        }

    }
}
module.exports.usercreate = usercreate
module.exports.productcreate = productcreate
module.exports.ordercreate = ordercreate
module.exports.purchase = purchase
