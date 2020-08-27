const History = require("../models/historymodel");
var sanitize = require("sanitize-html");

module.exports = {
	saveHistory(req, res) {
		const history = req.body;
	  history.description = sanitize(history.description);
		History.create(history, (err, data) => {
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
		History.findById( req.params.id, (err, data) => {
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
		History.find({ category: req.params.category }, (err, data) => {
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
