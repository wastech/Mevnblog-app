const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

//Load Input Validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

//Load user model
const User = require("../models/User");

//@route GET api/Users/test
//@desc     test users route
//acces     public
router.get("/test", (req, res) => res.json({ msg: "Users Works!" }));

//@route POST api/Users/register
//@desc     register a user
//acces     public
router.post("/register", (req, res) => {
  //validates that the fields aren't null, empty or wrong type
  const { errors, isValid } = validateRegisterInput(req.body);

  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    //search for a match for an email in the server and if there's a match send an error
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      //takes the avatar pic from the email
      const avatar = gravatar.url(req.body.email, {
        s: "200", //size
        r: "pg", //rating
        d: "mm", //default
      });

      //create a new user
      const newUser = new User({
        name: req.body.name, //field name
        email: req.body.email, //field email
        avatar,
        password: req.body.password, //field password
      });

      //make the password a hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

//@route POST api/Users/login
//@desc     Login User / Returning JWT Token
//acces     public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email; //body parser for the field email
  const password = req.body.password;

  //Find User by email
  User.findOne({ email }).then((user) => {
    //check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(400).json(errors);
    }

    //check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, name: user.name, avatar: user.avatar }; // Create JWT Payload

        //Sing the token
        jwt.sign(
          payload,
          keys.secretOrKey, { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          },
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

//@route GET api/Users/current
//@desc     Return current user
//acces     private
router.get(
  "/current",
  passport.authenticate("jwt", { sesion: false }),
  (req, res) => {
    res.send({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
    });
  },
);

module.exports = router;