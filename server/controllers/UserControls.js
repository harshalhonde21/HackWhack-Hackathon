const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const { createToken } = require("../middlewares/auth");

exports.registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      number,
      dob,
      state_of_origin,
      address,
      fatherName,
      occupation,
      annualIncome,
      motherName,
      occupationMother,
      annualIncomeMother,
      uniqueId,
    } = req.body;

    const hashPass = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashPass,
      number,
      dob,
      state_of_origin,
      address,
      fatherName,
      occupation,
      annualIncome,
      motherName,
      occupationMother,
      annualIncomeMother,
      uniqueId,
    });

    const token = createToken(user._id, user.email);

    res.status(201).json({
      success: true,
      message: "User registered",
      user,
      token,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please Enter email and password",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User does not exists",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Wrong Credentials",
      });
    } else {
      const token = createToken(user._id, user.email);

      res.status(200).json({
        success: true,
        message: "User Logged In successfully",
        token,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.isLogin = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(200).json({
        success: true,
        isLogin: false,
      });
    }

    if (user) {
      return res.status(200).json({
        success: true,
        isLogin: true,
        user,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get User Details
exports.getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      message: err.message,
    });
  }
};
