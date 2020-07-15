var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
	title: String,
	description: String,
	image: String,
	category: String,
	author: String,
});

var Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;
