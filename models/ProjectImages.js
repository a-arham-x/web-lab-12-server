const mongoose = require("mongoose");

const projectImagesSchema = new mongoose.Schema({
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    image: {
        type: Buffer,
        required: true
    }
});

module.exports = mongoose.model("project_images", projectImagesSchema);