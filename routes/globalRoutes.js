const express = require('express');

const routes = require('../routes');
const userController = require('../controllers/userController');
const videoController = require('../controllers/videoController');

const globalRouter = express.Router();

globalRouter.get(routes.join, userController.getJoin);
globalRouter.post(routes.join, userController.postJoin);

globalRouter.get(routes.login, userController.getLogin);
globalRouter.post(routes.login, userController.postLogin);

globalRouter.get(routes.home, videoController.home);
globalRouter.get(routes.search, videoController.search);
globalRouter.get(routes.logout, userController.logout);

module.exports = globalRouter;
