const express = require('express');

const routes = require('../routes');
const videoController = require('../controllers/videoController');
const middlewares = require('../middlewares');

const videoRouter = express.Router();

videoRouter.get(routes.upload, videoController.getUploadVideo);
videoRouter.post(
  routes.upload,
  middlewares.uploadVideo,
  videoController.postUploadVideo
);

videoRouter.get(routes.videos, videoController.getAllVideos);

videoRouter.get(routes.videoDetail(), videoController.getVideoDetails);

videoRouter.get(routes.editVideo(), videoController.getEditVideo);
videoRouter.post(routes.editVideo(), videoController.postEditVideo);

videoRouter.get(routes.deleteVideo(), videoController.deleteVideo);

module.exports = videoRouter;
