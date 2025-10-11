# Wizarding Event Registration (MERN)

This is a minimal MERN application with Harry Potter-inspired colors (no copyrighted assets).

- Public registration form
- Admin login + dashboard to view/export registrations (CSV)

Folders:
- `backend/` — Express, MongoDB, JWT auth, CSV export
- `frontend/` — React (Vite), Router, Axios

## Prerequisites
- Node.js 18+
- MongoDB running locally (or provide a URI)

## Setup (Windows PowerShell)

### Backend
1. Copy env file
```powershell
Copy-Item backend/.env.example backend/.env
```
2. Edit `backend/.env` and set `MONGO_URI` and `JWT_SECRET`.
3. Install and seed admin, then run dev server
```powershell
cd backend
npm install
npm run seed:admin
npm run dev
```
The API runs at http://localhost:4000/api

### Frontend
1. Create `frontend/.env` with API URL
```powershell
Set-Content -Path frontend/.env -Value "VITE_API_URL=http://localhost:4000/api"
```
2. Install and start
```powershell
cd frontend
npm install
npm run dev
```
Open http://localhost:5173

## Admin
- Login page: http://localhost:5173/admin/login
- Use credentials from `backend/.env` (created by seed script)
- After login, visit http://localhost:5173/admin to see registrations and export CSV

## Notes
- Theme uses generic “Wizarding” wording and house color vibe; no copyrighted logos or assets are included.
- To deploy, host `frontend` as a static site and deploy `backend` to your preferred Node host with the same `VITE_API_URL`.
