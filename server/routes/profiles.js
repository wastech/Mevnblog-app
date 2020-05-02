const express = require("express");
const router = express.Router();

//@route GET api/Profiles/test
//@desc     test profile route
//acces     public
router.get("/test", (req, res) => res.json({ msg: "Profiles Works!" }));

module.exports = router;