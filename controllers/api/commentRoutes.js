const router = require('express').Router();
const { Comment } = require('../models');
const isAuthenticated = require('../config/middleware/isAuthenticated');

// Get all comments
router.get('/', isAuthenticated, async (req, res) => {
    try {
        const commentData = await Comment.findAll();
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a comment
router.post('/', isAuthenticated, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            userId: req.session.userId, // Assuming you're storing userId in session
        });
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update a comment
router.put('/:id', isAuthenticated, async (req, res) => {
    // Similar structure to the post route, but with an update method
});

// Delete a comment
router.delete('/:id', isAuthenticated, async (req, res) => {
    // Similar structure to the post route, but with a delete method
});

module.exports = router;
