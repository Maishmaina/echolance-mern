const User = require("../models/Jobs");
const validateJobInput = require("../validation/job");

//@desc     Post New Job
//@route    POST api/job/addjob
//@access   Private

exports.addJob = async (req, res) => {
  const { errors, isValid } = validateJobInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const job = await Job.create(req.body);
  res.status(200).json(job);
};

//@desc     Get all Jobs
//@route    GET api/job/all
//@access   Public

exports.getAllJob = async (req, res) => {
  const job = await Job.find();
  res.json(job);
};
