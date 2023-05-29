const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.get('/', (req, res) => {
  // Render the signup form
  res.render('signup');
});

router.post('/', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      res.render('signup', { error: 'Username already exists' });
      return;
    }

    // Create a new user
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    // Log in the user and redirect to the dashboard
    req.session.user = newUser;
    res.redirect('/dashboard');
  } catch (error) {
    console.error(error);
    res.render('signup', { error: 'An error occurred' });
  }
});

module.exports = router;
