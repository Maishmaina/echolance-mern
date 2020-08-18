const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateJobInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.duration = !isEmpty(data.duration) ? data.duration : "";
  data.budget = !isEmpty(data.budget) ? data.budget : "";
  data.description = !isEmpty(data.description) ? data.description : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title Field is require!";
  }

  if (Validator.isEmpty(data.duration)) {
    errors.duration = "Duration Field is require!";
  }

  if (Validator.isEmpty(data.budget)) {
    errors.budget = "Budget Field is require!";
  }
  if (Validator.isEmpty(data.description)) {
    errors.description = "Description Field is require!";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
