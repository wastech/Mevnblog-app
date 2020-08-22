const Event= require('../models/eventmodel');
var sanitize = require("sanitize-html");
module.exports={
	 saveEvent(req,res){
		 const event = req.body
		   event.description = sanitize(event.description);
		 Event.create(event, (err, data) => {
			if (!err) {
				res.json({
					status: "success",
					message: "article created successfully",
					data: data,
				});
			}
		});
	},
	 getEvents(req,res){
	 Event.find({})
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

	 deleteEvent(req,res){
		Event.remove({ _id: req.params.id }, (err, data) => {
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

	 getEvent(req,res){
		console.log(req.body);
		 Event.findById(  req.params.id , (err, data) => {
				if (!err) {
					res.json({
						status: "success",
						message: "article fetched successfully",
						data: data,
					});
				} else {
					res.json({
						status: "fail",
						message: "unable to get post",
						err:err
					});
				}
			});
	},


	 updateEvent(req,res){
		 Event.findById(req.params.id, function(err, post) {
    if (!post)
      res.status(404).send("data is not found");
    else {
			post.author = req.body.author;
        post.title = req.body.title;
				post.category = req.body.category;
				post.image = req.body.image;
				post.description = req.body.description;
				
        post.save().then(() => {
          res.json('Update complete');
      })
      .catch(() => {
            res.status(400).send("unable to update the database");
      });
    }
  });
	 },

	 getEventByCategory(req,res){
		console.log(req.body);
		 Event.find({ category: req.params.category }, (err, data) => {
			 console.log(data)
				if (!err) {
					res.json({
						status: "success",
						message: "category fetched successfully",
						data: data,
					});
					console.log(data)
				} else {
					res.json({
						status: "fail",
						message: "unable to get category",
					});
				}
			});
	},
}
