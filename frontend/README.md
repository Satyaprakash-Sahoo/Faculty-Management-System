# Frontend - Faculty Information Management

This is the frontend React application for the Faculty Information Management System.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port Vite assigns).

## Building for Production

```bash
npm run build
```

## Dependencies

- **react**: UI library
- **react-dom**: React rendering
- **react-router-dom**: Routing
- **vite**: Build tool and dev server
- **tailwindcss**: Styling (loaded via CDN in index.html)

## Project Structure

- `src/components/` - Reusable components
- `src/pages/` - Page components
- `src/context/` - React Context providers
- `src/App.jsx` - Main app component with routing
- `src/index.jsx` - Entry point
- `index.html` - HTML template

## Features

- User authentication (signup/login)
- Protected routes
- Faculty CRUD operations
- Responsive design
- Modern UI with Tailwind CSS

