// Vercel Serverless Function for Contact Form
// Uses file-based storage (JSON) for free deployment

const fs = require('fs');
const path = require('path');

// For Vercel deployment, we'll use a simple JSON file storage
// (In production with persistent storage needs, use Vercel Postgres or another DB)

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    });
  }

  try {
    const { name, email, phone, organization, service, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required fields'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email address'
      });
    }

    // Create contact data object
    const contactData = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : null,
      organization: organization ? organization.trim() : null,
      service: service || null,
      message: message.trim(),
      submitted_at: new Date().toISOString(),
      ip_address: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      user_agent: req.headers['user-agent']
    };

    // For local development, save to file
    // For Vercel deployment, you would send this to:
    // - Vercel Postgres
    // - External API
    // - Email service (SendGrid, Resend, etc.)

    // Log submission (in production, send email notification)
    console.log('📧 New contact submission:', {
      name: contactData.name,
      email: contactData.email,
      timestamp: contactData.submitted_at
    });

    // TODO: In production, send email notification to the configured team inbox (info@hssmedicine.com by default)
    // using a service like SendGrid, Resend, or Nodemailer

    // Send success response
    res.status(200).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      contactId: contactData.id
    });

  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    res.status(500).json({
      success: false,
      error: 'An error occurred while processing your request. Please try again later.'
    });
  }
};
