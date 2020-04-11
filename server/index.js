const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var morgan = require('morgan')
const post = require('./blog.json')
const customerHistory = require('./customerHistory.json')
const events = require('./events.json')

const app = express()
const port = 3000
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(morgan('tiny'))


app.get('/', (req, res) => res.send(post))
app.get('/history', (req, res) => res.send(customerHistory))
app.get('/event', (req, res) => res.send(events))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))