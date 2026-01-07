
import express from 'express';
import { getAllMessages, createMessage, updateMessage, deleteMessage } from '../controller/wallController.js';

// Create router instance
const router = express.Router();

// CRUD routes
router.get("/", getAllMessages);
router.post("/", createMessage);
router.put("/:id", updateMessage);
router.delete("/:id", deleteMessage);

// Export the router object
export default router;
