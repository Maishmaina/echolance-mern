const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
const fileupload = require("express-fileupload");
const connectDB = require("./config/db");
//load env file
dotenv.config({ path: "./config/config.env" });
//routes files
const user = require("./routes/user");
const job = require("./routes/job");
const proposal = require("./routes/proposal");

//connectDB
connectDB();
const app = express();

//Body parser mdlw
app.use(express.json());

//paasport mdlw
app.use(passport.initialize());
require("./config/passport")(passport);

//File Uploading mdlw
app.use(fileupload());
//mount routes
app.use("/api/user", user);
app.use("/api/job", job);
app.use("/api/proposal", proposal);
//process.env.PORT ||
const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, console.log(`Server Healthy on PORT ${PORT}`));
//handle the unhandled promises
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
