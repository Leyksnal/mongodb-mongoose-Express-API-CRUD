const mongoose = require("mongoose")


// Create
const userSchema = mongoose.Schema({
    rank: {
        type: Number,
        require: true
    },
    fullname: {
        type: String,
        require: true
    },
    course: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    }
})




module.exports = mongoose.model("users", userSchema)