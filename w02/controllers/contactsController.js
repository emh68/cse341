const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');

// GET All (Read All)
async function getAllContacts(req, res, next) {
  try {
    const db = mongodb.getDb();
    const contacts = await db.collection('contacts').find().toArray();
    res.json(contacts);
  } catch (error) {
    next(error);
  }
}

// GET one contact (Read One)
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

// POST contact (Create)
async function createContact(req, res, next) {
  try {
    const db = mongodb.getDb();
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    //Check if any required field is missing
    if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
      return res.status(400).json({ message: "All fields are required. Please check your data." });
    }
    const result = await db.collection('contacts').insertOne({ firstName, lastName, email, favoriteColor, birthday });

    res.status(201).json({ insertedId: result.insertedId });
  } catch (error) {
    next(error);
  }
};

// DELETE contact (delete)
async function deleteContact(req, res, next) {
  try {
    const db = mongodb.getDb();
    const collection = db.collection('contacts');
    const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Contact not found in database. Nothing was deleted." });
    }

    return res.status(200).json({ message: "Contact successfully deleted from database." });
  } catch (error) {
    next(error);
  }
}

// PUT contact (Update)
async function updateContact(req, res, next) {
  try {
    const db = mongodb.getDb();
    const collection = db.collection('contacts');
    const { firstName, lastName, email, favoriteColor, birthday } = req.body
    const result = await collection.updateOne({
      _id: new ObjectId(req.params.id)
    }, { $set: { firstName, lastName, email, favoriteColor, birthday } });

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Contact not found in database. Nothing updated." });
    }

    res.status(200).json({ message: "Contact successfully updated in database." });
  } catch (error) {
    next(error);
  }
}

module.exports = { getAllContacts, getSingleContact, createContact, deleteContact, updateContact };