const path = require("path");
const Proposal = require("../models/Proposal");

//@desc     Post New Proposal
//@route    POST api/proposal/add
//@access   Private
exports.addProposal = async (req, res) => {
  const proposal = await Proposal.create(req.body);
  res.json(proposal);
};
//@desc     Get Proposala by userid
//@route    GET api/proposal/user/:userId
//@access   Private

exports.getProposalByUserId = async (req, res) => {
  try {
    const proposal = await Proposal.find({ user: req.params.userId }).populate({
      path: "job",
      select: "title duration budget",
    });
    res.json(proposal);
  } catch (err) {
    res.status(404).json({ errors: "No Proposal Found with those Details" });
  }
};

//@desc     Upload file for Proposal
//@route    PUT api/proposal/:Id/file
//@access   Private
exports.proposalFileUpload = async (req, res) => {
  const proposal = await Proposal.findById(req.params.id);
  if (!proposal) {
    return res.status(404).json({ errors: "Proposal Not Found!" });
  }

  if (!req.files) {
    return res.status(400).json({ errors: "Please upload a file" });
  }
  const file = req.files.file;
  const allowedFileExt = /(\.doc|\.docx|\.odt|\.pdf|\.zip|\.png|\.jpg)$/i;
  const validateExtension = path.parse(file.name).ext;

  if (!allowedFileExt.exec(validateExtension)) {
    res.status(400).json({
      errors: `Sorry!, Check your file, ${validateExtension} type is not allowed`,
    });
  } else {
    file.name = `file_${Date.now()}_${proposal._id}${
      path.parse(file.name).ext
    }`;

    file.mv(`./public/proposal/${file.name}`, async (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({
          errros: "There was an error during file upload please re-try",
        });
      }
      await Proposal.findByIdAndUpdate(req.params.id, {
        uploadfile: file.name,
      });
      res.json({ success: true, data: file.name });
    });
  }
};
//@desc     Update Proposal  by Id
//@route    PUT api/proposal/updateproposal/:id
//@access   Private
exports.updateProposal = async (req, res) => {
  try {
    let proposal = await Proposal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(proposal);
  } catch (err) {
    ress
      .status(400)
      .json({ errors: "Sorry there is no job with  those details" });
  }
};
