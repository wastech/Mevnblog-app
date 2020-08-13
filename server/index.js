const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors');
const articles = require('./routes/article')
const eventroutes = require("./routes/eventroute");
const Newsroutes = require("./routes/newsletter");
const history = require("./routes/history");
const blogpost = require("./routes/blogpost");
const dotenv = require('dotenv')


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

// load env
dotenv.config({path: './config.env'});

mongoose.connect(process.env.MONGO_URL , {
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

if(process.env.NODE_ENV === 'production'){
	//static folder

	app.use(express.static(__dirname + '/public/'));
}

app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));

const port = process.env.PORT || 8000
 app.listen(port, () => console.log(`server runnig in ${process.env.NODE_ENV} mode on port ${port}`))
