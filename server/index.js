const express = require('express')
var cors = require('cors')
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
var morgan = require('morgan')
const routes = require('./routes/blogpostroute')



const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(routes)



mongoose.connect('mongodb://localhost/vueblog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})


const port = process.env.port || 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))