const routes = require('../routes');
const videos = require('../db');

exports.home = (req, res) => {
  // console.log(videos);
  res.render('home', {
    pageTitle: 'Home',
    videos,
  });
};
exports.search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render('search', {
    pageTitle: 'Search',
    searchingBy,
    videos,
  });
};
exports.getUploadVideo = (req, res) =>
  res.render('uploadVideo', {
    pageTitle: 'Upload Video',
  });

exports.postUploadVideo = (req, res) => {
  const {
    body: { file, title, description },
  } = req;

  // TODO: Upload and Save Video
  res.redirect(routes.videoDetail(324393));
};

exports.getAllVideos = (req, res) =>
  res.render('videos', {
    pageTitle: 'All Videos',
  });
exports.getVideoDetails = (req, res) =>
  res.render('videoDetails', {
    pageTitle: 'Video Details',
  });
exports.editVideo = (req, res) =>
  res.render('editVideo', {
    pageTitle: 'Edit Video',
  });
exports.deleteVideo = (req, res) => res.redirect(routes.home);
