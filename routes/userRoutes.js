const express = require('express');

const routes = require('../routes');
const middleware = require('../middlewares');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.get(routes.users, userController.getAllUsers);
userRouter.get(
  routes.editProfile,
  middleware.onlyPrivate,
  userController.editProfile
);
userRouter.get(
  routes.changePassword,
  middleware.onlyPrivate,
  userController.changePassword
);
userRouter.get(routes.userDetail(), userController.getUserDetails);

module.exports = userRouter;
