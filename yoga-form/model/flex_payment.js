const mongoose = require('mongoose')
require('dotenv/config');
mongoose.connect(process.env.DB_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => {
    console.log("fp model connected");
}).catch((err) => {
    console.log(err);
})

const flexPaymentSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true
    },

    card_no: {
        type: String,
        required: true
    },

    cvv: {
        type: String,
        required: true
    },

    amt:{
        type:String,
        required:true
    }
})


const fpModel = mongoose.model("fpModel", flexPaymentSchema);

module.exports = fpModel;