import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const ownerEmail = process.env.OWNER_EMAIL || 'owner@horizontravelhub.com';

const generateOwnerEmailHTML = (data) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; }
        .container { background-color: white; border-radius: 10px; padding: 20px; max-width: 600px; margin: 0 auto; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { background-color: #1e40af; color: white; padding: 15px; border-radius: 8px 8px 0 0; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { padding: 20px; }
        .info { margin: 10px 0; padding: 10px; background-color: #f0f0f0; border-radius: 5px; }
        .info strong { display: inline-block; width: 120px; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        .button { display: inline-block; background-color: #1e40af; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Inquiry from Horizon Travel Hub</h1>
        </div>
        <div class="content">
          <p>You have received a new inquiry from your website. Here are the details:</p>
          
          <div class="info">
            <strong>Name:</strong> ${data.name}
          </div>
          
          <div class="info">
            <strong>Email:</strong> ${data.email}
          </div>
          
          <div class="info">
            <strong>Phone:</strong> ${data.phone}
          </div>
          
          <div class="info">
            <strong>Service Needed:</strong> ${data.service}
          </div>
          
          <div class="info">
            <strong>Message:</strong> ${data.message}
          </div>
          
          <p>Please respond to this inquiry as soon as possible.</p>
          
          <p>
            <a href="mailto:${data.email}" class="button">Reply to ${data.name}</a>
          </p>
        </div>
        <div class="footer">
          <p>Horizon Travel Hub - Your Gateway to the World</p>
          <p>Powered by Nodemailer</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

const generateUserEmailHTML = (data) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; }
        .container { background-color: white; border-radius: 10px; padding: 20px; max-width: 600px; margin: 0 auto; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { background-color: #10b981; color: white; padding: 15px; border-radius: 8px 8px 0 0; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { padding: 20px; }
        .info { margin: 10px 0; padding: 10px; background-color: #f0f0f0; border-radius: 5px; }
        .info strong { display: inline-block; width: 120px; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        .button { display: inline-block; background-color: #1e40af; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You for Your Inquiry!</h1>
        </div>
        <div class="content">
          <p>Dear ${data.name},</p>
          
          <p>Thank you for choosing Horizon Travel Hub! We have received your inquiry and our team will get back to you within 24-48 hours.</p>
          
          <h3>Your Inquiry Details:</h3>
          
          <div class="info">
            <strong>Name:</strong> ${data.name}
          </div>
          
          <div class="info">
            <strong>Email:</strong> ${data.email}
          </div>
          
          <div class="info">
            <strong>Phone:</strong> ${data.phone}
          </div>
          
          <div class="info">
            <strong>Service Needed:</strong> ${data.service}
          </div>
          
          <div class="info">
            <strong>Message:</strong> ${data.message}
          </div>
          
          <p>Our team of travel experts is working on your request and will contact you shortly with personalized assistance.</p>
          
          <p>If you have any urgent questions, please feel free to call us at +91 12345 67890 or email us directly at ${ownerEmail}.</p>
          
          <p>
            <a href="https://horizontravelhub.com" class="button">Visit Our Website</a>
          </p>
        </div>
        <div class="footer">
          <p>Horizon Travel Hub - Your Gateway to the World</p>
          <p>Powered by Nodemailer</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    const mailOptionsToOwner = {
      from: process.env.SMTP_USER,
      to: ownerEmail,
      subject: `New Inquiry from ${name} - Horizon Travel Hub`,
      html: generateOwnerEmailHTML({ name, email, phone, service, message }),
    };

    const mailOptionsToUser = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank You for Your Inquiry - Horizon Travel Hub',
      html: generateUserEmailHTML({ name, email, phone, service, message }),
    };

    await transporter.sendMail(mailOptionsToOwner);
    await transporter.sendMail(mailOptionsToUser);

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).json({ error: 'Failed to send emails' });
  }
});

app.get('/', (req, res) => {
  res.json({ message: 'Email server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});