const express = require('express');
const router = new express.Router();
const { getAllContacts, getSingleContact } = require('../controllers/contactsController');

router.get('/', getAllContacts);
router.get('/:id', getSingleContact);

module.exports = router;