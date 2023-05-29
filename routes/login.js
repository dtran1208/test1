router.post('/', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Find the user by username
      const user = await User.findOne({ where: { username } });
  
      // Verify the password
      if (user && bcrypt.compareSync(password, user.password)) {
        // Set the logged-in user in the session
        req.session.user = user;
        res.redirect('/dashboard');
      } else {
        res.render('login', { error: 'Invalid username or password' });
      }
    } catch (error) {
      console.error(error);
      res.render('login', { error: 'An error occurred' });
    }
  });
  