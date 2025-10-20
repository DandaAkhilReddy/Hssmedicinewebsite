// SQLite Database Setup for Contact Form
const Database = require('better-sqlite3');
const path = require('path');

// Create database file in the api folder
const dbPath = path.join(__dirname, 'contacts.db');
const db = new Database(dbPath);

// Create contacts table if it doesn't exist
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    organization TEXT,
    service TEXT,
    message TEXT NOT NULL,
    submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    ip_address TEXT,
    user_agent TEXT
  )
`;

db.exec(createTableQuery);

// Create index on email for faster lookups
db.exec('CREATE INDEX IF NOT EXISTS idx_email ON contacts(email)');
db.exec('CREATE INDEX IF NOT EXISTS idx_submitted_at ON contacts(submitted_at)');

console.log('✅ Database initialized successfully at:', dbPath);

// Function to insert a new contact
function insertContact(contactData) {
  const stmt = db.prepare(`
    INSERT INTO contacts (name, email, phone, organization, service, message, ip_address, user_agent)
    VALUES (@name, @email, @phone, @organization, @service, @message, @ip_address, @user_agent)
  `);

  const info = stmt.run(contactData);
  return info.lastInsertRowid;
}

// Function to get all contacts (for admin purposes)
function getAllContacts(limit = 100) {
  const stmt = db.prepare('SELECT * FROM contacts ORDER BY submitted_at DESC LIMIT ?');
  return stmt.all(limit);
}

// Function to get contact by ID
function getContactById(id) {
  const stmt = db.prepare('SELECT * FROM contacts WHERE id = ?');
  return stmt.get(id);
}

// Function to get contacts count
function getContactsCount() {
  const stmt = db.prepare('SELECT COUNT(*) as count FROM contacts');
  return stmt.get().count;
}

module.exports = {
  db,
  insertContact,
  getAllContacts,
  getContactById,
  getContactsCount
};
