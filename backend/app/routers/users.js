var express = require('express');
var router = express.Router();

var usersController = require('../controllers/users');
let authController = require('../controllers/auth');

router.get('/', usersController.usersList);
router.get('/:id', usersController.getByID);

router.put('/:id', usersController.processEdit);

router.delete('/:id', usersController.processDelete);

router.post('/', usersController.processAdd);

router.put('/setadmin/:userID', 
    authController.logtoken,
    authController.validateToken, 
    usersController.setAdmin);


module.exports = router;
