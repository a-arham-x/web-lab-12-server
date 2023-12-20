const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    url:{
        type: String,
        unique: true
    },
    githubUrl:{
        type: String,
        unique: true,
        required: true
    }
});

module.exports = mongoose.model("projects", projectSchema);