const { Router } = require('express');
const EventController = require('../Controllers/EventController');
const EventValidator = require('../Validators/EventValidator');

const EventRoutes = Router();

EventRoutes.post('/', EventValidator.create, EventController.create);
EventRoutes.get('/', EventController.read);
EventRoutes.delete('/:id', EventValidator.destroy, EventController.delete);
EventRoutes.put('/:id', EventValidator.update, EventController.update);

module.exports = EventRoutes;