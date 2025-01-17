require('dotenv').config()

const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')));

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
})


app.listen(process.env.PORT,function(){console.log(`server is running on port ${process.env.PORT}`)})