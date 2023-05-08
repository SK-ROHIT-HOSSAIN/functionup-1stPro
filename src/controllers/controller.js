const usermodel = require('../models/usermodel')
const productmodel = require('../models/productmodel')
const ordermodel = require('../models/ordermodel')

const usercreate = async(req, res) => {
    //convert string into boolean using boolean function
    let isFreeAppUser = Boolean(req.headers.isfreeappuser);
    let data = req.body;
    //set the field value with headers key value
    data.isFreeAppUser = isFreeAppUser
    let saveddata = await usermodel.create(data);
    res.send(saveddata)

}
const productcreate = async(req, res) => {
    let data = req.body;
    let saveddata = await productmodel.create(data);
    res.send(saveddata)
}
const ordercreate = async(req, res) => {
    const { userId, productId, amount, isFreeAppUser, date } = req.body;
    let userid_exist = await usermodel.findById({ _id: userId });
    let product_exist = await productmodel.findById({ _id: productId });
    if (!userid_exist) {
        return res.send({ message: "user id not exist" })
    }
    if (!product_exist) {
        return res.send({ message: "product is not exist" })
    }
    let saveddata = await ordermodel.create({ userId, productId, amount, isFreeAppUser, date })
    return res.send(saveddata)
}
const purchase = async(req, res) => {
    let isFreeAppUser = Boolean(req.headers.isfreeappuser);
    let subs_price = 200;

    if (isFreeAppUser === true) {
        let amount = await ordermodel.findOneAndUpdate({ isFreeAppUser: true }, { $set: { amount: 0 } });
        return res.send(amount);
    }
    if (isFreeAppUser === false) {
        let updated = await ordermodel.findOneAndUpdate({ isFreeAppUser: false }, { $set: { amount: amount - subs_price } })
        return res.send(updated);
    } else {
        return res.send("insufficient balance");
    }

}
module.exports.usercreate = usercreate
module.exports.productcreate = productcreate
module.exports.ordercreate = ordercreate
module.exports.purchase = purchase