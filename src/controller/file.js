const File = require('../model/file');
const { v4: uuid4 } = require('uuid')

module.exports.fileUpload = async (req, res) => {
    console.log(req.file)
    if(!req.file) return res.status(402).json({ error: 'All Fields are required' })
   
    const file = new File({
        filename: req.file.filename,
        uuid: uuid4(),
        path: req.file.path,
        size: req.file.size
    })
    const response = await file.save();
    return res.send({ file: `${process.env.APP_BASE_URL}/files/${response.uuid}` });
}