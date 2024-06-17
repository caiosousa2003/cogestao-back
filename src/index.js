require("dotenv").config({path: '../.env'});

const app = require("./App");
const startDB = require("./Config/mongodb");

startDB();

app.listen(8000);