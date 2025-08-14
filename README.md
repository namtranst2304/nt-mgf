# Next.js + Go Fiber + PostgreSQL Starter

## Structure
- `frontend/`: Next.js app (TypeScript, Tailwind CSS)
- `backend/`: Go Fiber API server

## Getting Started

### Frontend
1. `cd frontend`
2. `npm run dev`

### Backend
1. Set `DATABASE_URL` in your environment (e.g., `postgres://user:password@localhost:5432/dbname`)
2. `cd backend`
3. `go run main.go`

## Notes
- The backend exposes `/` (hello) and `/db` (PostgreSQL test) endpoints.
- Update `DATABASE_URL` for your local PostgreSQL instance.
