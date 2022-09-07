const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const swaggerJSDoc = require('swagger-jsdoc');
const bodyParser = require('body-parser');

// TODO update this to use env variables
const mongoUri = 'mongodb://127.0.0.1:27017/test';

const initialize = async () => {
  console.info('connecting...');
  await mongoose.connect(mongoUri);

  const db = mongoose.connection;
  db.on('error', function () {
    throw new Error('unable to connect to database at ' + mongoUri);
  });

  const app = express();

  // swagger definition
  const swaggerDefinition = {
    info: {
      title: 'Leafihome Frontend Test Swagger API',
      version: '1.0.0',
      description: 'Rest APIs for the front end programming test',
    },
    host: 'localhost:3001',
    basePath: '/',
  };

  // options for the swagger docs
  const options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./*.js', './models/*.js'],
  };

  // initialize swagger-jsdoc
  app.swaggerSpec = swaggerJSDoc(options);
  app.use('/swagger', express.static('../swagger'));
  app.use('/', express.static('../dist'));

  //loosen up CORS for people building their own react node server for their html
  app.use(function (req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
  });

  require('./models/company');
  require('./models/person');
  require('./routes')(app);

  app.listen(3001);
  console.log('Listening on port 3001...');
};

initialize().catch((err) => console.error(err));
