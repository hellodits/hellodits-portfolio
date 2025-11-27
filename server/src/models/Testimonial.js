const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  avatar: String,
  quote: { type: String, required: true },
  rating: { type: Number, default: 5 }
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', TestimonialSchema);
