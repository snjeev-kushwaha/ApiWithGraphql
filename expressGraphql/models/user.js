const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please enter a valid email",
        ],

    },
    password: {
        type: String,
        required: true,
    },
    displayName: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("User", userSchema)