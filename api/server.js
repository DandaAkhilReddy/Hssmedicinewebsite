// Express Server for HSS Website Contact Form
const express = require('express');
const cors = require('cors');
const path = require('path');
const { insertContact, getAllContacts, getContactsCount } = require('./database');

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the parent directory
app.use(express.static(path.join(__dirname, '..')));

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
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

    // Get IP address and user agent
    const ip_address = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const user_agent = req.headers['user-agent'];

    // Insert into database
    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : null,
      organization: organization ? organization.trim() : null,
      service: service || null,
      message: message.trim(),
      ip_address,
      user_agent
    };

    const contactId = insertContact(contactData);

    console.log(`✅ New contact submission: ID ${contactId} from ${email}`);

    // Send success response
    res.json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      contactId
    });

  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    res.status(500).json({
      success: false,
      error: 'An error occurred while processing your request. Please try again later.'
    });
  }
});

// Get all contacts (admin endpoint - you might want to add authentication later)
app.get('/api/contacts', (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 100;
    const contacts = getAllContacts(limit);
    const total = getContactsCount();

    res.json({
      success: true,
      total,
      contacts
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch contacts'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    database: 'connected',
    timestamp: new Date().toISOString()
  });
});

// Serve index.html for root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════════════╗
║  🏥 HSS Hospital Specialists Server                        ║
║  🌐 Server running on: http://localhost:${PORT}            ║
║  📊 Database: SQLite (contacts.db)                         ║
║  📬 Contact API: http://localhost:${PORT}/api/contact      ║
║  📋 View contacts: http://localhost:${PORT}/api/contacts   ║
╚════════════════════════════════════════════════════════════╝
  `);
});

module.exports = app;
