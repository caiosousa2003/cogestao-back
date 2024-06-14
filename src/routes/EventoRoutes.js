const { Router } = require('express');
const EventoController = require('../Controllers/EventoController');
const EventoValidator = require('../Validators/EventoValidator');
const verificarJwt = require('../Middlewares/verificarJwt');
const verificarAdmin = require('../Middlewares/verificarAdmin');

const EventoRotas = Router();

EventoRotas.post('/', verificarJwt, verificarAdmin, EventoValidator.create, EventoController.create);
EventoRotas.get('/', verificarJwt, EventoController.read);
EventoRotas.delete('/:id', verificarJwt, verificarAdmin, EventoValidator.destroy, EventoController.delete);
EventoRotas.put('/:id', verificarJwt, verificarAdmin, EventoValidator.update, EventoController.update);

module.exports = EventoRotas;