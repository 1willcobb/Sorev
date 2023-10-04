const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const videoSchema = new Schema({
  videoAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  videoLink: {
    type: String,
    required: true,
  }
});

const Video = model('Video', videoSchema);

module.exports = Video;
