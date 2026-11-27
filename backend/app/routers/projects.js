var express = require('express');
var router = express.Router();

var projectsController = require('../controllers/projects');
var authController = require('../controllers/auth');

router.get('/', projectsController.projectsList);

router.get('/:id', authController.validateToken, authController.logtoken, projectsController.getByID);
router.delete('/:id', authController.validateToken, authController.logtoken, projectsController.hasAuthorization, projectsController.processDelete);

router.put('/:id', authController.validateToken, authController.logtoken, projectsController.hasAuthorization, projectsController.processEdit);
router.post('/', authController.validateToken, authController.logtoken, projectsController.processAdd);


module.exports = router;
