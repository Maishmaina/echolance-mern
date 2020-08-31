const express = require("express");
const passport = require("passport");
const {
  addJob,
  getAllJob,
  getJobById,
  updateJob,
} = require("../controllers/job");
const router = express.Router();
router.post(
  "/addjob",
  passport.authenticate("jwt", { session: false }),
  addJob
);
router.get("/all", getAllJob);
router.get("/:id", getJobById);
router.put(
  "/updatejob/:id",
  passport.authenticate("jwt", { session: false }),
  updateJob
);
module.exports = router;
