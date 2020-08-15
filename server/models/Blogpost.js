var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
	title: { type: "String" },
	author: { type: "String" },
	description: { type: "String" },
	image: { type: "String" },
	category: { type: "String" },
	createdAt: { type: "Date", default: Date.now },
});

var Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;
