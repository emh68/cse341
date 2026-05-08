const express = require('express');
const router = new express.Router();
const { getAllContacts, getSingleContact, createContact, deleteContact, updateContact } = require('../controllers/contactsController');

router.get('/', getAllContacts);
router.get('/:id', getSingleContact);
router.post('/', createContact);
router.delete('/:id', deleteContact);
router.put('/:id', updateContact);

module.exports = router;