var express = require('express');
var router = express.Router();

var projectsController = require('../controllers/projectsController.js');

router.post('/', projectsController.processAdd);
router.get('/', projectsController.projectsList);

module.exports = router;