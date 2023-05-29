const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Clear the session and redirect to the homepage
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
