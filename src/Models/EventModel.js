const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  description: String,
  category: String,
  image: String,
});

const EventModel = mongoose.model("Events", EventSchema);

module.exports = EventModel;