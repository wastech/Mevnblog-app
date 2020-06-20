const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const BlogPost = new Schema({
    author: { type: String, default: 'anonymous' },
    title: { type: String, required: true },
    body: { type: String, required: true },
    url: {
        type: String,
        required: true
    },
    date: { type: Date, default: Date.now }
});


module.exports = mongoose.model('vueblog', BlogPost);