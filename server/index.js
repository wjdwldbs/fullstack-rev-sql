// Express Server
// FIX ME :(
  const express = require('express');
  const path = require('path');

  const server = express();
  
  server.use('/', express.static(path.join(__dirname + '/../client/dist')));
  
  server.get('/name', (req, res) => {
    res.status(200).send('This is your get request')
  })
  
  server.post('/name', (req, res) => {
    res.status(200).send('This is your post request')
  })
  
  server.put('/name', (req, res) => {
    res.status(200).send('This is your put request')
  })
  
  server.delete('/name', (req, res) => {
    res.status(200).send('This is your delete request')
  })

  server.listen(port, () => console.log('Connected to port: 3000'))