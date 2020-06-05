const express = require('express');

const routes = require('../routes');
const videoController = require('../controllers/videoController');

const videoRouter = express.Router();

videoRouter.get(routes.videos, videoController.getAllVideos);
videoRouter.get(routes.upload, videoController.uploadVideo);
videoRouter.get(routes.videoDetail, videoController.getVideoDetails);
videoRouter.get(routes.editVideo, videoController.editVideo);
videoRouter.get(routes.deleteVideo, videoController.deleteVideo);

module.exports = videoRouter;
