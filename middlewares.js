const routes = require('./routes');

exports.getLocals = (req, res, next) => {
  res.locals.siteName = 'CloneTube';
  res.locals.routes = routes;

  next();
};
