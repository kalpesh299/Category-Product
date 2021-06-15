const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    categoryId: {
        type: String,
        required: true
    },
    categoryName: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
});

// const model = new mongoose.model("product", Schema);

module.exports = new mongoose.model("product", Schema);