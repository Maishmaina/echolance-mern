const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//load env file
dotenv.config({ path: "./config/config.env" });
//connectDB
connectDB();
const app = express();

//Body parser
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.json({ message: "i found the server" }));

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, console.log(`Server Healthy on PORT ${PORT}`));
//handle the unhandled promises
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
