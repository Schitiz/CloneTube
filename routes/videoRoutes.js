const express = require('express');

const routes = require('../routes');
const middleware = require('../middlewares');
const videoController = require('../controllers/videoController');
const middlewares = require('../middlewares');

const videoRouter = express.Router();

videoRouter.get(
  routes.upload,
  middleware.onlyPrivate,
  videoController.getUploadVideo
);
videoRouter.post(
  routes.upload,
  middlewares.uploadVideo,
  videoController.postUploadVideo
);

videoRouter.get(
  routes.videos,
  middleware.onlyPrivate,
  videoController.getAllVideos
);

videoRouter.get(routes.videoDetail(), videoController.getVideoDetails);

videoRouter.get(
  routes.editVideo(),
  middleware.onlyPrivate,
  videoController.getEditVideo
);
videoRouter.post(
  routes.editVideo(),
  middleware.onlyPrivate,
  videoController.postEditVideo
);

videoRouter.get(routes.deleteVideo(), videoController.deleteVideo);

module.exports = videoRouter;
