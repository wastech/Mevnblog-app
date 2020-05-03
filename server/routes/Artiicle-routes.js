const express = require("express")
var articlesController = require("../controllers/Article-controllers");
var router = new express.Router();
// Define any API routes first
// Get saved articles
router.get("/getArticle", articlesController.find);
// Save articles
router.post("/postArticle", articlesController.insert);
// delete saved articles
router.delete("/deleteArticle/:id", articlesController.delete);
// Send every other request to 

module.exports = router