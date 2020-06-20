const express = require('express');
const router = express.Router();
const blogModel = require('../models/blogpostmodel');

router.get('/getpost', async(req, res) => {
    const post = await blogModel.find();

    return res.send(post);

})
router.post('/newpost', (req, res) => {
    const posts = new blogModel(req.body);
    posts.save((err, post) => {
        if (err) {
            res.send(err)
            return;
        }
        res.send('messaged posted successfully')
    });
})

router.get('/getpost/:id', function(req, res) {
    blogModel.findById(req.params.id, function(err, foundBlog) {
        if (err) {
            res.send(err);
            return;
        } else {
            res.send(foundBlog);
        }
    });
});



router.put('/update/:id', async(req, res) => {
    await blogModel.findByIdAndUpdate(req.params.id, req.body)

    res.json({
        status: 'task updated'

    })
});

router.delete('/delete/:id', async(req, res) => {
    await blogModel.findByIdAndRemove(req.params.id)
    res.json({
        status: 'task deleted'
    })
});







module.exports = router