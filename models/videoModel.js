const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: [true, 'File URL is required'],
  },
  title: {
    type: String,
    required: [true, 'A video must have a title'],
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});

const Video = mongoose.model('Video', videoSchema);
module.exports = Video;
