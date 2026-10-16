var express = require('express');
var router = express.Router();

var projectsController = require('../controllers/projectsController.js');

router.post('/', projectsController.processAdd);
router.get('/', projectsController.projectsList);
router.get('/:id', projectsController.getByID);
router.put('/:id', projectsController.processEdit);
router.delete('/:id', projectsController.processDelete);

module.exports = router;