const express = require ("express");
const mongoose = require ("mongoose");
const app = express ();

// installing middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// requiring (importing) the routes into the app.js
require("./config/mongoose.config");
require("./routes/joke.routes")(app);







const portNumber = 8000;
app.listen(portNumber, () => console.log(`Server is connected to port ${portNumber}`))

