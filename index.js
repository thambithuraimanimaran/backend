const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 4000;

app.get("/local",(req,res)=>{
    const dirpath= path.join(__dirname,"current-timestamp");
    const late = new Date();
const data =late.toUTCString();
fs.writeFileSync(`${dirpath}/date-time.txt`,data,(err)=>{
    console.log(err);
})
    res.sendFile(`${dirpath}/date-time.txt`);
})





app.listen(PORT,(err)=>{
    console.log("work started")
})