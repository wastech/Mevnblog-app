const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors');
const routes = require('./routes/article')
const eventroutes = require("./routes/eventroute");
const Newsroutes = require("./routes/newsletter");




const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'))
app.use(routes)
app.use(eventroutes);
app.use(Newsroutes);


mongoose
	.connect("mongodb://localhost/blogpost", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(
		() => {
			console.log("Database is connected");
		},
		(err) => {
			console.log("Can not connect to the database" + err);
		},
	);



const port = process.env.port || 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
