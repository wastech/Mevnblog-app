const express = require("express");
const router = express.Router();

const HistoryController = require("../controllers/History");

router.post("/save_history", HistoryController.saveHistory);
router.get("/get_histories", HistoryController.getHistories);
router.delete("/delete_history/:id", HistoryController.deleteHistory);
router.get("/get_history/:id", HistoryController.getHistory);
router.put("/update_history/:id", HistoryController.updateHistory);
router.get("/get_history_by_category/:category", HistoryController.getHistoryByCategory);

module.exports = router;
