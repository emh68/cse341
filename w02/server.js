const express = require('express');
const app = express();
const port = 8080;
const contacts = require('./routes/contacts');
const mongodb = require('./db/connect');
const cors = require('cors');

app.use(cors());
app.use("/contacts", contacts)

mongodb.initDb((err, db) => {
    if (err) {
        console.log(err);
    } else {
      app.listen(port, () => {
        console.log(`app listening on http://localhost:${port}`);
      });
    }
});
