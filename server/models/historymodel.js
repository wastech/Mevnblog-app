var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const moment=require('moment');

var HistorySchema = new Schema({
	title: { type: "String" },
	author: { type: "String" },
	description: { type: "String" },
	image: { type: "String" },
	category: { type: "String" },
	createdAt: {type:String, default:moment().format('MMMM Do YYYY, h:mm:ss a')},
});

var History = mongoose.model("History", HistorySchema);
module.exports = History;
