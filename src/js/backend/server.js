require('dotenv').config({path: __dirname + '../../../../.env'});
const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

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

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.post('/signup', async (req,res)=>{
    const {email,password, firstName, lastName} = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);

    database.query('SELECT * FROM users WHERE email = ?', [email], (err,result)=>{
        if(err){
            res.send({msg: err});
        }else if(result.length > 0){
            res.send({error: true, msg: "An account was already created with this email"});
        }
        else if(result.length === 0){
            database.query('INSERT INTO users SET ?', {first_name: firstName, last_name: lastName, email: email, pass: hashedPassword}, (err, result) => {
                if(err){
                    console.log(err);
                }
            });
            res.send({error: false, msg: "Thank you! Your account has been created"});
        }
    });
});

app.post('/login', (req,res) => {
    const {email, password} = req.body;
    database.query('SELECT * FROM users WHERE email = ?', [email], async(err, result) => {
        if(result.length === 0){
            res.send({error: true, msg: "No account has been created with this email"});
        }
        else if(!(await bcrypt.compare(password, result[0].pass))){
            res.send({error: true, msg: "Email or password is incorrect"});
        }
        else if(await bcrypt.compare(password, result[0].pass)){
            const id = result[0].id;
            const firstName = result[0].first_name;
            const payload = {id: id, firstName: firstName};
            const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn:process.env.JWT_EXPIRES_IN});
            res.send({error: false, accessToken: accessToken});
        }
    });
});

app.get('/gaming', (req,res)=>{
    database.query('SELECT DISTINCT title FROM gaming', (err, result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.send({titles: result})
        }
        
    });
})

//middleware token auth
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) 
        return res.sendStatus(401);
    else{
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
            if(err)
                return res.sendStatus(403);
            else{
                req.payload = payload;
                next();
            }
        });
    }
}

app.listen(PORT, () => {console.log('server started on port ' + PORT)});