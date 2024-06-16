const { Router } = require('express');

const EventRotas = require('./EventRoutes');

const routes = Router();

routes.use('/eventos', EventRotas);

module.exports = routes;