// Imports
var express = require('express');
var bodyParser = require('body-parser');
var apiRouter = require('./apiRouter').router;
var models = require('./models');

// Instantiate server
var server = express();

// Body Parser configuration
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// Configure routes
server.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Bonjour sur mon super serveur</h1>');

});

models.sequelize.sync();

server.use('/api/', apiRouter);

// Launch server
server.listen(8080, function() {
    console.log('Serveur en écoute');
});