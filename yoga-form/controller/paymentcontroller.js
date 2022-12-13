const express = require('express')
const fpModel = require('../model/flex_payment')
const fuModel = require('../model/flex_user')


const payment = async (req, res) => {
    try {

        let { uid } = req.body

        let card = await fpModel.find({
            uid: uid
        })

        if (card ?.length > 0) {
            let updatePay = await fuModel.findOneAndUpdate({
                uid: uid
            }, {
                $set: {
                    payDone: true
                }
            })
            res.json({
                message: "Success"
            })
        } else {

            let saveCard = await fpModel.create(req.body)
            let updatePay = await fuModel.findOneAndUpdate({
                uid: uid
            }, {
                $set: {
                    payDone: true
                }
            })
            res.json({
                message: "Success"
            })

        }

    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

module.exports = payment