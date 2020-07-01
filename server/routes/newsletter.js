const express = require("express");
const router = express.Router();

const NewsletterController = require("../controllers/Newsletter");

router.post("/mail", NewsletterController.saveMail);
router.get("/mails", NewsletterController.getMails);
router.delete("/deletemail/:id", NewsletterController.deleteMail);

module.exports = router;
