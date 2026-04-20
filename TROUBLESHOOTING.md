# Troubleshooting Guide

## ❌ Error: "Failed to fetch" or "Cannot connect to server"

This error means your frontend cannot connect to your backend server.

### Quick Fix Steps:

#### 1️⃣ Check if Backend is Running

Open a terminal and run:
```bash
cd backend
ls -la
```

Look for `.env` file. If it doesn't exist, create it!

#### 2️⃣ Create Backend .env File

**IMPORTANT:** You must create a `.env` file in the backend folder.

```bash
cd backend
touch .env  # On Mac/Linux
# OR
type nul > .env  # On Windows
```

Then add this content to `backend/.env`:
```env
PORT=5002
MONGO_URI=mongodb://localhost:27017/faculty-information
JWT_SECRET=your-secret-key-here-change-me
```

#### 3️⃣ Start MongoDB

**Check if MongoDB is running:**

```bash
# On Mac/Linux
mongod --version

# On Windows
mongod --version
```

If MongoDB is not installed or not running:

**On Mac (Homebrew):**
```bash
brew services start mongodb-community
```

**On Windows:**
- Open Services (services.msc)
- Find "MongoDB"
- Start the service

**On Linux:**
```bash
sudo systemctl start mongod
```

#### 4️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

This installs:
- express
- mongoose  
- bcryptjs
- jsonwebtoken
- cors
- dotenv

#### 5️⃣ Start Backend Server

```bash
cd backend
npm start
```

You should see:
```
Connecting to Faculty Information database...
Faculty Information database connected successfully.
Faculty Information API server is running on http://localhost:5002
```

**If you see an error**, common issues:

**Error: "MONGO_URI is not defined"**
→ You didn't create the .env file (see step 2)

**Error: "Cannot connect to MongoDB"**
→ MongoDB is not running (see step 3)

**Error: "Module not found"**
→ Run `npm install` in backend folder (see step 4)

#### 6️⃣ Start Frontend (in a NEW terminal)

```bash
cd frontend
npm install  # First time only
npm run dev
```

#### 7️⃣ Test the Connection

Open your browser and visit:
```
http://localhost:5002/api/auth/login
```

You should see an error (that's OK!) or a response. If you see "Failed to connect" or "ERR_CONNECTION_REFUSED", the backend is NOT running.

---

## ✅ Verification Checklist

- [ ] Backend `.env` file exists
- [ ] MongoDB is running
- [ ] Backend dependencies installed (`npm install` in backend/)
- [ ] Backend server is running (`npm start` in backend/)
- [ ] Backend shows "API server is running on http://localhost:5002"
- [ ] Frontend server is running (`npm run dev` in frontend/)
- [ ] Browser shows frontend (usually http://localhost:5173)

---

## 🔍 Common Issues

### Issue 1: "Cannot find module"

**Solution:**
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
```

### Issue 2: "Port 5002 already in use"

**Solution:**
```bash
# Mac/Linux
lsof -ti:5002 | xargs kill

# Windows
netstat -ano | findstr :5002
taskkill /PID <PID_NUMBER> /F
```

Or change the port in `backend/.env`:
```env
PORT=5003
```

### Issue 3: MongoDB connection error

**Solution:**

If using local MongoDB:
```bash
mongod
```

If using MongoDB Atlas, update `.env`:
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/faculty-information
```

### Issue 4: CORS error

**Solution:**
The backend already has CORS enabled. Make sure:
1. Backend is running on port 5002
2. Frontend API calls use `http://localhost:5002`

### Issue 5: "Cannot read property 'json' of undefined"

**Solution:**
This means the fetch failed. The backend is NOT running. Follow steps 1-5 above.

---

## 🚀 Quick Test

Run this to test if everything works:

**Terminal 1:**
```bash
cd backend
npm start
```

**Terminal 2:**
```bash
cd frontend  
npm run dev
```

**Browser:**
```
http://localhost:5173
```

Try to sign up. If you see "Cannot connect to server", the backend is not running in Terminal 1.

---

## 📞 Still Having Issues?

1. Check both terminals for error messages
2. Make sure MongoDB is installed and running
3. Verify `.env` file exists in backend folder
4. Check that ports 5002 and 5173 are not blocked by firewall
5. Try restarting your computer
6. Check the browser console (F12) for detailed error messages

---

## 🎯 Proper Startup Sequence

1. **Start MongoDB** (if local)
2. **Start Backend** (`cd backend && npm start`)
3. **Start Frontend** (`cd frontend && npm run dev`)
4. **Open Browser** (localhost:5173)
5. **Sign Up** (create account)
6. **Login** (with credentials)
7. **Use App** (manage faculty)

---

## ✅ Success Indicators

When everything works, you'll see:

**Terminal 1 (Backend):**
```
Connecting to Faculty Information database...
Faculty Information database connected successfully.
Faculty Information API server is running on http://localhost:5002
```

**Terminal 2 (Frontend):**
```
VITE v7.x.x  ready in xxx ms
➜  Local:   http://localhost:5173/
```

**Browser:**
- Signup page loads
- Can create account
- Redirects to dashboard
- No console errors

🎉 **You're all set!**

