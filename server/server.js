const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

const mongoURI = 'mongodb://localhost/nwt';
mongoose.connect(mongoURI);

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.log('error handler', err);
  res.status(500).send('Internal Server Error');
});

app.listen(3000);
console.log('Node server listening on port 3000');
