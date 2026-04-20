# ⚡ Instant Setup Guide

**Having "Failed to fetch" error?** Follow these steps EXACTLY:

---

## 🚨 CRITICAL: Create .env File FIRST

**The most common issue is missing `.env` file!**

### Step 1: Create Backend .env File

Open a terminal and run:

```bash
cd /Users/mdkamranahmad/Desktop/Aryan/Faculty-information/backend
cat > .env << 'EOF'
PORT=5002
MONGO_URI=mongodb://localhost:27017/faculty-information
JWT_SECRET=mySecretKey123456789
EOF
```

Or manually create `backend/.env` with this content:
```env
PORT=5002
MONGO_URI=mongodb://localhost:27017/faculty-information
JWT_SECRET=mySecretKey123456789
```

---

## ✅ Step 2: Check MongoDB

**On Mac:**
```bash
brew services start mongodb-community
# OR if not installed:
# brew tap mongodb/brew
# brew install mongodb-community
# brew services start mongodb-community
```

**On Windows:**
- Open Services (Win+R → `services.msc`)
- Find "MongoDB" → Right click → Start

**Check if running:**
```bash
mongosh
# If it connects, MongoDB is running ✓
# Type 'exit' to quit
```

---

## 🚀 Step 3: Install & Start Backend

**Open Terminal 1:**

```bash
cd /Users/mdkamranahmad/Desktop/Aryan/Faculty-information/backend
npm install
npm start
```

**Wait for this message:**
```
✓ Faculty Information database connected successfully.
✓ Faculty Information API server is running on http://localhost:5002
```

**If you see errors:**
- "MONGO_URI is not defined" → Step 1 not completed
- "Cannot connect to MongoDB" → Step 2 not completed  
- "Module not found" → Run `npm install` again

---

## 🌐 Step 4: Start Frontend

**Open a NEW Terminal (Terminal 2):**

```bash
cd /Users/mdkamranahmad/Desktop/Aryan/Faculty-information/frontend
npm install
npm run dev
```

**Wait for:**
```
✓ Local:   http://localhost:5173/
```

---

## 🎯 Step 5: Open Browser

Go to: **http://localhost:5173**

You should see the **Signup/Login page**.

---

## 🧪 Step 6: Test It

1. Click **"create a new account"**
2. Enter:
   - Username: `test`
   - Email: `test@test.com`
   - Password: `password123`
   - Confirm: `password123`
3. Click **"Sign up"**

**If successful:**
✅ You'll be redirected to dashboard
✅ You can add faculty members

**If you see "Cannot connect to server":**
❌ Backend is NOT running (check Terminal 1)

---

## 🔍 Quick Fixes

### Problem: Backend won't start

```bash
# Check if .env exists
ls backend/.env

# If NOT, create it:
cd backend
echo "PORT=5002" > .env
echo "MONGO_URI=mongodb://localhost:27017/faculty-information" >> .env
echo "JWT_SECRET=mySecretKey123" >> .env

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Start again
npm start
```

### Problem: MongoDB connection error

```bash
# Start MongoDB
brew services start mongodb-community  # Mac
sudo systemctl start mongod            # Linux

# Or use MongoDB Atlas (cloud)
# Update MONGO_URI in .env with your Atlas connection string
```

### Problem: Port in use

```bash
# Kill process on port 5002
lsof -ti:5002 | xargs kill  # Mac/Linux

# Or change port in .env
PORT=5003
```

---

## ✅ Success Checklist

Before testing, verify:

- [ ] `backend/.env` file exists
- [ ] MongoDB is running (`mongosh` connects)
- [ ] Terminal 1 shows: "API server is running on http://localhost:5002"
- [ ] Terminal 2 shows: "Local: http://localhost:5173/"
- [ ] Browser opens to signup/login page
- [ ] No console errors (F12 → Console)

---

## 🎉 You're Done!

If all checkboxes are ✅, your app is working!

**Still stuck?** See TROUBLESHOOTING.md for more help.

