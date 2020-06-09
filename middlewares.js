const multer = require('multer');

const routes = require('./routes');

exports.uploadVideo = multer({ dest: 'uploads/videos/' }).single('videoFile');

exports.getLocals = (req, res, next) => {
  res.locals.siteName = 'CloneTube';
  res.locals.routes = routes;
  res.locals.user = req.user || null;
  // console.log(req.user);

  next();
};

exports.onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

exports.onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};
