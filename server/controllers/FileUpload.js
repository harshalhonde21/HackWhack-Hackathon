const file = require("../models/fileModel");

// to upload the file
exports.fileUpload = async(req, res) => {
    try{
        const{certificateName, fileUpload} = req.body;

        const newFile = new file({
            certificateName,
            fileUpload
        });

        const saveFile = await newFile.save()

        res.status(201).json({
            success: true,
            message: "Document Upload Successfully!!",
            saveFile,
        });
    }catch(error){
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};


exports.getFileList = async (req, res) => {
    try {
        const files = await file.find();

        res.status(200).json({
            success: true,
            files: files
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};