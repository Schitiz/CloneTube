const express = require('express');

const routes = require('../routes');

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send('user index'));
userRouter.get(routes.editProfile, (req, res) => res.send('user edit'));
userRouter.get(routes.changePassword, (req, res) =>
  res.send('Change Password')
);
userRouter.get(routes.userDetail, (req, res) => res.send('User Details'));

module.exports = userRouter;
