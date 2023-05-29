# CMS Blog

CMS Blog is a CMS-style blog site that allows developers to publish articles, blog posts, and share their thoughts and opinions about technology.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## User Story

As a developer who writes about tech, I want a CMS-style blog site so that I can publish articles, blog posts, and my thoughts and opinions.

## Acceptance Criteria

GIVEN a CMS-style blog site:
- WHEN I visit the site for the first time, THEN I am presented with the homepage, which includes existing blog posts (if any), navigation links for the homepage and the dashboard, and the option to log in.
- WHEN I click on the homepage option, THEN I am taken to the homepage.
- WHEN I click on any other links in the navigation, THEN I am prompted to either sign up or sign in.
- WHEN I choose to sign up, THEN I am prompted to create a username and password.
- WHEN I click on the sign-up button, THEN my user credentials are saved, and I am logged into the site.
- WHEN I revisit the site at a later time and choose to sign in, THEN I am prompted to enter my username and password.
- WHEN I am signed in to the site, THEN I see navigation links for the homepage, the dashboard, and the option to log out.
- WHEN I click on the homepage option in the navigation, THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created.
- WHEN I click on an existing blog post, THEN I am presented with the post title, contents, post creator’s username, and date created for that post, and I have the option to leave a comment.
- WHEN I enter a comment and click on the submit button while signed in, THEN the comment is saved, and the post is updated to display the comment, the comment creator’s username, and the date created.
- WHEN I click on the dashboard option in the navigation, THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post.
- WHEN I click on the button to add a new blog post, THEN I am prompted to enter both a title and contents for my blog post.
- WHEN I click on the button to create a new blog post, THEN the title and contents of my post are saved, and I am taken back to an updated dashboard with my new blog post.
- WHEN I click on one of my existing posts in the dashboard, THEN I am able to delete or update my post and taken back to an updated dashboard.
- WHEN I click on the logout option in the navigation, THEN I am signed out of the site.
- WHEN I am idle on the site for more than a set time, THEN I am able to view posts and comments, but I am prompted to log in again before I can add, update, or delete posts.

# Installation

1. Clone the repository:
   git clone https://github.com/your-username/cms-blog.git
2. Navigate to the project directory:
   cd cms-blog
3. Install the dependencies:
- npm install
4. Create a MySQL database for the application.
5. Update the database credentials in the `database
6. Start the server:
- node app.js
7. Access the application in your web browser at http://localhost:3000.

# Usage
- Visit the homepage to view existing blog posts.
- Sign up or log in to access the dashboard and create new blog posts.
- Click on a blog post to view its details and leave comments.
- Use the dashboard to manage your blog posts, including editing and deleting them.
- Log out when you're done.
# Features
- User registration and authentication
- Homepage displaying existing blog posts
- Dashboard for managing blog posts
- Ability to create, update, and delete blog posts
- Commenting system for blog posts
- Idle timeout functionality
# Dependencies
Node.js
Express.js
MySQL
Sequelize
bcryptjs
express-session

# License
This project is licensed under the MIT License.