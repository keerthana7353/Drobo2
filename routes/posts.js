const express = require('express');
const { Post, Comment, User } = require('../models');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  const { title, content } = req.body;

  const post = await Post.create({
    title,
    content,
    user_id: req.user.id
  });

  res.json(post);
});

router.get('/', async (req, res) => {
  const posts = await Post.findAll({
    include: [
      { model: User, attributes: ['username'] },
      {
        model: Comment,
        include: [{ model: User, attributes: ['username'] }]
      }
    ]
  });

  res.json(posts);
});

module.exports = router;
