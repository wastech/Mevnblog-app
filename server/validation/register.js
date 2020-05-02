const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  //check the data, if is not empy is gonna be what it is, if it is empty then is gonna be an empty string
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }

  //check if the field  Name is empty
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  //check if the field Email is empty
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  //check if the field Email is valid
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  //check if the field Password is empty
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  //check the Password length
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  //check if the field Password is empty
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required";
  }

  //check if password and password2 match
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};