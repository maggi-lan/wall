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

## TODO

- [x] Add rate limit
- [x] Add profanity filter
- [x] Set up websockets
- [ ] Allow users to choose nicknames
- [ ] Allow users to update/delete their messages
