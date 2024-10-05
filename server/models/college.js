const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your college name"],
        maxLength: [30, "College name cannot exceed 30 characters"],
        minLength: [4, "College name should have more than 4 characters"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minLength: [8, "Password should be at least 8 characters long"],
        select: false, // Password will not be returned by default in queries
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Encrypt password before saving
collegeSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

// Method to compare entered password with the hashed password
collegeSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const College = mongoose.model('collegeLogin', collegeSchema);
module.exports = College;
