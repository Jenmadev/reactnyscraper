var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var
var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        required: true
    }
    });

    var Article = mongoose.model("Article", ArticleSchema);
    module.exports = Article;