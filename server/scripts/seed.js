const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const mongoose = require('mongoose');
const Project = require('../src/models/Project');
const Testimonial = require('../src/models/Testimonial');
const Post = require('../src/models/Post');

const projects = require('./data/projects.json');
const testimonials = require('./data/testimonials.json');
const posts = require('./data/posts.json');

async function seed() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI not found in environment variables');
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected');

    // Clear existing data
    await Project.deleteMany({});
    await Testimonial.deleteMany({});
    await Post.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // Insert dummy data
    await Project.insertMany(projects);
    await Testimonial.insertMany(testimonials);
    await Post.insertMany(posts);
    
    console.log('✅ Seed complete!');
    console.log(`   - ${projects.length} projects`);
    console.log(`   - ${testimonials.length} testimonials`);
    console.log(`   - ${posts.length} posts`);
    
    process.exit(0);
  } catch (err) {
    console.error('❌ Seed error:', err);
    process.exit(1);
  }
}

seed();
