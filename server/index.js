// Express Server
// FIX ME :(
  
  const express = require('express');
  const path = require('path');
  const router = require('./router');
  const port = 3001;
  const bodyParser = require('body-parser');

  const server = express();

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({extended: true}));
  
  server.use('/', express.static(path.join(__dirname + '/../client/dist')));
  
  server.use('/api', router);

  server.listen(port, () => console.log('Connected to port: 3001'));