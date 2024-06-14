const { Router } = require('express');

const EventoRotas = require('./EventoRoutes');

const rotas = Router();

rotas.use('/eventos', EventoRotas);

module.exports = rotas;