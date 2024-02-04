const router = require('express').Router();
const { Post } = require('../models');
const isAuthenticated = require('../config/middleware/isAuthenticated');

// Get all posts or a specific post
router.get('/:id?', isAuthenticated, async (req, res) => {
    try {
        let postData;
        if (req.params.id) {
            postData = await Post.findByPk(req.params.id);
        } else {
            postData = await Post.findAll();
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a new post
router.post('/', isAuthenticated, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            userId: req.session.userId,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update a post
router.put('/:id', isAuthenticated, async (req, res) => {
    // Similar structure to the create route, but with an update method
});

// Delete a post
router.delete('/:id', isAuthenticated, async (req, res) => {
    // Similar structure to the create route, but with a delete method
});

module.exports = router;
