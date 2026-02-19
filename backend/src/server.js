
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import wallRouter from './routes/wallRoutes.js';
import connectDB from './lib/db.js';
import { app, server } from './lib/socket.js';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();                        // load environment variables
const PORT = process.env.PORT || 5001;  // set port number
const __dirname = path.resolve();       // get current path




// --------------------------------- MIDDLEWARES ---------------------------------

// Enable JSON body parsing
app.use(express.json());

// Resolve CORS error in development
if (process.env.NODE_ENV === "development") {
    app.use(cors({
        origin: "http://localhost:5173",
    }));
}

// Add the rate limiter
app.use(rateLimiter);

// Mount the API routes
app.use("/api/wall", wallRouter);

// Serve the frontend in production
if (process.env.NODE_ENV == "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("/{*splat}", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    })
}

// -------------------------------------------------------------------------------




// Connect to the MongoDB database
connectDB().then(() => {
    // Start listening for requests
    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
