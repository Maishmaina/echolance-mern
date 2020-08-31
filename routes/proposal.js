const express = require("express");
const passport = require("passport");
const {
  addProposal,
  getProposalByUserId,
  proposalFileUpload,
  updateProposal,
} = require("../controllers/proposal");

const router = express.Router();

router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  addProposal
);
router.get(
  "/user/:userId",
  passport.authenticate("jwt", { session: false }),
  getProposalByUserId
);
router.put(
  "/file/:id",
  passport.authenticate("jwt", { session: false }),
  proposalFileUpload
);
router.put(
  "/updateproposal/:id",
  passport.authenticate("jwt", { session: false }),
  updateProposal
);
module.exports = router;
