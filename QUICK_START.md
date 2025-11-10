# Quick Start Guide - Email API

## 🚀 Get Started in 3 Steps

### 1️⃣ Install Server Dependencies
```bash
cd server
npm install
```

### 2️⃣ Configure Email (in root `.env` file)
```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
RECIPIENT_EMAIL=timothyobosi8@gmail.com
```

**Get Gmail App Password:**
1. Go to https://myaccount.google.com/apppasswords
2. Generate password for "Mail"
3. Copy the 16-character code

### 3️⃣ Start Both Servers

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

## ✅ Test It

```bash
cd server
node test-api.js
```

## 📧 What Happens When Form is Submitted?

1. User fills out consultation form
2. Form data sent to API at `http://localhost:3001/api/enquiry`
3. Two emails are sent:
   - **Admin email** → `timothyobosi8@gmail.com` (with all details)
   - **Customer email** → User's email (confirmation)
4. Success message shown to user

## 🔧 Common Issues

**"Invalid credentials"**
→ Use App Password, not regular Gmail password

**"Port already in use"**
→ Change `PORT=3002` in `.env`

**"Network error"**
→ Make sure backend server is running on port 3001

## 📚 Full Documentation

- Detailed setup: `SETUP_GUIDE.md`
- Server docs: `server/README.md`
