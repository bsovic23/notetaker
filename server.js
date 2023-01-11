// packages
const notes = require('./db/db.json');
const fs = require('fs');
const path = require('path');
const express = require('express');

// setting up server
const PORT = process.env.PORT || 3001;
const app = express();

// routes
const noteRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', noteRoutes);
app.use('/', htmlRoutes);

// 
app.listen(3001 || process.env.PORT, (req, res) =>{
    console.log(`API now on port ${PORT}!`);
});