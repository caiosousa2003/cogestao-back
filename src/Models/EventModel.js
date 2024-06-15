const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventoSchema = new Schema({
  nome: {
    type: String,
    unique: true,
  },
  descricao: String,
  equipe: String,
});

const EventoModel = mongoose.model("Eventos", EventoSchema);

module.exports = EventoModel;