const express = require("express");
const router = express.Router();

//@route    GET api/Posts/test
//@desc     test post route
//acces     public
router.get("/test", (req, res) => res.json({ msg: "Posts Works!" }));

module.exports = router;