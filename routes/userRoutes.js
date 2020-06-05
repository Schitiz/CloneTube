const express = require('express');

const routes = require('../routes');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.get(routes.users, userController.getAllUsers);
userRouter.get(routes.editProfile, userController.editProfile);
userRouter.get(routes.changePassword, userController.changePassword);
userRouter.get(routes.userDetail, userController.getUserDetails);

module.exports = userRouter;
