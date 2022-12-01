const notes = require('./db/db.json');

const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();






// routes
app.get('/api/data', (req, res) => {
    res.json(notes);
});


//
app.listen(3001, (req, res) =>{
    console.log(`API now on port ${PORT}!`);
});