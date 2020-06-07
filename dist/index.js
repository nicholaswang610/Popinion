const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;

app.use(express.static('dist'));
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})
app.listen(PORT, () => {console.log('server started on port ' + PORT)});