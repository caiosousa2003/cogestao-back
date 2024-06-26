const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  description: String,
  category: String,
  image: String,
});

const EventModel = mongoose.model("events", EventSchema);

module.exports = EventModel;