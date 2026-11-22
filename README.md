# Tutoring App

A backend API for matching students with private tutors and scheduling lessons without conflicts.

## Tech Stack
- Node.js, Express, TypeScript
- PostgreSQL with Prisma ORM

## Current Status
- Database schema: users (student / tutor / admin), subjects, tutor availability, lessons
- Express server with a health check and a subjects endpoint

## Planned
- Registration and login (JWT)
- Tutor availability and lesson booking
- Conflict detection for overlapping lessons
- Automated tests and Docker

## Run Locally
1. Install Node.js and PostgreSQL, and create a database named `tutoring`
2. Create a `.env` file with `DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/tutoring?schema=public"`
3. `npm install`
4. `npx prisma migrate dev`
5. `npm run dev`

The server runs on http://localhost:3000