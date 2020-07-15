const History = require("../models/historymodel");

module.exports = {
	saveHistory(req, res) {
		console.log("--save history--");
		History.create(req.body, (err, data) => {
			if (!err) {
				res.json({
					status: "success",
					message: "article created successfully",
					data: data,
				});
			}
		});
	},
	getHistories(req, res) {
		console.log("--getting histories--");
		History.find({})
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

	deleteHistory(req, res) {
		console.log("--deleting todo--");
		History.deleteOne({ _id: req.params.id }, (err, data) => {
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

	getHistory(req, res) {
		console.log("--get history--");
		console.log(req.body);
		History.findOne({ _id: req.params.id }, (err, data) => {
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

	updateHistory(req, res) {
		console.log("---updating todo----");
		History.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
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

	getHistoryByCategory(req, res) {
		console.log("--get category--");
		console.log(req.body);

		History.find({ category: req.query.category }, (err, data) => {
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
