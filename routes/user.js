const express = require("express");
const passport = require("passport");
const { register, login, currentUser } = require("../controllers/user");
const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  currentUser
);
module.exports = router;
