import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' }
});

// Add response interceptor to handle errors silently
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Silently handle errors without logging to console
    return Promise.reject(error);
  }
);

export const getProjects = (category) => 
  api.get('/projects', { params: category ? { category } : {} });

export const getProjectBySlug = (slug) => 
  api.get(`/projects/${slug}`);

export const getTestimonials = () => 
  api.get('/testimonials');

export const getPosts = () => 
  api.get('/posts');

export const getPostBySlug = (slug) => 
  api.get(`/posts/${slug}`);

export const submitContact = (data) => 
  api.post('/contact', data);

export default api;
