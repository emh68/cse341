const express = require('express');
const router = new express.Router();
const { getAllContacts, getSingleContact, createContact, deleteContact, updateContact } = require('../controllers/contactsController');

router.get('/contacts', getAllContacts);
router.get('/contacts/:id', getSingleContact);
router.post('/contacts', createContact);
router.delete('/contacts/:id', deleteContact);
router.put('/contacts/:id', updateContact);

module.exports = router;