const Blog = require("../models/Blogpost");
var sanitize = require("sanitize-html");

module.exports = {
	saveBlog(req, res) {
		const blog = req.body;
		  blog.description = sanitize(blog.description);
		Blog.create(blog, (err, data) => {
			if (!err) {
				res.json({
					status: "success",
					message: "article created successfully",
					data: data,
				});
			}
		});
	},
	getBlogs(req, res) {
		Blog.find({})
			.sort("-date")
			.exec((err, data) => {
				if (!err) {
					res.json({
						status: "success",
						message: "articles fetched successfully",
						data: data,
					});
					console.log(req.body);
				} else {
					res.json({
						status: "fail",
						message: "something went wrong",
					});
				}
			});
	},

	deleteBlog(req, res) {
		Blog.deleteOne({ _id: req.params.id }, (err, data) => {
			if (!err) {
				res.json({
					status: "success",
					message: "article deleted successfully",
				});
			} else {
				res.json({
					status: "fail",
					message: "unable to delete",
				});
			}
		});
	},

	getBlog(req, res) {
		console.log(req.body);
		Blog.findOne({ _id: req.params.id }, (err, data) => {
			if (!err) {
				res.json({
					status: "success",
					message: "article fetched successfully",
					data: data,
				});
			} else {
				res.json({
					status: "fail",
					message: "unable to delete",
				});
			}
		});
	},

	updateBlog(req, res) {
		Blog.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
			if (err) {
				res.json({
					status: "fail",
					message: "no data found",
				});
			} else {
				res.json({
					status: "success",
					message: "updated successfully",
				});
			}
		});
	},

	getBlogByCategory(req, res) {
		Blog.find({ category: req.query.category }, (err, data) => {
			if (!err) {
				res.json({
					status: "success",
					message: "category fetched successfully",
					data: data,
				});
			} else {
				res.json({
					status: "fail",
					message: "unable to get category",
				});
			}
		});
	},
};
