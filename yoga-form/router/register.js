const express = require('express')
const registerController = require('../controller/registercontroller')


const registerRouter = express.Router()

registerRouter.route("/register").post(registerController.register)
module.exports = registerRouter