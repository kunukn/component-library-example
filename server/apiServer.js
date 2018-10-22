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

app.post('/comments', (req, res, next) => {
  res.json(db.comments);
});

app.get('/profile', (req, res, next) => {
  res.json(db.profile);
});
