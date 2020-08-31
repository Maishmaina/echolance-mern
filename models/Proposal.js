const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Create Schema
const ProposalSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  job: {
    type: Schema.Types.ObjectId,
    ref: "job",
  },
  uploadfile: {
    type: String,
  },
  status: {
    type: String,
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Proposal = mongoose.model("proposal", ProposalSchema);
