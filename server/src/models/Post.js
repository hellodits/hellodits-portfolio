const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, required: true },
  content: String,
  cover: String,
  date: { type: Date, default: Date.now },
  tags: [String]
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);
