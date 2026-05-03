const mongodb = require('../db/connect');
const {ObjectId} = require('mongodb');

async function getContacts(req, res, next) {
  try {
    const db = mongodb.getDb();
    const collection = db.collection('contacts');

  // GET one contact
  if(req.params.id) {
    const contact = await collection.findOne({
      _id: new ObjectId(req.params.id)
    });

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    return res.json(contact);
  }
 
  // GET All
 const contacts = await collection.find().toArray();
 res.json(contacts);
  } catch(error) {
    next(error);
  }
};

module.exports = { getContacts };