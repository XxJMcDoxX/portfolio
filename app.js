var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var models = require('./models');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var loginRouter = require('./routes/login');

var app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next(createError(404));
});

models.sequelize.sync().then(function() {
    console.log("DB Sync'd up")
  });
  
  module.exports = app;
