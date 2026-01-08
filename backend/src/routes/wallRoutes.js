
import express from 'express';
import { getAllMessages, createMessage } from '../controller/wallController.js';

// Create router instance
const router = express.Router();

// CRUD routes
router.get("/", getAllMessages);
router.post("/", createMessage);

// Export the router object
export default router;
