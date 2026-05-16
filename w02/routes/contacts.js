const express = require('express');
const router = new express.Router();
const { getAllContacts, getSingleContact, createContact, deleteContact, updateContact } = require('../controllers/contactsController');

router.get('/', getAllContacts);
router.get('/:id', getSingleContact);
router.post('/', (req, res, next) => {
    /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Add a new contact using the master template',
        schema: { $ref: '#/definitions/Contact' }
    } */
    createContact(req, res, next)
});
router.put('/:id', (req, res, next) => {
    /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Update an existing contact using the master template',
        schema: { $ref: '#/definitions/Contact' }
    } */
    updateContact(req, res, next);
});
router.delete('/:id', deleteContact);

module.exports = router;