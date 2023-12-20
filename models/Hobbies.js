const mongoose = require("mongoose");

const hobbiesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: Buffer
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("hobbies", hobbiesSchema);