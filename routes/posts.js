const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  const postId = req.params.id;
  // Retrieve the blog post by ID and render the post template
  res.render('post');
});

router.post('/:id/comments', (req, res) => {
  const postId = req.params.id;
  const { comment } = req.body;
  // Save the comment to the database and update the post
  res.redirect(`/posts/${postId}`);
});

module.exports = router;
