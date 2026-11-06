var express = require('express');
var router = express.Router();

var usersController = require('../controllers/usersController.js');

router.post('/', usersController.processAdd);
router.get('/', usersController.usersList);

module.exports = router;