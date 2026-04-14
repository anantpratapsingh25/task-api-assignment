# Task API Assignment

## Features
- Create, update, delete tasks
- Assign task to a user
- Mark task as complete
- Filtering, pagination, and stats
- Validation for edge cases

## Tech Stack
- Node.js
- Express.js
- Jest (Testing)
- Supertest

## How to Run

1. Install dependencies:
npm install

2. Start server:
npm start

3. Run tests:
npm test

## API Endpoints

- GET /tasks
- POST /tasks
- PUT /tasks/:id
- DELETE /tasks/:id
- PATCH /tasks/:id/complete
- PATCH /tasks/:id/assign

## Notes
- Data is stored in memory (resets on restart)
