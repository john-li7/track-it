const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const snapshotController = require('./controllers/snapshotController');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/snapshots', snapshotController.getAllSnapshots, (req, res) => {
  return res.status(200).json(res.locals.snapshots);
});

app.post('/snapshots', snapshotController.createSnapshot, (req, res) => {
  // res.redirect('/snapshots'); //does not work with react router
  return res.status(200);
});

// to only run build and get static when in production, not development
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
