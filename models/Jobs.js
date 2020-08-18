const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const JobSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  budget: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "active",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Job = mongoose.model("job", JobSchema);
