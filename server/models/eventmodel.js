var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
	title: String,
	description: String,
	image: String,
	category: String,
});

var Post = mongoose.model("Event", PostSchema);
module.exports = Post;
