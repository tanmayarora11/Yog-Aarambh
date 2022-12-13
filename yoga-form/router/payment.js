const express = require('express')
const payment = require('../controller/paymentcontroller')

const paymentRouter = express.Router()

paymentRouter.route("/pay").post(payment)

module.exports = paymentRouter