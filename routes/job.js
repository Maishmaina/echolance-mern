const express = require("express");
const passport = require("passport");
const { addJob, getAllJob } = require("../controllers/job");
const router = express.Router();
router.post(
  "/addjob",
  passport.authenticate("jwt", { session: false }),
  addJob
);
router.get("/all", getAllJob);

module.exports = router;
