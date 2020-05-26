require('dotenv').config({path: __dirname + '../../../../.env'});
const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = process.env.PORT || 8080;

//database
const database = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database:process.env.DATABASE
});

database.connect();

//app routing

app.get('/', (req,res)=>{
    database.query('SELECT first_name FROM users WHERE id=1', (err,results) =>{
        console.log(results);
    });

});

app.listen(PORT, () => {console.log('server started on port ' + PORT)});