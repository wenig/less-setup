var express = require('express');
var app = express();
var ve = require('./ve_mapper');

//*****************database
// var Knex = require('knex');
// var knexConfig = require('./knexfile');
// var Model = require('moron').Model;
// var Table = require('./models/Table');
// var knex = Knex(knexConfig.development);
// Model.knex(knex);

// app.get('/', function(req, res, next){
//   Table
//     .query()
//     .then(function (rows) { res.send(rows); })
//     .catch(next);
// });

//*******************end
app.get('/hello_world', function(req, res){
  res.send(ve.render('hello_world'));
})
app.listen(3000);