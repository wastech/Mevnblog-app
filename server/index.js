const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')


const app = express()
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use(require('./routes/Blogroute'))
app.use(require('./routes/Customerroute'))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`app is listening to port:${PORT}`)
})