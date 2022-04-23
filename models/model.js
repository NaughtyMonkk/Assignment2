const mongoose = require("mongoose"),
    bookSchema = mongoose.Schema({
        number: String,
        name: String,
        author: String,
        link: String,
        
    });
module.exports = mongoose.model("books", bookSchema)