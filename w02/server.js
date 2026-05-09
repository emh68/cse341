const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const contacts = require('./routes/contacts');
const mongodb = require('./db/connect');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use("/", contacts)


mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`app listening on http://localhost:${port}`);
    });
  }
});
