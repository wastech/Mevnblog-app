const express = require("express");
const router = express.Router();

const ArticleController = require("../../controllers/Article");

router.post("/save_article", ArticleController.saveArticle);
router.get("/get_articles", ArticleController.getArticles);
router.delete("/delete_article/:id", ArticleController.deleteArticle);
router.get("/get_article/:id", ArticleController.getArticle);
router.put("/update_article/:id", ArticleController.updateArticle);
router.post("/get_article_by_category/:category", ArticleController.getArticleByCategory);




module.exports = router;
