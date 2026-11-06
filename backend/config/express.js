const express = require('express');
var createError = require('http-errors');
var logger = require('morgan');
var cors = require('cors');
require('dotenv').config();

// Import Routers
var indexRouter = require('../app/routers/indexRouter.js');
var projectsRouter = require('../app/routers/projectsRouter.js');
var usersRouter = require('../app/routers/usersRouter.js');
var authRouter = require('../app/routers/auth.js');

// Configure Express
const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', indexRouter);
app.use('/api/projects', require('../app/routers/projectsRouter.js'));
app.use('/api/users', require('../app/routers/usersRouter.js'));
app.use('/api/auth', require('../app/routers/auth.js'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  // render the error json
  res.status(err.status || 500);
  res.json(
    {
      success: false,
      message: err.message
    }
  );
});

module.exports = app;