// packages
const notes = require('./db/db.json');
const fs = require('fs');
const path = require('path');

// routes
const noteRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// setting up server
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', noteRoutes);
app.use('/', htmlRoutes);

// 
app.listen(3001, (req, res) =>{
    console.log(`API now on port ${PORT}!`);
});