const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({

    certificateName:{
        type: String,
        required:[true, 'File Name must required'],
    },
    fileUpload:{
        type: String,
        required: [true, "Upload your file"],
    },
   
})


const File = mongoose.model("fileHack",fileSchema)
module.exports = File;