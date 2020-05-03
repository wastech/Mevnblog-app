const express = require("express");
const mongoose = require("mongoose");
const bodyParsey = require("body-parser");
const passport = require("passport");

const users = require("./routes/users");
const profiles = require("./routes/profiles");
const posts = require("./routes/posts");
const article = require("./routes/Artiicle-routes")

const app = express();

//body parsey middelware
app.use(bodyParsey.urlencoded({ extended: false }));
app.use(bodyParsey.json());

//DB config
const db = require("./config/keys").mongoURI;

//connect to MongoDB
mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//passport middelware
app.use(passport.initialize());

//passport config
require("./config/passport")(passport);

app.use("/users", users);
app.use("/profiles", profiles);
app.use("/posts", posts);
app.use(article)

const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`server running ${port}`));