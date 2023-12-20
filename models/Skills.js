const mongoose = require("mongoose");

const skillsSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    experienceLevel: {
        type: String,
        required: true
    },
    image: {
        type: Buffer
    }
})

module.exports = mongoose.model("skills", skillsSchema);