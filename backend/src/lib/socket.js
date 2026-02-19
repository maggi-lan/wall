
import { Server } from 'socket.io';
import { createServer } from 'node:http';
import express from 'express';


// Create a express application
const app = express();

// Create a HTTP server from the express app
const server = createServer(app);

// Create a socket.io server from the HTTP server
const io = new Server(server, {
    // Allow CORS requests from local frontend in development
    cors: {
        origin: ["http://localhost:5173"]
    }
});

// Emit a new message to all users
const emitNewMessage = (message) => {
    io.emit("new-message", message);
};

export { io, app, server, emitNewMessage };
