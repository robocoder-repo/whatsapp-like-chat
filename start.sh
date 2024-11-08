#!/bin/bash

# Install dependencies
npm install

# Build the React app
cd client
npm install
npm run build
cd ..

# Start the server
node server.js
