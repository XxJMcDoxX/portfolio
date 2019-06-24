var express = require('express');
var router = express.Router();
var users = require('../models/users');
const mysql = require('mysql2');

var connection = mysql.createConnection({
  host: '127.0.0.4',
  user: 'root',
  password: 'Password1!',
  database: 'port'
});

connection.connect(function(err) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Yay! You are connected to the database!');
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;