var createError = require('http-errors');
var express = require('express');
var mongoose = require('mongoose');
var empR = require('./views/emp');
var path = require('path');
//..mon
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentRouter = require('./routes/students');
var employeesRouter = require('./routes/employees');
var teamsRouter = require('./routes/teams');
//..var empR = req(routes/emp)

var app = express();
//..mongoose.connect("mongodb://0.0.0.0:27017/cui").then
mongoose.connect("mongodb://0.0.0.0:27017/cui")
.then((db) => {
    console.log("Database connected");
})
.catch((err) => {
  return err;
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/students',studentRouter);
app.use('/employees',employeesRouter);
app.use('/teams',teamsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
