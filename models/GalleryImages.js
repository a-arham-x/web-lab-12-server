const mongoose = require("mongoose");

const galleryImagesSchema = new mongoose.Schema({
    image: {
        type: Buffer,
        required: true
    }
});

module.exports = mongoose.model("gallery_images", galleryImagesSchema);