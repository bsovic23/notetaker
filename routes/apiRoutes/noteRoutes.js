const router = require('express').Router();

const { createNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

// note routes

// Get notes
router.get('/notes', (req, res) => {
    res.json(notes);
});

// Post note
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNote(req.body, notes);

    res.json(note);
});

module.exports = router;