const Article=require('../models/Article');

module.exports={
	 saveArticle(req,res){
		console.log("--save article--");
		 Article.create(req.body,(err,data)=>
		{
			if(!err){
				res.json({
					status:"success",
					message:"article created successfully",
					data:data
				});
			}
		})
	},
	 getArticles(req,res){
		console.log("--getting articles--");
		 Article.find({}).sort('-date').exec((err,data)=>{
				if(!err){
					res.json({
						status:"success",
						message:"articles fetched successfully",
						data:data
					})
							console.log(req.body);
				}
				else{
					res.json({
						status:"fail",
						message:"something went wrong"
					})
				}
		})
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
		console.log("--get article--");
		console.log(req.body);
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
		console.log("---updating todo----");
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
		console.log("--get category--");
		console.log(req.body);
		 
	 Article.find({ category: req.query.category }, (err, data) => {
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
