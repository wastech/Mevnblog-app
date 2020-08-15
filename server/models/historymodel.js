var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var HistorySchema = new Schema({
	title: { type: "String" },
	author: { type: "String" },
	description: { type: "String" },
	image: { type: "String" },
	category: { type: "String" },
	createdAt: { type: "Date", default: Date.now() },
});

var History = mongoose.model("History", HistorySchema);
module.exports = History;
