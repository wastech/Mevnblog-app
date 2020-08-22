const express = require("express");
const router = express.Router();

const BlogController = require("../controllers/Blogpost");

router.post("/save_blog", BlogController.saveBlog);
router.get("/get_blogs", BlogController.getBlogs);
router.delete("/delete_blog/:id", BlogController.deleteBlog);
router.get("/get_blog/:id", BlogController.getBlog);
router.put("/update_blog/:id", BlogController.updateBlog);
router.get("/get_blog_by_category/:category",BlogController.getBlogByCategory)

module.exports = router;
