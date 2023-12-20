const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
    level: {
        type: String,
        required: true
    },
    institute: {
        type: String, 
        required: true
    },
    startYear: {
        type: Number,
        required: true
    },
    endYear: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("education", educationSchema);