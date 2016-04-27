var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var Sighting = require('./Sighting');

var app = express();
app.use(bodyParser.json());
mongoose.set("debug", true);
mongoose.connect('mongodb://localhost/birds-mongoose');

mongoose.connection.once('open', function() {
  console.log("connected to MongoDB");
});

var port = 3000;

app.post('/api/sighting', function(req, res) {
  var sighting = new Sighting(req.body);
  sighting.save(function(err, s) {
    if(err) {
      res.status(500).send(err);
    }
    else {
      res.send(s);
    }
  });
});

app.get('/api/sighting', function(req, res) {
  console.log('GET sighting');
  res.end();
});

app.delete('/api/sighting', function(req, res) {
  console.log('DELETE sighting');
  res.end();
});

app.put('/api/sighting', function(req, res) {
  console.log('PUT sighting');
  res.end();
});

app.listen(port, function() {
  console.log("Started server on port", port);
});
