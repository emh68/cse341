const express = require('express');
const router = new express.Router();
const {getContacts} = require('../controllers/contactsController');

router.get('/', getContacts);
router.get('/:id', getContacts);

module.exports = router;