const Article=require('../models/Article');

module.exports={
	async saveArticle(req,res){
		console.log("--save article--");
		await Article.create(req.body,(err,data)=>
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
	async getArticles(req,res){
		console.log("--getting articles--");
		await Article.find({}).sort('-date').exec((err,data)=>{
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

	async deleteArticle(req,res){
		console.log("--deleting todo--");
		await Article.deleteOne({_id:req.params.id},(err,data)=>{
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

	async getArticle(req,res){
		console.log("--get article--");
		console.log(req.body);
		await Article.findOne({_id:req.params.id},(err,data)=>{
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
					message:"unable to delete"
				})
			}
		})
	},


	async updateArticle(req,res){
		console.log("---updating todo----");
		await Article.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
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

	async getArticleByCategory(req,res){
		console.log("--get category--");
		console.log(req.body);
		 
		await Article.find({ category: req.query.category }, (err, data) => {
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
