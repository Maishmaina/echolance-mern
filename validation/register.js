const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name Must be between 2 and 30 characters";
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  if (!Validator.isMobilePhone(data.phone, "en-KE")) {
    errors.phone = "Follow the format for phone number ie 254728123456";
  }
  if (Validator.isEmpty(data.phone)) {
    errors.phone = "Phone field is required";
  }
  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password =
      "Password schould be at least 6 and less than 30 characters";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Password does not match";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
