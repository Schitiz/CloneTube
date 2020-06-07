const multer = require('multer');

const routes = require('./routes');

exports.uploadVideo = multer({ dest: 'uploads/videos/' }).single('videoFile');

exports.getLocals = (req, res, next) => {
  res.locals.siteName = 'CloneTube';
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };

  next();
};
