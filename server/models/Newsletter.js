const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsletterSchema = new Schema({
	email: { type: String ,  required: true },
	createdAt: { type: "Date", default: Date.now },
});

module.exports = mongoose.model("newsletter", newsletterSchema);
