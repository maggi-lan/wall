
import express from 'express';
import { getAllMessages, createMessage } from '../controller/wallController.js';

// Create router instance
const wallRouter = express.Router();

// CRUD routes
wallRouter.get("/", getAllMessages);
wallRouter.post("/", createMessage);

export default wallRouter;
