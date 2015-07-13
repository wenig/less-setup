var express = require('express');
var app = express();
var Knex = require('knex');
var knexConfig = require('./knexfile');
var Model = require('moron').Model;

var knex = Knex(knexConfig.development);

Model.knex(knex);

app.get('/', function(req, res){
  res.send('hello');
});
app.listen(3000);