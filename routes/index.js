const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Retrieve existing blog posts and render the homepage template
  res.render('index');
});

module.exports = router;
