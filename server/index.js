import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from parent directory
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Debug: Check if credentials are loaded
console.log('Email User:', process.env.EMAIL_USER ? 'Loaded ✓' : 'Missing ✗');
console.log('Email Password:', process.env.EMAIL_PASSWORD ? 'Loaded ✓' : 'Missing ✗');
console.log('Recipient Email:', process.env.RECIPIENT_EMAIL ? 'Loaded ✓' : 'Missing ✗');

// Email configuration
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Service labels mapping
const serviceLabels = {
  'blood-test': 'Blood Test',
  'molecular': 'Molecular Diagnostics',
  'microbiology': 'Microbiology',
  'urine-analysis': 'Urine Analysis',
  'cardiac': 'Cardiac Markers',
  'vaccination': 'Vaccination',
  'consultation': 'General Consultation',
  'other': 'Other'
};

// API endpoint to handle form submission
app.post('/api/enquiry', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, serviceType, message, preferredDate } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !serviceType || !preferredDate) {
      return res.status(400).json({ 
        success: false, 
        message: 'All required fields must be provided' 
      });
    }

    const serviceName = serviceLabels[serviceType] || serviceType;
    
    // Email content for the admin
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Consultation Enquiry</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${serviceName}</p>
          <p><strong>Preferred Date:</strong> ${preferredDate}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message || 'N/A'}</p>
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">Submitted via 24ShapesLab Website</p>
      </div>
    `;

    // Email content for the customer (confirmation)
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Thank You for Your Enquiry</h2>
        <p>Dear ${firstName},</p>
        <p>We have received your consultation request for <strong>${serviceName}</strong>.</p>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Your Submission Details:</h3>
          <p><strong>Service:</strong> ${serviceName}</p>
          <p><strong>Preferred Date:</strong> ${preferredDate}</p>
          <p><strong>Contact Email:</strong> ${email}</p>
          <p><strong>Contact Phone:</strong> ${phone}</p>
        </div>
        <p>Our team will review your request and get back to you within 24-48 hours.</p>
        <p>Best regards,<br/>24ShapesLab Team</p>
      </div>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Consultation Enquiry – ${serviceName} – ${firstName} ${lastName}`,
      html: adminEmailHtml,
      replyTo: email,
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Consultation Request Received - 24ShapesLab',
      html: customerEmailHtml,
    });

    res.status(200).json({ 
      success: true, 
      message: 'Enquiry submitted successfully. Check your email for confirmation.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to submit enquiry. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
