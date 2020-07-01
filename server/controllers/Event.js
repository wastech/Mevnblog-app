const Event= require('../models/eventmodel');

module.exports={
	async saveEvent(req,res){
		await Event.create(req.body, (err, data) => {
			if (!err) {
				res.json({
					status: "success",
					message: "article created successfully",
					data: data,
				});
			}
		});
	},
	async getEvents(req,res){
		console.log(res.body)
		await Event.find({})
			.sort("-date")
			.exec((err, data) => {
				if (!err) {
					res.json({
						status: "success",
						message: "articles fetched successfully",
						data: data,
					});
				} else {
					res.json({
						status: "fail",
						message: "something went wrong",
					});
				}
			});
	},

	async deleteEvent(req,res){
		await Event.remove({ _id: req.params.id }, (err, data) => {
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

	async getEvent(req,res){
		console.log(req.body);
		await Event.findOne({ _id: req.params.id }, (err, data) => {
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


	async updateEvent(req,res){
		await Event.findByIdAndUpdate(req.params.id, req.params, (err, data) => {
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

	async getEventByCategory(req,res){
		console.log(req.body);
		 
		await Event.find({ category: req.body.category }, (err, data) => {
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
}
