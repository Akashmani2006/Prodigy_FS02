# Employee Management System

## Overview

The Employee Management System is a secure RESTful API built using Node.js, Express.js, MongoDB, and JWT Authentication. The system allows administrators to perform CRUD (Create, Read, Update, Delete) operations on employee records while ensuring secure access through authentication and authorization mechanisms.

## Features

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Create Employee Records
- View All Employees
- View Employee by ID
- Update Employee Details
- Delete Employee Records
- MongoDB Database Integration
- Password Hashing using bcryptjs

## Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcryptjs

### API Testing
- Thunder Client

## Project Structure

```
Employee Management System/
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── Employee.js
│   └── User.js
│
├── routes/
│   ├── authRoutes.js
│   └── employeeRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate to Project Folder

```bash
cd Employee-Management-System
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Start Server

```bash
node server.js
```

or

```bash
npx nodemon server.js
```

## API Endpoints

### Authentication

#### Register User

```http
POST /api/auth/register
```

#### Login User

```http
POST /api/auth/login
```

### Employee Operations

#### Create Employee

```http
POST /api/employees
```

#### Get All Employees

```http
GET /api/employees
```

#### Get Employee By ID

```http
GET /api/employees/:id
```

#### Update Employee

```http
PUT /api/employees/:id
```

#### Delete Employee

```http
DELETE /api/employees/:id
```

## Security Features

- Password hashing using bcryptjs
- JWT Token Authentication
- Protected Employee Routes
- Environment Variables for Sensitive Data

## Learning Outcomes

- REST API Development
- MongoDB CRUD Operations
- Authentication & Authorization
- Express Routing
- Middleware Implementation
- JWT Security
- Backend Project Structure

## Internship Task

This project was developed as part of the Prodigy InfoTech Full Stack Web Development Internship – Task 02.

---
Developed by Akash M