const express = require('express');
const app = express();
const port = 8080;
const contactsRoute = require('./routes/contacts.js');
// const mongodb = require('./db/connect');
const cors = require('cors');

app.use(cors());
app.use("/contacts", contactsRoute)

// mongodb.initDb((err, db) => {
//     if (err) {
//         console.log(err);
//     } else {
      app.listen(port, () => {
        console.log(`app listening on http://localhost:${port}`);
      });
//     }
// });
