const mongoose = require('mongoose')
require('dotenv/config');

mongoose.connect(process.env.DB_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => {
    console.log("fb model connected");
}).catch((err) => {
    console.log(err);
})

const flexBookingSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    batch:{
        type:String,
        required:true
    }
})


const fbModel = mongoose.model("fbModel", flexBookingSchema);

module.exports = fbModel;