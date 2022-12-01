const notes = require('./db/db.json');
const fs = require('fs');
const path = require('path');

const noteRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', noteRoutes);
app.use('/', htmlRoutes);

//
app.listen(3001, (req, res) =>{
    console.log(`API now on port ${PORT}!`);
});