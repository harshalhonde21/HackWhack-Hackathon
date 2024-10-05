const College = require("../models/College.js");

// College Registration
exports.signupCollege = async (req, res) => {
    try {
        const { name, password } = req.body;

        // Check if college already exists
        const existingCollege = await College.findOne({ name });
        if (existingCollege) {
            return res.status(400).json({
                success: false,
                message: "College name is already taken",
            });
        }

        const newCollege = new College({ name, password });
        const savedCollege = await newCollege.save();

        res.status(201).json({
            success: true,
            message: "College registered successfully",
            college: savedCollege,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};


exports.loginCollege = async (req, res) => {
    try {
        const { name, password } = req.body;

        // Validate if both fields are provided
        if (!name || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide both college name and password",
            });
        }

        // Check if the college exists
        const college = await College.findOne({ name }).select('+password');
        if (!college) {
            return res.status(400).json({
                success: false,
                message: "Invalid college name or password",
            });
        }

        // Compare the provided password with the hashed one
        const isPasswordMatch = await college.comparePassword(password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid college password",
            });
        }

        res.status(200).json({
            success: true,
            message: "Login successful",
            college: {
                id: college._id,
                name: college.name,
            },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};