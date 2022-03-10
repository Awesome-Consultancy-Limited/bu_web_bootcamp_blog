const express = require("express");
const db = require("./models");
var indexRouter = require('./routes/index');
var path = require('path');
var cors = require('./cors');

const app = express();
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));
/* 
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
}); */

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to BU api application." });
});

// set port, listen for requests
app.use('/api/v1', indexRouter);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});