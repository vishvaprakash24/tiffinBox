const express = require('express')
const app = express()
const mongoose = require("mongoose")
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
const path = require('path');
const { log } = require('console')

// use PORT environment variable if exist else use 3000
const PORT = process.env.PORT || 3000 

// databse connection

mongoose.connect("mongodb://localhost:27017/tiffin").then(()=>{
    console.log("connected successfully");
}).catch((err)=>{
    console.log(err);
})



// assets kaha par rakha hai ye show kar rha hai taaki css and js link ho sake html se.
app.use(express.static('public'))



// set template engine
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

require('./routes/web')(app)

app.listen(PORT, () => {
    console.log('listening on port 3000');
})