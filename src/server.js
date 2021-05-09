const express = require('express')
require('dotenv').config();
const app = express();
const connectDB = require('../config/db');
const fileRouter = require('./routes/file');
const cors = require('cors')

const corsOptions = {
    origin: process.env.ALLOWED_CLIENTS.split(',')
}

app.use(cors(corsOptions))

connectDB()

app.use(express.json())
app.use('/api', fileRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening at PORT ${PORT}`);
})