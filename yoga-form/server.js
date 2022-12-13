const express  = require('express');
const cors = require('cors')
const bookingRouter = require('./router/booking');
const paymentRouter = require('./router/payment');
const registerRouter = require('./router/register');
require('dotenv/config');
let PORT = process.env.PORT


// register -> booking -> payment

const app = express()
app.use(cors())
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
app.use(express.json());

app.use("/user",registerRouter)
app.use("/payment",paymentRouter)
app.use("/booking",bookingRouter)


app.use((req, res) => {
    res.json({
        message: "Page not found"
    })
})

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
})