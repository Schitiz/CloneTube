const express = require('express');
const passport = require('passport');

const routes = require('../routes');
const middleware = require('../middlewares');
const userController = require('../controllers/userController');
const videoController = require('../controllers/videoController');

const globalRouter = express.Router();

globalRouter.get(routes.join, middleware.onlyPublic, userController.getJoin);
globalRouter.post(
  routes.join,
  middleware.onlyPublic,
  userController.postJoin,
  userController.postLogin
);

globalRouter.get(routes.login, middleware.onlyPublic, userController.getLogin);
globalRouter.post(
  routes.login,
  middleware.onlyPublic,
  userController.postLogin
);

globalRouter.get(routes.home, videoController.home);
globalRouter.get(routes.search, videoController.search);
globalRouter.get(routes.logout, middleware.onlyPrivate, userController.logout);

globalRouter.get(routes.github, userController.githubLogin);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate('github', { failureRedirect: routes.login }),
  userController.postGithubLogin
);

module.exports = globalRouter;
