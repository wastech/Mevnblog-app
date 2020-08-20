const Article=require('../models/Article');
var sanitize = require("sanitize-html");

module.exports={
	 saveArticle(req,res){
		 const article = req.body
				   article.description = sanitize(article.description);
		 Article.create(article, (err, data) => {
				if (!err) {
					res.json({
						status: "success",
						message: "article created successfully",
						data: data,
					});
				}
			});
	},
	 getArticles(req,res){
		 Article.find({})
				.sort("-date")
				.limit(10)
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

 deleteArticle(req,res){
		console.log("--deleting todo--");
		 Article.remove({_id:req.params.id},(err,data)=>{
			if(!err){
				res.json({
					status:"success",
					message:"article deleted successfully"
				})
			}
			else{
				res.json({
					status:"fail",
					message:"unable to delete"
				})
			}
		})
	},

	 getArticle(req,res){
		 Article.findOne({_id:req.params.id},(err,data)=>{
			if(!err){
				res.json({
					status:"success",
					message:"article fetched successfully",
					data:data
				})
			}
			else{
				res.json({
					status:"fail",
					message:"unable to get post",
					err:err
				})
			}
		})
	},


	 updateArticle(req,res){
		 Article.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
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

	 getArticleByCategory(req,res){		 
	 Article.find({ category: req.params.category }, (err, data) => {
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
