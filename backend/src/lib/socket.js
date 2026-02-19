
import { Server } from 'socket.io';
import { createServer } from 'node:http';
import express from 'express';

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"]
    }
});

io.on("connection", (socket) => {
    console.log(`A user has connected: ${socket.id}`);

    socket.on("disconnect", () => {
        console.log(`A user has disconnected: ${socket.id}`);
    });
});

// Emit the new message to all users
const emitNewMessage = (message) => {
    io.emit("new-message", message);
};

export { io, app, server, emitNewMessage };
