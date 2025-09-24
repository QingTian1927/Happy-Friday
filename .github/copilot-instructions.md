# Copilot Instructions for Happy-Friday

## Project Overview

This repository contains a full-stack application with two main components:
- **backend/**: NestJS (TypeScript) REST API
- **frontend/**: React (TypeScript) app using Vite

## Architecture & Key Patterns

### Backend (NestJS)
- Modular structure: `src/` contains feature modules (e.g., `accounts/`, `auth/`, `config/`).
- Controllers handle HTTP requests, services encapsulate business logic.
- Auth uses JWT strategy (`auth/stragegies/jwt.strategy.ts`).
- Configuration is split into files in `config/`.
- E2E tests in `test/` (run with `npm run test:e2e`).
- Main entry: `src/main.ts`.

### Frontend (React + Vite)
- Entry: `src/main.tsx`, root component: `src/App.tsx`.
- Pages live in `src/pages/` (e.g., `LoginPage.tsx`).
- API constraints/configs in `src/constraint/ApiConstraint.tsx`.
- Assets in `src/assets/`.
- Uses Vite for dev/build (`npm run dev`, `npm run build`).
- ESLint config in `eslint.config.js` (type-aware linting recommended).

## Developer Workflows

### Backend
- Install: `npm install` in `backend/`
- Start dev server: `npm run start:dev`
- Run tests: `npm run test` (unit), `npm run test:e2e` (e2e), `npm run test:cov` (coverage)
- Build: `npm run start:prod`

### Frontend
- Install: `npm install` in `frontend/`
- Start dev server: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint` (see `eslint.config.js` for config)

## Conventions & Patterns
- Backend modules follow NestJS conventions: each feature has its own controller, service, and module file.
- Frontend uses functional components and hooks; pages are separated in `src/pages/`.
- API endpoints and constraints are centralized in `src/constraint/ApiConstraint.tsx`.
- TypeScript is used throughout; strict type checking is recommended.
- Assets and images are stored in `src/assets/` (frontend).

## Integration Points
- Frontend communicates with backend via REST API (see `ApiConstraint.tsx` for endpoint definitions).
- Auth is handled via JWT (see backend `auth/` module).

## External Dependencies
- Backend: NestJS, JWT, other npm packages as defined in `package.json`.
- Frontend: React, Vite, ESLint, Babel/SWC (for Fast Refresh), see `package.json`.

## Key Files & Directories
- `backend/src/` — main backend code
- `backend/test/` — e2e tests
- `frontend/src/` — main frontend code
- `frontend/src/pages/` — page components
- `frontend/src/constraint/ApiConstraint.tsx` — API endpoint definitions
- `frontend/eslint.config.js` — lint config

---

**For AI agents:**
- Respect the modular boundaries in backend and frontend.
- Use the provided scripts for builds, tests, and linting.
- Reference `ApiConstraint.tsx` for API endpoint usage.
- Follow strict TypeScript conventions.
- When adding new features, mirror the existing module/component structure.

---

_Ask for feedback if any section is unclear or missing important project-specific details._
