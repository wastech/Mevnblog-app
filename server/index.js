const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors');
const articles = require('./routes/api/article')
const eventroutes = require("./routes/api/eventroute");
const Newsroutes = require("./routes/api/newsletter");
const history = require("./routes/api/history");
const blogpost = require("./routes/api/blogpost");


const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'))
app.use('/api/article', articles)
app.use('/api/eventroute',eventroutes);
app.use('/api/Newsroute',Newsroutes);
app.use('/api/history',history)
app.use('/api/blogpost',blogpost);


mongoose
	.connect("mongodb+srv://cluster0.xwtti.mongodb.net/wastech" , {
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

//handle production 

if(process.env.NODE.ENV === 'production'){
	//static folder

	app.use(express.static(__dirname + '/public/'));
}

app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
