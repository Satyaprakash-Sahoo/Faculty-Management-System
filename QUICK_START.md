# Quick Start Guide

Get up and running in 5 minutes!

## Prerequisites Check

```bash
node --version  # Should be v14 or higher
npm --version   # Should be 6 or higher
mongod --version # MongoDB should be installed
```

## Installation Steps

### 1. Backend Setup

```bash
cd backend
npm install
```

Create `backend/.env`:
```env
PORT=5002
MONGO_URI=mongodb://localhost:27017/faculty-information
JWT_SECRET=mySecretKey123
```

```bash
npm start
```
✅ Backend running on http://localhost:5002

### 2. Frontend Setup

Open a **NEW terminal**:

```bash
cd frontend
npm install
npm run dev
```
✅ Frontend running on http://localhost:5173

### 3. Open Browser

Go to: **http://localhost:5173**

## First Time Use

1. Click **"create a new account"**
2. Enter:
   - Username: `testuser`
   - Email: `test@example.com`
   - Password: `password123`
3. Click **"Sign up"**
4. You're in! 🎉

## Add Faculty Member

1. Click **"Add New Faculty"**
2. Fill in the form
3. Click **"Add Faculty"**
4. Done!

## Need Help?

- Backend issues? Check terminal 1
- Frontend issues? Check terminal 2
- Can't connect? Make sure MongoDB is running
- See full docs: README.md

## Common Issues

**"Cannot connect to database"**
→ Start MongoDB: `mongod` or `brew services start mongodb-community`

**"Port already in use"**
→ Change PORT in backend/.env or kill the process using the port

**"Module not found"**
→ Delete `node_modules` and run `npm install` again

**"Blank page"**
→ Check browser console (F12) for errors

## Next Steps

- Read SETUP_INSTRUCTIONS.md for detailed setup
- Read README.md for full documentation
- Read PROJECT_SUMMARY.md for architecture overview

Happy coding! 🚀

