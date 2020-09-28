const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment=require('moment');

const articleSchema = new Schema({
	
	title: { type: "String" },
	author: { type: "String" },
	description: { type: "String" },
	image: { type: "String" },
	category: { type: "String" },
	createdAt: {type:String, default:moment().format('MMMM Do YYYY, h:mm:ss a')}

});

module.exports = mongoose.model("Article", articleSchema);
