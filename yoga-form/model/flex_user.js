const mongoose = require('mongoose')
require('dotenv/config');
mongoose.connect(process.env.DB_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => {
    console.log("fu model connected");
}).catch((err) => {
    console.log(err);
})

const flexUserSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    age: {
        type: String,
        required: true
    },

    phno: {
        type: String,
        required: true
    },

    payDone:{

        type:Boolean,
        required:true,
        default:false
    }
    
})


const fuModel = mongoose.model("fuModel", flexUserSchema);

module.exports = fuModel;