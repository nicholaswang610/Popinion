require('dotenv').config({path: __dirname + '../../../../.env'});
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

//database
const database = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database:process.env.DATABASE
});

app.get('/add', (req,res)=>{
    const firstName=req.query;
    res.send(firstName);
});

database.connect(err=>{
    if(err){
        console.log('error connecting ' + err.stack);
        return;
    }
});

app.listen(PORT, () => {console.log('server started on port ' + PORT)});