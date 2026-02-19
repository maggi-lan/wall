
import Message from '../models/Message.js';
import { Filter } from 'bad-words';

import { emitNewMessage } from '../lib/socket.js';

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

    // In case of failure, send error response
    catch (error) {
        console.log(`Error in getAllMessages controller: ${error}`);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

// POST: add a new message
export async function createMessage(req, res) {
    try {
        // Extract content from request body
        const { content } = req.body;

        // Validate the input
        if (typeof content !== "string" || !content.trim()) {
            return res.status(400).json({
                message: "Content is required"
            });
        }
        const MAX_LENGTH = 1000;
        if (content.trim().length > MAX_LENGTH) {
            return res.status(400).json({
                message: "Content length exceeded",
            });
        }

        // Filter profanity
        const filter = new Filter();
        const filteredContent = filter.clean(content);

        // Add a new Message document to the collection
        const message = new Message({
            content: filteredContent,
        });
        const savedMessage = await message.save();

        // Emit the new message to all users
        emitNewMessage(savedMessage);

        // Send JSON response
        res.status(201).json(savedMessage);
    }

    // In case of failure, send error response
    catch (error) {
        console.log(`Error in createMessage controller: ${error}`);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}
