# Authenticated Tasks API

A Node.js + Express backend API with PostgreSQL authentication, JWT-based authorization, and user-owned task management.

This project demonstrates real-world backend patterns including:
- Secure password hashing
- Token-based authentication
- Protected routes
- Relational data ownership

---

## Tech Stack
- Node.js
- Express
- PostgreSQL
- bcrypt
- JSON Web Tokens (JWT)
- pg (node-postgres)

---

## Features
- User registration and login
- Password hashing with bcrypt
- JWT authentication
- Protected routes using middleware
- Tasks scoped to authenticated users

---

##  Authentication Endpoints

### Register
**POST** `/auth/register`

Request body:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
