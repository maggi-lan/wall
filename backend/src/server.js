
import express from 'express';
import dotenv from 'dotenv';

// Load .env file
dotenv.config();

// Create an express app
const app = express();
const PORT = process.env.PORT || 5001;




// ROUTES

// GET: fetch all messages
app.get("/api/nexus", (req, res) => {
    res.status(200).json({
        message: "Messages fetched successfully"
    });
});

// POST: add a new message
app.post("/api/nexus", (req, res) => {
    res.status(201).json({
        message: "Message created successfully"
    });
});

// PUT: update an existing message
app.put("/api/nexus/:id", (req, res) => {
    res.status(200).json({
        message: "Message updated successfully"
    });
});

// DELETE: delete an existing message
app.delete("/api/nexus/:id", (req, res) => {
    res.status(200).json({
        message: "Message deleted successfully"
    });
});




// Start listening for requests
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
