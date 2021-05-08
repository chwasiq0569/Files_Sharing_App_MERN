const express = require('express');
const { fileUpload } = require('../controller/file');
const router = express.Router();
const multer = require('multer');
const path = require('path');


let storage = multer.diskStorage({
    destination: (req, file, cb) =>  cb(null, './uploads'),
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
        cb(null, file.originalname)
    }
})

let upload = multer({
    storage,
    limit: { fileSize: 1000000 * 100 }
    //name attribute
})
// .single('myfile')

router.post('/file', upload.single('myfile'), fileUpload)

module.exports = router