const data = require('./db/db.json');

const express = require('express');
const app = express();






// routes
app.get('/api/data', (req, res) => {
    res.send('hello!');
});


//
app.listen(3001, (rec, res) =>{
    console.log(`API now on server 3001!`);
});