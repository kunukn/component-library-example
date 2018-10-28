var express = require('express');
var parseArgs = require('minimist');
var db = require('./db.json');

var argv = parseArgs(process.argv.slice(2));
//console.dir(argv);

var port = argv['port'] || '5000';
var app = express();
app.listen(port, () => {
  console.log('Server running on http:\\\\localhost:' + port);
});

app.get('/', (req, res, next) => {
  res.json(db);
});

app.get('/posts', (req, res, next) => {
  res.json(db.posts);
});

app.get('/posts/1', (req, res, next) => {
  res.json(db.posts);
});

app.post('/comments', (req, res, next) => {
  res.json(db.comments);
});

app.get('/profile', (req, res, next) => {
  res.json(db.profile);
});

app.get('/400', (req, res, next) => {
  res.status(400);
  res.json({ data: ['The data field is required.'] });
});

app.get('/500', (req, res, next) => {
  res.status(500);
  res.json({ error: ['some error.'] });
});
