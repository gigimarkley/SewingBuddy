# SewingBuddy

SewingBuddy is a full-stack web application with a React frontend and an Express + TypeScript backend.

The project is structured as a monorepo with clearly separated frontend and backend applications.

---

## 🏗 Project Structure

sewingbuddy/
frontend/ → Vite + React + TypeScript
backend/ → Express + TypeScript API

---

## 🎨 Frontend (`/frontend`)

The frontend is built with:

- React 19
- TypeScript
- Vite
- Chakra UI
- React Router

### Key Characteristics

- Built as a static application
- Outputs production build to `/frontend/dist`
- Uses Vite dev server during development
- Can be deployed to static hosting

### Run Frontend Locally

```bash
cd frontend
npm install
npm run dev
```

Default Fronted Dev server:
http://localhost:5173

---

## ⚙️ Backend (/backend)

The backend is built with:

- Express
- TypeScript
- Node.js

### Key Characteristics

- Compiles TypeScript into /backend/dist
- Runs with ts-node-dev in development
- Designed to be deployable to environments like Cloud Run or any Node hosting provider
- Run Backend Locally

```bash
cd backend
npm install
npm run dev
```

Default Backend Dev Server: http://localhost:4000
