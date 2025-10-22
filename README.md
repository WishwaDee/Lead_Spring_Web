# Wizarding Event Landing Page

This project is now a single-page React landing site with Harry Potter-inspired styling. It keeps the whimsical
theme while removing all backend code, admin flows, and API dependencies.

## Features
- Hero section with a prominent “Register Now” button that you can point to a Google Form.
- Scrollable sections for event details and schedule.
- Lightweight static build powered by Vite.

## Configuration
- Optionally set `VITE_REGISTER_URL` in `frontend/.env` to control where the register button points.
  ```bash
  VITE_REGISTER_URL=https://docs.google.com/forms/d/your-form-id
  ```
  If not provided, the button will default to `#` so you can wire it up later.

## Getting Started
```bash
cd frontend
npm install
npm run dev
```

The development server runs at http://localhost:5173. For production, run `npm run build` to generate a static `dist/`
folder you can deploy to any static host.

## Notes
- Theme uses generic “Wizarding” wording and house color vibe; no copyrighted logos or assets are included.
- Since the backend has been removed, the repository now contains only the `frontend/` React application.
