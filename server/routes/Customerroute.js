const express = require('express')
const router = express.Router();
const customer = require('../Customerroute.json')

router.get('/customer', function(req, res, next) {
    res.json({
        customer
    });
})

module.exports = router