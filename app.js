const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const sequelize = require('./database');

const app = express();
const PORT = 3000;

// Set up session middleware
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  })
);

// Parse request bodies as JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up static file serving
app.use(express.static('public'));

// Set up routes
app.use('/', require('./routes/index'));
app.use('/dashboard', require('./routes/dashboard'));
app.use('/login', require('./routes/login'));
app.use('/signup', require('./routes/signup'));
app.use('/logout', require('./routes/logout'));
app.use('/posts', require('./routes/posts'));

// Sync the database models and start the server
sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to sync database models:', error);
  });
