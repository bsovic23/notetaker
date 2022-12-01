const notes = require('./db/db.json');

const express = require('express');
const app = express();






// routes
app.get('/api/data', (req, res) => {
    res.json(notes);
});


//
app.listen(3001, (rec, res) =>{
    console.log(`API now on server 3001!`);
});