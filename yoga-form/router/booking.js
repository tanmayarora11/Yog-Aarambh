const express = require('express')
const booking = require('../controller/bookingcontroller')

const bookingRouter = express.Router()

bookingRouter.route("/book").post(booking)
module.exports = bookingRouter