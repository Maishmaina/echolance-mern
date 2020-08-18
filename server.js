const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
const connectDB = require("./config/db");
//load env file
dotenv.config({ path: "./config/config.env" });
//routes files
const user = require("./routes/user");
const job = require("./routes/job");

//connectDB
connectDB();
const app = express();

//Body parser mdlw
app.use(express.json({ extended: false }));

//paasport mdlw
app.use(passport.initialize());
require("./config/passport")(passport);

//mount routes
app.use("/api/user", user);
app.use("/api/job", job);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log(`Server Healthy on PORT ${PORT}`));
//handle the unhandled promises
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
