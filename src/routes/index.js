const { Router } = require('express');

const EventoRotas = require('./EventRoutes');

const rotas = Router();

rotas.use('/eventos', EventoRotas);

module.exports = rotas;