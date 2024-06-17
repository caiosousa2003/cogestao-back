const { Router } = require('express');

const EventRotas = require('./EventRoutes');

const routes = Router();

routes.use('/events', EventRotas);

module.exports = routes;