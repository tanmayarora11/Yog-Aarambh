const express = require('express')
const fbModel = require('../model/flex_booking')
const fuModel = require('../model/flex_user')


const booking = async (req, res) => {
    try {

        let {
            uid,
            date,
            batch
        } = req.body


        let bookObj = await fbModel.find({
            uid: uid
        })

        let userObj = await fuModel.find({
            uid: uid
        })

        if (bookObj ?.length > 0) {

            let prevDate = bookObj[0].date.split("-")


            let m1 = prevDate[1];
            let y1 = prevDate[0];

            let d = new Date()
            let currDate = d.toISOString().substring(0, 10).split("-")


            let m2 = currDate[1];
            let y2 = currDate[0];

            if (m1 == m2 && y1 == y2 && userObj[0].payDone==true) {
                res.json({
                    message: "Your slot is already booked for this month book again in the next month"
                })
            } else {
                let updateBooking = await fbModel.findOneAndUpdate({
                    uid: uid
                }, {
                    $set: {
                        date: date,
                        batch: batch
                    }
                })

                let updatePay = await fuModel.findOneAndUpdate({
                    uid: uid
                }, {
                    $set: {
                        payDone: false
                    }
                })

                res.json({
                    message: "Booking completed"
                })
            }
        } else {

            let newBooking = await fbModel.create(req.body)

            res.json({
                message: "Booking completed"
            })
        }

    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

module.exports = booking