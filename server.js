const express = require('express');
const bodyParser  = require('body-parser');
// create express app
const app = express();
//const routes = require('./app/routes/note_routes.js')
const port = 8000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));

//Configuring Database
//var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017');

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})

// define a simple route
app.get('/', function(req, res){
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

require('./app/routes')(app, {});
app.listen(port, () => {
  console.log('We are live on '+ port);
});
