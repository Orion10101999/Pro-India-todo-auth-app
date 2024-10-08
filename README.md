
# Pro-India-todo-auth-app


## Deployed Website Link :- 

```bash
https://mern-todo-auth-95wb.onrender.com/

```


This project is a simple Todo application with user authentication using Node.js and Express. Users can register, log in, and manage their todos.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Installation

1. Clone the repository:
   ```bash
   https://github.com/Orion10101999/Pro-India-todo-auth-app
   ```

Copy code
```bash
cd pro-india-todo-auth
```
Install dependencies:

Copy code
```bash
npm install
```
Set up environment variables. Create a .env file in the root directory with the following content:

Copy code
```bash
PORT=8080
MONGO_URI=your_mongo_database_uri
JWT_SECRET=your_jwt_secret_key
```
Start the server:

Copy code
```bash
npm start
```
The server should now be running on http://localhost:8080.

# Usage
## Registration
### Endpoint: /api/register
Method: POST
Body:
Copy code
```json
{
    "name" : "amit",
    "email" : "amit@gmail.com",
    "password" : "amit1234",
    "profile_pic" : ""
}
```
## Login
### Endpoint: /api/email
Method: POST
Body:
Copy code
```json
{
    "email" : "amit@gmail.com"
}
```
## Password Verification
### Endpoint: /api/password
Method: POST
Body:
Copy code
```json
{
    "password" : "amit1234",
    "userId" : "66c3b72c5af3e84d28fcbd93"
}
```
## Get User Details
### Endpoint: /api/user-details
Method: GET
Body:
Copy code
```json
{
    "password" : "amit1234",
    "userId" : "66c3b72c5af3e84d28fcbd93"
}
```
## Logout
### Endpoint: /api/logout
Method: GET
Copy code
Body:
```json
{
    "password" : "amit1234",
    "userId" : "66c3b72c5af3e84d28fcbd93"
}
```
## Update User
### Endpoint: /api/update-user
Method: POST
Body:
Copy code
```json
{
    "name" : "amit1",
    "profile_pic" : "12345"
}
```
## Create Todo
### Endpoint: /api/todo/create
Method: POST
Body:
Copy code
```json
{
    "title" : "myfirsttodo",
    "description": "what a project"
}
```
## Show Todos
### Endpoint: /api/todo/showtodos
Method: POST
Body:
Copy code
``` json
{
    "title" : "myfirsttodo",
    "description": "what a project"
}
```
## Project Structure

```bash
pro-india-todo-auth/
├── node_modules/
├── api/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── index.js
├── .env
├── package.json

|-- client
```

## Technologies Used
### Node.js: JavaScript runtime environment.
### Express.js: Web framework for Node.js.
### MongoDB: NoSQL database.
### Mongoose: ODM library for MongoDB.
### JWT: JSON Web Tokens for secure authentication.
### react+vite, tailwind  css,redux toolkit : In frontend 

### Explanation:

- **Installation**: Instructions to set up the project locally.
- **Usage**: Description of the main API endpoints with examples.
- **Project Structure**: Basic outline of the project's folder structure.
- **Technologies Used**: List of the main technologies used in the project.

### my portfolio :-
```bash
https://portfolio-sandeep-kumar.vercel.app/
```