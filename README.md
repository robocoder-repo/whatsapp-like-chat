# WhatsApp-like Chat Application

This is a simple chat application built with Node.js, Express, React, and Socket.io.

## Local Development

To run the application locally:

1. Clone the repository:
   ```
   git clone https://github.com/robocoder-repo/whatsapp-like-chat.git
   cd whatsapp-like-chat
   ```

2. Install dependencies:
   ```
   npm install
   cd client
   npm install
   cd ..
   ```

3. Create a .env file in the root directory and add your MongoDB URI and JWT secret:
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development server:
   ```
   npm run dev
   ```

## Deployment

To deploy the application:

1. Ensure you have Node.js installed on your hosting platform.

2. Clone the repository on your hosting platform.

3. Set the following environment variables:
   - MONGODB_URI: Your MongoDB connection string
   - JWT_SECRET: A secret key for JWT token generation
   - PORT: The port on which the server should run (if not provided, it will use port 3000)

4. Run the start script:
   ```
   ./start.sh
   ```

This script will install dependencies, build the React app, and start the server.

## API Endpoints

- POST /api/auth/register: Register a new user
- POST /api/auth/login: Login a user

## WebSocket Events

- 'connection': New client connected
- 'sendMessage': Send a new message
- 'message': Receive a new message
- 'disconnect': Client disconnected

