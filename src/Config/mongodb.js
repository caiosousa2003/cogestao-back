const mongoose = require("mongoose");
require('dotenv').config();

async function startDB() {
  await mongoose.connect(process.env.DATABASE_URI);
}

module.exports = startDB;