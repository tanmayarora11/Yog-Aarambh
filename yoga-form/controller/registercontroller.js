const express = require('express')
const mongoose = require('mongoose')
const {
    v4: uuidv4
} = require('uuid');
const fuModel = require('../model/flex_user');


exports.register = async (req, res) => {
    try {
        let {
            email,
            age,
            name,
            phno
        } = req.body

       
        let uid = uuidv4()

        let user = await fuModel.find({
            email: email
        })

        if (user.length > 0) {

            if (age >= 18 && age <= 65) {
                let newUser = await fuModel.findOneAndUpdate({
                    email: email
                }, {
                    $set: {
                        age: age,
                        name: name
                    }
                })

                res.json({
                    message: {
                        message: "User registered",
                        uid: user[0].uid
                    }
                })
            } else {
                res.json({
                    message: "Your age should be between 18 to 65"
                })
            }
        } else {

            if (age >= 18 && age <= 65) {
                let userObj = {
                    name: name,
                    email: email,
                    phno: phno,
                    age: age,
                    uid: uid
                }
                let newUser = await fuModel.create(userObj)

                res.json({
                    message: {
                        message: "User registered",
                        uid: uid
                    }
                })
            } else {
                res.json({
                    message: "Your age should be between 18 to 65"
                })
            }

        }

    } catch (error) {
        res.json({
            message: error.message
        })
    }
}