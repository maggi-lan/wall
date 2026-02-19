# WALL

> **Application URL:** [wall-xzwv.onrender.com](https://wall-xzwv.onrender.com/)

A real-time message board equipped with basic profanity moderation. Built with MERN stack, communicating over WebSockets via Socket.IO.

## Disclaimer

- This repo is forked from [another repo](https://github.com/awkward-baguette/nexus-project/)
- I was the primary contributor in the original repo
- This fork is built on top of the original repo
- This fork is currently being used to host the website
- All lines of code in this fork is written by me

## Features

- Post messages anonymously to a shared public wall
- Real-time updates (no refresh needed)
- Profanity filtering on all submitted content
- Rate limiting to prevent abuse (500 requests per minute via Upstash Redis)
- Responsive UI built with Tailwind CSS and DaisyUI

## Tech Stack

**Frontend**

- React 19.2
- Vite
- Tailwind CSS + DaisyUI
- Socket.IO Client
- Axios

**Backend**

- Node.js + Express 5.2
- MongoDB + Mongoose
- Socket.IO
- Upstash Redis (rate limiting)
- `bad-words` (profanity filter)

## Project Structure

```
wall/
├── frontend/
│   └── src/
│       ├── components/  # React UI components
│       ├── lib/         # Frontend utilities (API client, socket setup, helpers)
│       └── App.jsx      # Root React component
└── backend/
    └── src/
        ├── controller/  # Request handlers (core backend logic)
        ├── lib/         # Backend utilities (Redis client, socket setup, DB setup)
        ├── middleware/  # Rate limiter middleware
        ├── models/      # Mongoose schema and database model
        ├── routes/      # Express route definitions
        └── server.js    # Application entry point
```

## Build Instructions

### Prerequisites

- Node.js
- A running MongoDB instance
- An Upstash Redis account (for rate limiting)

### Environment Variables

Create a `.env` file in the `backend/` directory:

```env
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
PORT=5001
NODE_ENV=development
```

### Running Locally

Install dependencies and start each service:

```bash
# Install and start the backend
cd backend
npm install
npm run dev

# In a separate terminal, install and start the frontend
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173` and the backend at `http://localhost:5001`.

### Production Build

From the project root:

```bash
npm run build   # installs dependencies and builds the frontend
npm start       # serves everything from the backend
```

## API

| Method | Endpoint    | Description          |
| ------ | ----------- | -------------------- |
| GET    | `/api/wall` | Fetch all messages   |
| POST   | `/api/wall` | Submit a new message |

### POST `/api/wall` Request Body

```json
{ "content": "Your message here" }
```

Messages are capped at 1000 characters. Submitted content is filtered for profanity before being stored.

### WebSocket Events
- `new-message`: Emitted by the server to all connected clients whenever a new message is successfully posted. The event payload is the new message.

## TODO

- [x] Add rate limit
- [x] Add profanity filter
- [x] Set up websockets
- [ ] Allow users to choose nicknames
- [ ] Allow users to update/delete their messages
