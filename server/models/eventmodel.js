var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: { type: "String" },
  author: { type: "String" },
  description: { type: "String" },
  image: { type: "String" },
  category: { type: "String" },
  createdAt: { type: "Date", default: Date.now },
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
