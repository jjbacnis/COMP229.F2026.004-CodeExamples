var express = require('express');
var router = express.Router();

var projectsController = require('../controllers/projectsController.js');
var authController = require('../controllers/auth.js');

router.post('/', projectsController.processAdd);
router.get('/', authController.logtoken, authController.validateToken, projectsController.projectsList);

module.exports = router;