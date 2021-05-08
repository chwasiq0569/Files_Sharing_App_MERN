const express = require('express')
require('dotenv').config();
const app = express();
const connectDB = require('../config/db');
const fileRouter = require('./routes/file');

connectDB()

app.use('/api', fileRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening at PORT ${PORT}`);
})