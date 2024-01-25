const mongoose = require('mongoose')
const validator = require('validator')



const userSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true, "Please enter your name"],
        maxLength:[30, "Name cannot exceed 30 character"],
        minLength: [4,"Name should have more than 4 character"],
    },
    email:{
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate:[validator.isEmail, "Please enter a valid email"],
    },
    password:{
        type: String,
        required: [true, "Please enter a password"]
    },
    number:{
        type: Number,
        unique: true,
        required : [true, "Please enter your email"],
        maxLength:[10, "The number should only 10"],
    },
    dob:{
        type: Date,
        required: [true, 'Please provide the date of birth']
    },
    state_of_origin:{
        type: String,
        required: [true,'State of origin is required'],
    },
    address:{
        type: String,
        required: [true, 'Address should be mentioned'],
    },
    fatherName:{
        type: String,
        required: [true, 'father name should be provided'],
    },
    occupation:{
        type: String,
        required:[true, 'Occupation should be required']
    },
    annualIncome:{
        type:Number,
        required:[true, 'Income must required'],
        maxLength:[800000, "Income is above 800000 so you didn't get this scholarship"],
    },
    motherName:{
        type: String,
        required: [true, 'father name should be provided'],
    },
    occupationMother:{
        type: String,
        required:[true, 'Occupation should be required']
    },
    annualIncomeMother:{
        type:Number,
        required:[true, 'Income must required'],
        maxLength:[800000, "Income is above 800000 so you didn't get this scholarship"],
    },
    uniqueId:{
        type:String,
        required:[true, 'Must required the college Id to proceed'],
        unique: true,
    },
    files: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'fileHack',
    }],
    createdAt:{
        type: Date,
        default: Date.now
    }
})


const User = mongoose.model("User",userSchema)
module.exports = User ;