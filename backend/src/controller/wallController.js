
import Message from '../models/Message.js';

// GET: fetch all messages and return it in an array
export async function getAllMessages(_, res) {
    try {
        // Fetch all messages, sorted by recency
        let messages = await Message.find().sort({
            createdAt: -1  // most recently created documents come first
        });

        // Send JSON response
        res.status(200).json(messages);
    }

    // Send error response
    catch (error) {
        console.log(`Error in getAllMessages controller: ${error}`);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

// POST: add a new message
export function createMessage(req, res) {
    res.status(201).json({
        message: "Message created successfully"
    });
}
