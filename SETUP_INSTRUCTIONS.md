# Setup Instructions

Follow these steps to get the Faculty Information Management System up and running.

## Prerequisites

Make sure you have installed:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** - [Download here](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **npm** (comes with Node.js)

## Step 1: Set Up MongoDB

### Option A: Local MongoDB
1. Install MongoDB Community Edition
2. Start MongoDB service:
   ```bash
   # On macOS
   brew services start mongodb-community
   
   # On Windows
   net start MongoDB
   
   # On Linux
   sudo systemctl start mongod
   ```

### Option B: MongoDB Atlas (Cloud)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get your connection string
4. Update the MONGO_URI in backend/.env

## Step 2: Set Up Backend

1. **Navigate to backend folder:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create .env file:**
   ```bash
   # On Unix/Mac/Linux
   touch .env
   
   # On Windows
   type nul > .env
   ```

4. **Add the following to backend/.env:**
   ```env
   PORT=5002
   MONGO_URI=mongodb://localhost:27017/faculty-information
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   ```

   If using MongoDB Atlas, replace `MONGO_URI` with your Atlas connection string.

5. **Start the backend server:**
   ```bash
   npm start
   ```

   You should see:
   ```
   Connecting to Faculty Information database...
   Faculty Information database connected successfully.
   Faculty Information API server is running on http://localhost:5002
   ```

6. **(Optional) Seed the database:**
   Open your browser and visit:
   ```
   http://localhost:5002/api/seed-faculty
   ```

## Step 3: Set Up Frontend

1. **Open a new terminal window** and navigate to frontend folder:
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the frontend development server:**
   ```bash
   npm run dev
   ```

   You should see:
   ```
   VITE v7.x.x  ready in xxx ms
   
   ➜  Local:   http://localhost:5173/
   ➜  Network: use --host to expose
   ```

## Step 4: Access the Application

1. Open your browser and go to: `http://localhost:5173`

2. **Sign Up:**
   - Click on "create a new account" or go to `/signup`
   - Enter a username, email, and password
   - Click "Sign up"
   - You'll be redirected to the dashboard

3. **Login:**
   - If you already have an account, go to `/login`
   - Enter your username and password
   - Click "Sign in"

4. **Manage Faculty:**
   - Click "Add New Faculty" to add a faculty member
   - Use "Edit" to modify existing records
   - Use "Delete" to remove faculty members

## Troubleshooting

### Backend won't start
- Make sure MongoDB is running
- Check that PORT 5002 is not in use
- Verify your .env file has correct MongoDB URI
- Check the error messages in the terminal

### Frontend can't connect to backend
- Ensure backend is running on port 5002
- Check the API_URL in FacultyContext.jsx and AuthContext.jsx
- Look for CORS errors in the browser console

### MongoDB connection errors
- Verify MongoDB is running: `mongosh` or `mongo --eval "db.adminCommand('ping')"`
- Check your MONGO_URI in backend/.env
- Make sure you have network access (for Atlas)

### Module not found errors
- Run `npm install` again in both frontend and backend folders
- Delete `node_modules` and `package-lock.json`, then run `npm install`

### Port already in use
- For frontend: Change port in vite.config.js or use `--port` flag
- For backend: Change PORT in backend/.env
- Kill process using the port:
  - Mac/Linux: `lsof -ti:5002 | xargs kill`
  - Windows: `netstat -ano | findstr :5002` then `taskkill /PID <PID> /F`

## Default Routes

- `/` - Redirects to dashboard (requires login)
- `/login` - Login page
- `/signup` - Signup page
- `/dashboard` - Main dashboard (protected)
- `/add` - Add new faculty (protected)
- `/edit/:id` - Edit faculty member (protected)

## Security Notes

- Change JWT_SECRET in production
- Use environment variables for sensitive data
- Implement HTTPS in production
- Add input validation and sanitization
- Consider rate limiting for API endpoints

## Development Tips

- Use browser DevTools to debug
- Check Network tab for API calls
- Use React DevTools extension
- Enable MongoDB logs for database debugging
- Use Postman to test API endpoints independently

## Production Deployment

For production deployment:
1. Build frontend: `cd frontend && npm run build`
2. Use environment-specific .env files
3. Set up reverse proxy (Nginx)
4. Use process manager (PM2)
5. Enable HTTPS
6. Configure MongoDB for production
7. Set up monitoring and logging

