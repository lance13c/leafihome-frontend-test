var express = require('express');
var mongoose = require('mongoose');
var fs = require('fs');
var swaggerJSDoc = require('swagger-jsdoc');
var bodyParser = require('body-parser');

var mongoUri = 'mongodb://localhost/noderest';
mongoose.connect(mongoUri, { useMongoClient: true });

var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUri);
});

var app = express();

// swagger definition
var swaggerDefinition = {
  info: {
    title: 'Leafihome Frontend Test Swagger API',
    version: '1.0.0',
    description: 'Rest APIs for the front end programming test',
  },
  host: 'localhost:3001',
  basePath: '/',
};

// options for the swagger docs
var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./*.js', './models/*.js'],
};

// initialize swagger-jsdoc
app.swaggerSpec = swaggerJSDoc(options);
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/swagger', express.static('../swagger'));
app.use('/', express.static('../dist'));

//loosen up CORS for people building their own react node server for their html
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

require('./models/company.js');
require('./models/person.js');
require('./routes.js')(app);

app.listen(3001);
console.log('Listening on port 3001...');
