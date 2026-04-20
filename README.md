# Faculty Information Management System

A full-stack application for managing faculty information with authentication and authorization. Users can sign up, login, and manage faculty member details including adding, editing, and deleting records.

## Features

- **User Authentication**: Sign up and login functionality
- **Protected Routes**: Dashboard and faculty management pages require authentication
- **Faculty Management**: CRUD operations for faculty members
- **Modern UI**: Built with React and Tailwind CSS
- **Secure Backend**: JWT-based authentication with bcrypt password hashing

## Tech Stack

### Frontend
- React 19.2.0
- React Router DOM 7.9.4
- Tailwind CSS
- Vite

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS enabled

## Project Structure

```
Faculty-information/
├── backend/
│   ├── models/
│   │   ├── User.js          # User model for authentication
│   │   └── Faculty.js       # Faculty model for faculty data
│   ├── routes/
│   │   ├── auth.js          # Authentication routes (signup, login)
│   │   └── faculty.js       # Faculty CRUD routes
│   ├── middleware/
│   │   └── auth.js          # JWT authentication middleware
│   ├── server.js            # Express server setup
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Login.jsx    # Login component
│   │   ├── context/
│   │   │   ├── AuthContext.jsx      # Authentication context
│   │   │   └── FacultyContext.jsx   # Faculty data context
│   │   ├── pages/
│   │   │   ├── Signup.jsx          # Signup page
│   │   │   ├── Dashboard.jsx       # Main dashboard
│   │   │   ├── FacultyForm.jsx     # Add/Edit faculty form
│   │   │   └── FacultyList.jsx     # Faculty list view
│   │   ├── App.jsx          # Main app component with routes
│   │   └── index.jsx        # Entry point
│   ├── index.html
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository** (if applicable)

2. **Set up the Backend**

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
PORT=5002
MONGO_URI=mongodb://localhost:27017/faculty-information
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

3. **Set up the Frontend**

```bash
cd ../frontend
npm install
```

### Running the Application

1. **Start MongoDB** (if running locally):
```bash
mongod
```

2. **Start the Backend Server**:
```bash
cd backend
npm start
```

The backend will run on `http://localhost:5002`

3. **Start the Frontend** (in a new terminal):
```bash
cd frontend
npm run dev
```

The frontend will run on `http://localhost:5173` (or the port Vite assigns)

### Seed Data (Optional)

After starting the backend, you can seed the database with sample faculty data by visiting:
```
http://localhost:5002/api/seed-faculty
```

## API Endpoints

### Authentication

- `POST /api/auth/signup` - Register a new user
  - Body: `{ username, email, password }`
  - Returns: `{ token, user }`

- `POST /api/auth/login` - Login user
  - Body: `{ username, password }`
  - Returns: `{ token, user }`

- `GET /api/auth/me` - Get current user (protected)
  - Headers: `Authorization: Bearer <token>`
  - Returns: `{ user }`

### Faculty Management

- `GET /api/faculty` - Get all faculty members (protected)
- `GET /api/faculty/:id` - Get a single faculty member (protected)
- `POST /api/faculty` - Create a new faculty member (protected)
- `PUT /api/faculty/:id` - Update a faculty member (protected)
- `DELETE /api/faculty/:id` - Delete a faculty member (protected)

## User Flow

1. **Sign Up**: User creates an account with username, email, and password
2. **Login**: User logs in with username and password
3. **Dashboard**: After login, user is redirected to the dashboard
4. **Manage Faculty**: User can add, edit, view, and delete faculty members
5. **Logout**: User can logout and will be redirected to login page

## Security Features

- Passwords are hashed using bcrypt before storing
- JWT tokens for stateless authentication
- Protected API routes with middleware
- CORS enabled for frontend-backend communication

## Development Notes

- The application uses ES6 modules (type: "module" in package.json)
- Frontend uses React Router for navigation
- Authentication state is managed with React Context
- All protected routes redirect to login if not authenticated

## License

This project is for educational purposes.

