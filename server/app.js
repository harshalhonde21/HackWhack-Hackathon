const express = require("express");
const cors = require("cors");
const app = express();
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

app.use(express.json({ limit: "10mb" }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(fileUpload());

// Routes Import
const user = require("./routes/UserRoutes.js");
const college = require("./routes/CollegeRoutes.js");
const file = require("./routes/FileRoutes.js");
const loginCollege = require("./routes/LoginCollegeRoutes.js") 


app.use("/api/", user);
app.use("/api/college", college)
app.use("/api/file", file)
app.use("/api/loginCollege", loginCollege)

app.get("/api/v1/test", (req, res) => {
  res.json("I am working");
});

module.exports = app;
