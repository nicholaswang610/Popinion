const express = require('express');
const router = express.Router();
const database = require('../database.js')

//'router.get('') code here
router.get('/', (req,res) => {
    database.query('SELECT DISTINCT title FROM movies', (err, result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send({titles: result})
        }
    });
});

router.get('/:title', (req,res) => {
    const title = req.params.title;
    database.query('SELECT * FROM movies WHERE title = ?', [title], (err,result) => {
        if(err){
            console.log(err);
        }
        else{
            res.send({reviews: result})
        }
    });
});

module.exports = router;