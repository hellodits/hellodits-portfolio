const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.get('/', projectController.getAllProjects);
router.get('/:slug', projectController.getProjectBySlug);
router.post('/', projectController.createProject); // Add auth middleware for production

module.exports = router;
