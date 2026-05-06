const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');

// GET All
async function getAllContacts(req, res, next) {
  try {
    const db = mongodb.getDb();
    const contacts = await db.collection('contacts').find().toArray();
    res.json(contacts);
  } catch (error) {
    next(error);
  }
}

// GET one contact
async function getSingleContact(req, res, next) {
  try {
    const db = mongodb.getDb();
    const collection = db.collection('contacts');
    const contact = await collection.findOne({
      _id: new ObjectId(req.params.id)
    });

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    return res.json(contact);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllContacts, getSingleContact };