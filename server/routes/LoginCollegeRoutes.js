const express = require("express");
const {
    signupCollege,
    loginCollege,
} = require("../controllers/CollegeController.js");

const routers = express.Router();

routers.route("/registerCollege").post(signupCollege);
routers.route("/loginCollege").post(loginCollege);

module.exports = routers;
