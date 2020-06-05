const express = require('express');

const routes = require('../routes');

const videoRouter = express.Router();

videoRouter.get(routes.videos, (req, res) => res.send('Videos'));
videoRouter.get(routes.upload, (req, res) => res.send('upload'));
videoRouter.get(routes.videoDetail, (req, res) => res.send('videoDetail'));
videoRouter.get(routes.editVideo, (req, res) => res.send('editVideo'));
videoRouter.get(routes.deleteVideo, (req, res) => res.send('deleteVideo'));

module.exports = videoRouter;