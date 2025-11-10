# Email API Setup Guide

Complete guide to set up the consultation form email functionality.

## Overview

The consultation form now sends emails automatically when users submit enquiries. The system:
- Sends a detailed email to the admin (you) with all form details
- Sends a confirmation email to the customer
- Uses a Node.js backend API with nodemailer

## Step-by-Step Setup

### Step 1: Install Server Dependencies

```bash
cd server
npm install
```

### Step 2: Configure Email Settings

You need to set up email credentials. The easiest way is using Gmail.

#### Option A: Using Gmail (Recommended)

1. **Enable 2-Step Verification** on your Google Account:
   - Go to https://myaccount.google.com/security
   - Click on "2-Step Verification" and follow the setup

2. **Create an App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Click "Generate"
   - Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)

3. **Update the `.env` file** in the root directory:
   ```env
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASSWORD=abcdefghijklmnop
   RECIPIENT_EMAIL=timothyobosi8@gmail.com
   ```

#### Option B: Using Other Email Services

For Outlook/Hotmail:
```env
EMAIL_SERVICE=outlook
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
```

For Yahoo:
```env
EMAIL_SERVICE=yahoo
EMAIL_USER=your-email@yahoo.com
EMAIL_PASSWORD=your-password
```

### Step 3: Start the Backend Server

In the `server` directory:

```bash
# Development mode (auto-reload on changes)
npm run dev

# OR Production mode
npm start
```

You should see: `Server running on port 3001`

### Step 4: Start the Frontend

In the root directory (separate terminal):

```bash
npm run dev
```

### Step 5: Test the Setup

#### Quick Test (Using Test Script)

```bash
cd server
node test-api.js
```

This will test both the health check and form submission endpoints.

#### Manual Test (Using the Form)

1. Open your browser to the development URL (usually http://localhost:5173)
2. Navigate to the consultation form
3. Fill out all required fields
4. Click "Submit Request"
5. Check for:
   - Success message on the form
   - Email in your inbox (RECIPIENT_EMAIL)
   - Confirmation email sent to the customer

## Troubleshooting

### "Authentication failed" or "Invalid credentials"

**Solution:** Make sure you're using an App Password, not your regular Gmail password.

### "Port 3001 already in use"

**Solution:** Change the port in `.env`:
```env
PORT=3002
```

And update the frontend API URL:
```env
VITE_API_URL=http://localhost:3002
```

### Emails not being received

1. Check spam/junk folder
2. Verify email credentials are correct
3. Check server console for error messages
4. Test with the test script: `node server/test-api.js`

### CORS errors in browser console

**Solution:** The server is configured to accept all origins. If you still see CORS errors, check that:
- The API URL in `.env` matches the server port
- The server is actually running

### "Network error" when submitting form

**Solution:** 
- Ensure the backend server is running
- Check that `VITE_API_URL` in `.env` is correct
- Restart the frontend dev server after changing `.env`

## Production Deployment

### Backend Deployment

1. Deploy the `server` folder to a hosting service (Heroku, Railway, Render, etc.)
2. Set environment variables on the hosting platform
3. Update the production URL

### Frontend Configuration

Update `.env` for production:
```env
VITE_API_URL=https://your-api-domain.com
```

### Security Recommendations

1. **Never commit `.env` file** - it's already in `.gitignore`
2. **Use environment variables** on your hosting platform
3. **Update CORS settings** in `server/index.js` to only allow your domain:
   ```javascript
   app.use(cors({
     origin: 'https://your-domain.com'
   }));
   ```
4. **Use HTTPS** in production
5. **Add rate limiting** to prevent spam

## Email Template Customization

To customize the email templates, edit `server/index.js`:

- `adminEmailHtml` - Email sent to you with enquiry details
- `customerEmailHtml` - Confirmation email sent to customer

## Support

If you encounter issues:
1. Check the server console for error messages
2. Run the test script: `node server/test-api.js`
3. Verify all environment variables are set correctly
4. Check the troubleshooting section above
