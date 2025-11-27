const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  short: { type: String, required: true },
  description: { type: String, required: true },
  stack: [String],
  cover: String,
  screenshots: [String],
  repo: String,
  live: String,
  category: String,
  year: Number
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
