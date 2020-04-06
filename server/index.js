const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`app is listening to port:${PORT}`)
})