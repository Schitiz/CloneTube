const routes = require('../routes');
const Video = require('../models/videoModel');

exports.home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 });
    // console.log(videos);
    res.render('home', {
      pageTitle: 'Home',
      videos,
    });
  } catch (err) {
    console.log(err);
    res.render('home', {
      pageTitle: 'Home',
      videos: [],
    });
  }
};
exports.search = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: 'i' },
    });
  } catch (err) {
    console.log(err);
  }
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

exports.postUploadVideo = async (req, res) => {
  try {
    const {
      body: { title, description },
      file: { path },
    } = req;
    const newVideo = await Video.create({
      fileUrl: path,
      title,
      description,
    });
    // console.log(newVideo);

    // TODO: Upload and Save Video
    res.redirect(routes.videoDetail(newVideo.id));
  } catch (err) {
    console.log(err);
  }
};

exports.getAllVideos = (req, res) =>
  res.render('videos', {
    pageTitle: 'All Videos',
  });

exports.getVideoDetails = async (req, res) => {
  // console.log(req.params.id);
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    // console.log(video);

    res.render('videoDetails', {
      pageTitle: video.title,
      video,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render('editVideo', {
      pageTitle: `Edit ${video.title}`,
      video,
    });
  } catch (err) {
    res.redirect(routes.home);
  }
};

exports.postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (err) {
    res.redirect(routes.home);
  }
};

exports.deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Video.findOneAndRemove({ _id: id });
  } catch (err) {
    console.log(err);
  }
  res.redirect(routes.home);
};
