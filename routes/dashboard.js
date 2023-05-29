const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Retrieve user's blog posts and render the dashboard template
  res.render('dashboard');
});

module.exports = router;
