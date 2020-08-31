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

//@desc     Get Jobs by id
//@route    GET api/job/:id
//@access   Public

exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    res.json(job);
  } catch (err) {
    res.status(404).json({ nojob: "No Job Found with those Details" });
  }
};
//@desc     Update Jobs by id
//@route    PUT api/job/updatejob/:id
//@access   Private
exports.updateJob = async (req, res) => {
  try {
    let job = await Job.findById(req.params.id);

    job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(job);
  } catch (err) {
    res
      .status(400)
      .json({ nojobupdate: "Sorry there is no Job with those Details" });
  }
};
