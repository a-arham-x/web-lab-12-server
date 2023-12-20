const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startMonth: {
        type: String,
        required: true
    },
    endMonth: {
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
});

module.exports = mongoose.model("experience", experienceSchema);