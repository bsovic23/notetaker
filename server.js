const notes = require('./db/db.json');
const fs = require('fs');
const path = require('path');

const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// routes
app.get('/api/data', (req, res) => {
    res.json(notes);
});

app.post('/api/data', (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNote(req.body, notes);

    res.json(note);
});

function createNote(body, notesArray) {
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );    

    return(note);
};

// public routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

//
app.listen(3001, (req, res) =>{
    console.log(`API now on port ${PORT}!`);
});