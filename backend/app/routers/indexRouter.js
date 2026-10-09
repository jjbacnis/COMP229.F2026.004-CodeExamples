var express = require('express');
var router = express.Router();

var indexController = require('../controllers/indexController.js');

router.get('/', indexController.helloWorld);
router.get('/welcome', indexController.welcome);

module.exports = router;