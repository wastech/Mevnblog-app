const express = require('express')
const router = express.Router();
const blogpost = require('../BlogPost.json')

router.get('/blog', function(req, res, next) {
    res.json({
        blogpost
    });
})

module.exports = router