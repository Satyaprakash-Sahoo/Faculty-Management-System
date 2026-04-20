# Backend API - Faculty Information Management

This is the backend server for the Faculty Information Management System.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the backend directory:
```env
PORT=5002
MONGO_URI=mongodb://localhost:27017/faculty-information
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

3. Make sure MongoDB is running on your system.

4. Start the server:
```bash
npm start
```

## Dependencies

- **express**: Web framework for Node.js
- **mongoose**: MongoDB object modeling
- **jsonwebtoken**: JWT authentication
- **bcryptjs**: Password hashing
- **cors**: Enable CORS for frontend communication
- **dotenv**: Environment variable management

## API Routes

See main README.md for API endpoint documentation.

## Database Models

### User Model
- username (unique)
- email (unique)
- password (hashed)
- role (default: 'user')

### Faculty Model
- name
- subject
- email (unique)
- phone
- qualification
- experience
- profilePicture (optional)
- timestamps (createdAt, updatedAt)

