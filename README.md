# Personal Blog

A full-stack blogging application built with Node.js and Express.
https://roadmap.sh/projects/personal-blog
## Features

- **Create & Manage Posts** - Add, edit, and delete blog posts
- **User Authentication** - Secure login/signup with bcrypt
- **Admin Dashboard** - Manage posts from a dedicated admin panel
- **Search Functionality** - Search through blog posts
- **Responsive Design** - Clean, mobile-friendly UI
- **Session Management** - Persistent user sessions with MongoDB

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Templating**: EJS
- **Authentication**: bcrypt, JWT, express-session
- **Styling**: CSS

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

The app will run on `http://localhost:5000`

## Usage

- Visit the homepage to browse posts
- Use the admin panel to create and manage posts
- Search posts using the search feature

## Project Structure

- `public/` - Static assets (CSS, JS, images)
- `server/` - Backend logic (config, models, routes)
- `views/` - EJS templates (layouts, partials, pages)
