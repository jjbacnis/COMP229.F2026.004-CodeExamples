var express = require('express');
var router = express.Router();

var projectsController = require('../controllers/projects');
var authController = require('../controllers/auth');

router.get('/', projectsController.projectsList);

router.get('/:id', projectsController.getByID);
router.delete('/:id', projectsController.processDelete);

router.put('/:id', projectsController.processEdit);
router.post('/', authController.logtoken, projectsController.processAdd);


module.exports = router;
