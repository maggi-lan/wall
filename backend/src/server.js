
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import wallRouter from './routes/wallRoutes.js';
import connectDB from './lib/db.js';
import { app, server } from './lib/socket.js';
import rateLimiter from './middleware/rateLimiter.js';

// Load .env file
dotenv.config();

// Set port number
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// Middleware
app.use(express.json());                       // enable JSON body parsing
if (process.env.NODE_ENV === "development") {  // resolve CORS error in development
    app.use(cors({
        origin: "http://localhost:5173",
    }));
}
app.use(rateLimiter);                          // add rate limiter
app.use("/api/wall", wallRouter);              // mount the api routes

if (process.env.NODE_ENV == "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("/{*splat}", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    })
}

// Connect to the MongoDB database
connectDB().then(() => {
    // Start listening for requests
    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
