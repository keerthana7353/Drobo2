Blog API – Node.js + Express + PostgreSQL

A simple RESTful Blog API built using Node.js, Express, PostgreSQL, Sequelize ORM, and JWT Authentication.
Features:
 User Signup & Login (JWT Authentication)
 Create Blog Posts
 Fetch All Posts with Comments
 Add Comments to Specific Posts
 Password Hashing using bcrypt
PostgreSQL Relational Database
Sequelize ORM Relationships

Tech Stack: 
Node.js
Express.js
PostgreSQL
Sequelize ORM
JWT (Authentication)
bcrypt (Password Hashing)
dotenv

blog-api/
│
├── models/
│   ├── index.js
│   ├── user.js
│   ├── post.js
│   └── comment.js
│
├── routes/
│   ├── auth.js
│   ├── posts.js
│   └── comments.js
│
├── middleware/
│   └── authMiddleware.js
│
├── server.js
├── package.json
└── .env

Database Schema :-
Users Table:
id (Primary Key)
username (Unique)
email (Unique)
password (Hashed)
created_at

Posts Table:
id (Primary Key)
title
content
user_id (Foreign Key → Users)
created_at

Comments Table:
id (Primary Key)
content
user_id (Foreign Key → Users)
post_id (Foreign Key → Posts)
created_at

Relationships:
One User → Many Posts
One User → Many Comments
One Post → Many Comments


Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/your-username/blog-api.git
cd blog-api
2️⃣ Install Dependencies
npm install
3️⃣ Setup PostgreSQL

Create a database:

createdb blogdb

Or create using pgAdmin.

4️⃣ Create .env File

Create a .env file in root folder:

DB_URL=postgres://username:password@localhost:5432/blogdb
JWT_SECRET=your_secret_key

Replace:

username → your PostgreSQL username

password → your PostgreSQL password

5️⃣ Run the Server
npm start

Server will run on:

http://localhost:3000
📡 API Endpoints
🔐 Authentication
Signup
POST /api/auth/signup

Body:

{
  "username": "keerthana",
  "email": "keerthana@gmail.com",
  "password": "123456"
}
Login
POST /api/auth/login

Returns:

{
  "token": "JWT_TOKEN"
}
📝 Create Post
POST /api/posts
Headers:
Authorization: Bearer <token>
Body:
{
  "title": "My First Blog",
  "content": "This is my blog content"
}
📚 Fetch All Posts with Comments
GET /api/posts
💬 Add Comment
POST /api/comments/:postId
Headers:
Authorization: Bearer <token>
Body:

{
  "content": "Nice blog!"
}

🔒 Security Features
Password hashing using bcrypt

JWT-based authentication

Protected routes using middleware

Foreign key constraints

Cascading deletes

📌 Future Improvements

Pagination

Likes & Reactions

User Roles (Admin/User)

Input validation using Joi

Swagger API Documentation

Deployment (Render / Railway / AWS)


👩‍💻 Author
Keerthana R
Full Stack Developer | MERN | Backend Enthusiast
