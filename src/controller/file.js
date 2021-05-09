const File = require('../model/file');
const { v4: uuid4 } = require('uuid')

module.exports.fileUpload = async (req, res) => {
    console.log(req.file)
    if(!req.file) return res.status(400).json({ error: 'All Fields are required' })
   
    const file = new File({
        filename: req.file.filename,
        uuid: uuid4(),
        path: req.file.path,
        size: req.file.size
    })
    const response = await file.save();
    return res.send({ file: `${process.env.APP_BASE_URL}/files/${response.uuid}` });
}

module.exports.show = (req, res) => {
    File.findOne({ uuid: req.params.uuid }).then(file => {
        if(file){
            return res.send({ file: file })
        }
        else{
            return res.status(404).send({ err: "File not Found" })
        }
    }).catch((err) => {
        return res.status(404).send({ err: "File not Found" })
    })
}

module.exports.downloadFile = (req, res) => {
    File.findOne({ uuid: req.params.uuid }).then(file => {
        if(file){
            const filePath = `${__dirname}../../../${file.path}`
            return res.download(filePath)
        }
        else{
            return res.status(404).send({ err: "File not Found" })
        }
    }).catch((err) => {
        return res.status(404).send({ err: "File not Found" })
    })
}

