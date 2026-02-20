const express = require('express');
const { Comment } = require('../models');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/:postId', auth, async (req, res) => {
  const { content } = req.body;

  const comment = await Comment.create({
    content,
    post_id: req.params.postId,
    user_id: req.user.id
  });

  res.json(comment);
});

module.exports = router;
