# 24ShapesLab Email API Server

Backend API for handling consultation form submissions and sending email notifications.

## Setup Instructions

### 1. Install Dependencies

Navigate to the server directory and install packages:

```bash
cd server
npm install
```

### 2. Configure Email Settings

Update the `.env` file in the root directory with your email credentials:

```env
# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
RECIPIENT_EMAIL=timothyobosi8@gmail.com
PORT=3001
```

### Gmail Setup (Recommended)

If using Gmail, you need to create an **App Password**:

1. Go to your Google Account settings
2. Navigate to Security > 2-Step Verification (enable if not already)
3. Scroll down to "App passwords"
4. Generate a new app password for "Mail"
5. Use this 16-character password as `EMAIL_PASSWORD`

**Note:** Never use your regular Gmail password. Always use an app-specific password.

### Alternative Email Services

You can use other email services by changing `EMAIL_SERVICE`:
- `gmail` (default)
- `outlook`
- `yahoo`
- Or configure custom SMTP settings in `server/index.js`

### 3. Run the Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will run on `http://localhost:3001`

## API Endpoints

### POST /api/enquiry
Submit a consultation form

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "serviceType": "blood-test",
  "message": "Optional message",
  "preferredDate": "2025-11-15"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Enquiry submitted successfully. Check your email for confirmation."
}
```

### GET /api/health
Health check endpoint

**Response:**
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

## Email Features

- Sends formatted email to admin with enquiry details
- Sends confirmation email to customer
- HTML formatted emails with professional styling
- Reply-to set to customer's email for easy response

## Troubleshooting

**Port already in use:**
Change the `PORT` in `.env` file

**Email not sending:**
- Verify email credentials are correct
- Check if 2-Step Verification is enabled (for Gmail)
- Ensure app password is used (not regular password)
- Check firewall/antivirus settings

**CORS errors:**
The server is configured to accept requests from any origin. For production, update the CORS settings in `server/index.js`
