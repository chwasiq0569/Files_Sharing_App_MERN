require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = () => {

    //  mongoose.connect(process.env.DB_CONENCTION_STRING, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true })
     mongoose.connect(process.env.DB_CONENCTION_STRING,{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true }).then(() => {
        console.log("DB Connection Established");   
     }).catch(() => {
        console.log("Connection Failed");   
    })


    //  const connection = mongoose.connection;

    //  connection.once('open', () => {
    //      console.log("DB Connection Established");   
    //  }).catch(() => {
    //      console.log("Connection Failed");   
    //  })

}

module.exports = connectDB