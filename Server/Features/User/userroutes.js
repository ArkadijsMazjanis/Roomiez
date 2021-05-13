var express = require('express');
var router  = express.Router();
var userController = require('./USER.controller');



router.group('/user', function(userRouter) {

    userRouter.get('/me', userController.getUserByToken);
    userRouter.get('/allUsers', userController.getAllUsers);
    userRouter.get('/email/:email', userController.mongoGetByEmail);

});

module.exports = router;
