const express = require('express');
const app = express();
const port = 8080;
const homeController = require('./controllers/homeController');

// Define route for home page
app.get('/', homeController.getHome);

// Start server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});