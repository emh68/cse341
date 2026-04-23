const express = require('express');
const app = express();
const port = 3000;

// Create route
app.use('/', require('./routes/home.js'));

// Start server and listen for requests
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});