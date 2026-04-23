const routes = require('express').Router();
const responseFunction = require('../controllers/homeController');

routes.get('/', responseFunction);

module.exports = routes;