var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
	title: { type: "String" },
	author: { type: "String" },
	description: { type: "String" },
	image: { type: "String" },
	category: { type: "String" },
	createdAt: { type: "Date", default: Date.now },
});

var Post = mongoose.model("Event", PostSchema);
module.exports = Post;
