const routes = require('express').Router();
const contactsFunction = require('../controllers/contactsController');

routes.get('/', contactsFunction);

module.exports = routes;