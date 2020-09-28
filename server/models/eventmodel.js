var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const moment=require('moment');

var PostSchema = new Schema({
  title: { type: "String" },
  author: { type: "String" },
  description: { type: "String" },
  image: { type: "String" },
  category: { type: "String" },
  date:{type:String, default:moment().format('MMMM Do YYYY, h:mm:ss a')},
  upvotes: { type: Number, default: 0 },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

PostSchema.methods.upvote = function (cb) {
  this.upvotes += 1;
  this.save(cb);
};

PostSchema.methods.downvote = function (cb) {
  this.upvotes -= 1;
  this.save(cb);
};

var Post = mongoose.model("Event", PostSchema);
module.exports = Post;
