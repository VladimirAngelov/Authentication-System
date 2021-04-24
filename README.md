# Authentication System

The system have: 
* Client-side validation & error handling
* Server-side validation & error handling
* Email confirmation
* Password hashing

## Tech stack:
<img src="https://i.ibb.co/4JKj4t6/mern-stack.png" alt="mern-stack"/>

## How to run in local environment
* Download and install [MongoDB](https://www.mongodb.com/try/download)
* Navigate to server(Node) directory
### `cd backend`
* Install all dependencies
### `npm install`
* Create .env file with env variables
    * PORT= port number
    * EMAIL='your email'
    * EMAIL_PASSWORD='your email password'
    * DB_URI='mongodb://localhost:27017/auth-system'
    * SECRET='secretWord'
    * SALT_ROUNDS=10 / for bcrypt hashing
    * COOKIE_NAME='cookieName'
* Run the server
### `npm start`
Server will run on http://localhost:5000

* Navigate to client(React) directory
### `cd frontend`
* Install all dependencies
### `npm install`
* Run the application
### `npm start`
The application will run on http://localhost:3001