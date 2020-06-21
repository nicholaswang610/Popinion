require('dotenv').config({path: __dirname + '../../../../.env'});
const mysql = require('mysql');

//database
const database = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database:process.env.DATABASE
});

database.connect(err=>{
    if(err){
        console.log('error connecting ' + err.stack);
        return;
    }else{
        console.log('MYSQL connected');
    }
});

module.exports = database;
