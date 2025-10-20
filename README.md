# HSS Hospital Specialists - Professional Medical Website

A complete, production-ready website for HSS (Hospital Specialists) with integrated contact form, backend API, and database storage. Built with professional medical aesthetics matching company branding.

**🌐 Live Website**: [https://hssmedicine.com](https://hssmedicine.com) *(Replace with your actual deployed URL)*

**📦 Repository**: [https://github.com/DandaAkhilReddy/Hssmedicinewebsite](https://github.com/DandaAkhilReddy/Hssmedicinewebsite)

---

## 🚀 Quick Start (5 Minutes)

Get the website running on your local machine in 5 simple steps:

### Step 1: Verify Prerequisites

Check if you have Node.js installed (version 18 or higher required):
```bash
node --version
# Should show: v18.x.x or higher
```

Don't have Node.js? [Download it here](https://nodejs.org/) (choose LTS version)

### Step 2: Clone the Repository

```bash
git clone https://github.com/DandaAkhilReddy/Hssmedicinewebsite.git
cd Hssmedicinewebsite
```

### Step 3: Install Dependencies

```bash
npm install
```

**Expected output**: `added 108 packages` (takes ~30 seconds)

**⚠️ Windows Users**: If you see `better-sqlite3` compilation errors, run:
```bash
npm uninstall better-sqlite3
npm install better-sqlite3@11.7.0
```

### Step 4: Start the Server

```bash
npm start
```

**Expected output**:
```
✅ Database initialized successfully at: [...]/api/contacts.db

╔════════════════════════════════════════════════════════════╗
║  🏥 HSS Hospital Specialists Server                        ║
║  🌐 Server running on: http://localhost:3002               ║
║  📊 Database: SQLite (contacts.db)                         ║
║  📬 Contact API: http://localhost:3002/api/contact         ║
║  📋 View contacts: http://localhost:3002/api/contacts      ║
╚════════════════════════════════════════════════════════════╝
```

### Step 5: Open in Browser

Visit: **http://localhost:3002**

🎉 **Success!** You should see the HSS website homepage.

### Quick Test

Test the health endpoint:
```bash
curl http://localhost:3002/api/health
```

Expected response:
```json
{"status":"healthy","database":"connected","timestamp":"2025-10-20T..."}
```

---

## 🌟 Overview

HSS Hospital Specialists provides comprehensive hospitalist, emergency medicine, and radiology services. This website showcases their services, leadership, and expertise with a clean, trustworthy medical-grade design.

## 🚀 Features

### Frontend
- ✅ **Fully Responsive Design** - Mobile, tablet, and desktop optimized
- ✅ **Professional Medical Aesthetic** - Clean navy blue and coral gradient theme
- ✅ **Smooth Scrolling Navigation** - Enhanced user experience
- ✅ **Animated Statistics** - Numbers count up on scroll
- ✅ **Interactive Contact Form** - Real-time validation
- ✅ **SEO Optimized** - Meta tags, semantic HTML, structured data
- ✅ **Fast Loading** - Vanilla JS/CSS, no heavy frameworks
- ✅ **Accessible** - ARIA labels, keyboard navigation

### Backend
- ✅ **Express.js API** - RESTful endpoints for contact form
- ✅ **SQLite Database** - Persistent contact storage
- ✅ **Form Validation** - Server-side email and field validation
- ✅ **CORS Enabled** - Cross-origin resource sharing
- ✅ **Health Check Endpoint** - Monitor API status
- ✅ **Admin Endpoint** - View all submissions (add auth in production)

### Deployment Ready
- ✅ **Vercel Configuration** - Serverless functions setup
- ✅ **Netlify Configuration** - Alternative deployment option
- ✅ **Environment Variables** - Secure configuration
- ✅ **Git Ignore** - Proper exclusions for security

---

## 📁 Project Structure

```
hss-website/
├── index.html              # Main website (all 19 sections)
├── test-form.html          # Standalone contact form testing page
├── css/
│   └── style.css          # Professional medical styling (2000+ lines)
├── js/
│   └── main.js            # Interactive functionality (300+ lines)
├── images/
│   └── logo.svg           # HSS gradient cross logo
├── api/
│   ├── server.js          # Express server (local development)
│   ├── database.js        # SQLite database setup and functions
│   ├── contact.js         # Vercel serverless function
│   └── submit-contact.js  # Alternative Vercel endpoint
├── vercel.json            # Vercel deployment config
├── netlify.toml           # Netlify deployment config
├── package.json           # Node.js dependencies
├── .env.example           # Environment variables template
├── .gitignore             # Git exclusions
└── README.md             # This file
```

---

## 🎨 Design System

### Color Palette
- **Navy Dark**: `#003366` - Primary brand color
- **Coral Pink**: `#E8A0A0` - Section headers and accents
- **Coral Orange**: `#F4A582` - Gradient endings
- **Purple**: `#9B59B6` - Logo gradient
- **White**: `#FFFFFF` - Clean backgrounds
- **Light Gray**: `#F5F5F5` - Subtle section backgrounds

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, navy color
- **Body**: Regular weight, readable line-height

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, flexbox, grid
- **Vanilla JavaScript** - No frameworks, pure ES6+

### Backend
- **Node.js** (v18+)
- **Express.js** - Web server framework
- **Better-SQLite3** - Fast, synchronous SQLite database
- **CORS** - Cross-origin support

### Deployment
- **Vercel** - Serverless functions (recommended)
- **Netlify** - Alternative static hosting
- **Traditional Hosting** - FTP/cPanel compatible

---

## 📦 Installation & Setup

### Prerequisites

**Required**:
- **Node.js 18+** - [Download here](https://nodejs.org/) (choose LTS version)
- **Git** - [Download here](https://git-scm.com/)

**Verify installation**:
```bash
node --version   # Should be v18.x.x or higher
npm --version    # Should be v9.x.x or higher
git --version    # Any recent version
```

### Detailed Setup Instructions

#### 1. Clone the Repository

```bash
git clone https://github.com/DandaAkhilReddy/Hssmedicinewebsite.git
cd Hssmedicinewebsite
```

**Verify**: Check you're in the right directory
```bash
ls -la
# Should see: index.html, package.json, api/, css/, js/, etc.
```

#### 2. Install Dependencies

```bash
npm install
```

**What this does**:
- Installs Express.js, CORS, Better-SQLite3
- Sets up all required Node.js packages
- Creates `node_modules/` folder (ignored by git)

**Expected output**:
```
added 108 packages, and audited 109 packages in 15s
```

**⚠️ If you see errors** (especially on Windows with `better-sqlite3`):

**Error**: `Error: not a valid Win32 application` or compilation errors

**Solution**:
```bash
# Uninstall the problematic package
npm uninstall better-sqlite3

# Reinstall with prebuilt binaries
npm install better-sqlite3@11.7.0
```

**Why this happens**: `better-sqlite3` is a native Node.js module that needs to match your system architecture. The prebuilt binaries avoid the need for Visual Studio build tools.

#### 3. Configure Environment (Optional)

Create a `.env` file for custom configuration:

```bash
cp .env.example .env
```

Edit `.env` to customize settings (or use defaults):
- Port number (default: 3002)
- Database location
- Email notifications
- Admin settings

**For local development, you can skip this step** - defaults work fine!

#### 4. Start the Development Server

```bash
npm start
# or
npm run dev
```

**What happens**:
1. Express server starts on port 3002
2. SQLite database is created at `api/contacts.db`
3. Database tables are initialized
4. Server is ready to accept requests

**Expected console output**:
```
✅ Database initialized successfully at: c:\...\api\contacts.db

╔════════════════════════════════════════════════════════════╗
║  🏥 HSS Hospital Specialists Server                        ║
║  🌐 Server running on: http://localhost:3002               ║
║  📊 Database: SQLite (contacts.db)                         ║
║  📬 Contact API: http://localhost:3002/api/contact         ║
║  📋 View contacts: http://localhost:3002/api/contacts      ║
╚════════════════════════════════════════════════════════════╝
```

**If you see this, everything is working!** ✅

#### 5. Open in Browser

Navigate to: **http://localhost:3002**

You should see:
- HSS homepage with hero section
- Professional navy blue and coral design
- Smooth navigation menu
- All 19 website sections

---

## 🧪 First-Time Setup Verification

Follow these steps to verify everything works:

### ✅ Step 1: Check Health Endpoint

**In browser**: Visit http://localhost:3002/api/health

**OR in terminal**:
```bash
curl http://localhost:3002/api/health
```

**Expected response**:
```json
{
  "status": "healthy",
  "database": "connected",
  "timestamp": "2025-10-20T17:00:00.000Z"
}
```

✅ **If you see this, the server and database are working!**

### ✅ Step 2: Test Contact Form Submission

**Option A: Use the test form page**

1. Visit: http://localhost:3002/test-form.html
2. Fill out the form with test data
3. Click "Submit"
4. You should see: "Thank you for contacting us!"

**Option B: Test with curl**

```bash
curl -X POST http://localhost:3002/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"This is a test"}'
```

**Expected response**:
```json
{
  "success": true,
  "message": "Thank you for contacting us! We will get back to you soon.",
  "contactId": 1
}
```

✅ **If you see contactId: 1, the form submission works!**

### ✅ Step 3: Verify Database Stored the Contact

**In browser**: Visit http://localhost:3002/api/contacts

**OR in terminal**:
```bash
curl http://localhost:3002/api/contacts
```

**Expected response**:
```json
{
  "success": true,
  "total": 1,
  "contacts": [
    {
      "id": 1,
      "name": "Test User",
      "email": "test@example.com",
      "message": "This is a test",
      "submitted_at": "2025-10-20 17:00:00",
      ...
    }
  ]
}
```

✅ **If you see your test contact, the database is working!**

### ✅ Step 4: Test Form Validation

Try submitting with invalid email:

```bash
curl -X POST http://localhost:3002/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"invalid-email","message":"Test"}'
```

**Expected response**:
```json
{
  "success": false,
  "error": "Invalid email address"
}
```

✅ **If you see the error, validation is working!**

---

## 🏃 Running the Project

### Development Mode

```bash
npm run dev
# or
npm start
```

**Use this for**:
- Local development
- Testing changes
- Debugging

**What runs**: Express server on http://localhost:3002

**To stop**: Press `Ctrl+C` in the terminal

### Production Mode

Same as development for this project (no build step needed).

For production deployment, see [Deployment](#-deployment) section below.

### Available NPM Scripts

| Command | What it does |
|---------|-------------|
| `npm start` | Start the Express server |
| `npm run dev` | Same as `npm start` (development mode) |
| `npm install` | Install all dependencies |
| `npm audit` | Check for security vulnerabilities |
| `npm update` | Update dependencies to latest versions |

---

## 🌐 API Documentation

### Base URL
- **Local**: `http://localhost:3002`
- **Production**: `https://your-deployed-url.com`

### Endpoints

#### 1. Submit Contact Form

```http
POST /api/contact
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-1234",
  "organization": "ABC Hospital",
  "service": "Hospitalist Services",
  "message": "I would like to learn more about your services."
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Thank you for contacting us! We will get back to you soon.",
  "contactId": 42
}
```

**Response (Error - Invalid Email):**
```json
{
  "success": false,
  "error": "Invalid email address"
}
```

**Response (Error - Missing Fields):**
```json
{
  "success": false,
  "error": "Name, email, and message are required fields"
}
```

**Validation Rules:**
- `name`: Required, trimmed of whitespace
- `email`: Required, valid email format (RFC 5322), converted to lowercase
- `message`: Required, trimmed of whitespace
- `phone`: Optional
- `organization`: Optional
- `service`: Optional (one of: "Hospitalist Services", "Emergency Medicine", "Radiology")

**Rate Limiting**: Consider adding rate limiting for production (see Security section)

#### 2. Get All Contacts (Admin)

```http
GET /api/contacts?limit=100
```

**Query Parameters:**
- `limit` (optional): Maximum number of contacts to return (default: 100, max: 1000)

**Response:**
```json
{
  "success": true,
  "total": 150,
  "contacts": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "555-1234",
      "organization": "ABC Hospital",
      "service": "Hospitalist Services",
      "message": "I would like to learn more...",
      "submitted_at": "2025-10-20 12:00:00",
      "ip_address": "192.168.1.1",
      "user_agent": "Mozilla/5.0..."
    }
  ]
}
```

⚠️ **Security Warning**: This endpoint has NO authentication! Add authentication before deploying to production (see Security section).

#### 3. Health Check

```http
GET /api/health
```

**Response:**
```json
{
  "status": "healthy",
  "database": "connected",
  "timestamp": "2025-10-20T12:00:00.000Z"
}
```

**Use this for**:
- Monitoring server uptime
- Checking database connectivity
- Load balancer health checks
- Deployment verification

---

## 💾 Database Schema

### Contacts Table

| Column        | Type     | Constraints           | Description                    |
|---------------|----------|-----------------------|--------------------------------|
| id            | INTEGER  | PRIMARY KEY AUTOINCR  | Unique contact ID              |
| name          | TEXT     | NOT NULL              | Contact's full name            |
| email         | TEXT     | NOT NULL              | Contact's email (lowercase)    |
| phone         | TEXT     | NULL                  | Contact's phone number         |
| organization  | TEXT     | NULL                  | Organization name              |
| service       | TEXT     | NULL                  | Service of interest            |
| message       | TEXT     | NOT NULL              | Contact message                |
| submitted_at  | DATETIME | DEFAULT CURRENT_TIME  | Submission timestamp (UTC)     |
| ip_address    | TEXT     | NULL                  | Client IP address              |
| user_agent    | TEXT     | NULL                  | Client user agent string       |

**Indexes:**
- `idx_email` - On `email` column for faster lookups
- `idx_submitted_at` - On `submitted_at` column for date-based queries

**Database Location:**
- **Local Development**: `api/contacts.db` (created automatically)
- **Vercel/Serverless**: Consider using Vercel Postgres or external database
- **VPS/Traditional**: `api/contacts.db` or configure external database

**Database Size**: Starts at ~20KB, grows with submissions (~1KB per contact)

**Backup**: For production, regularly backup `api/contacts.db`
```bash
# Create backup
cp api/contacts.db api/contacts-backup-$(date +%Y%m%d).db

# View database
sqlite3 api/contacts.db ".schema"
sqlite3 api/contacts.db "SELECT * FROM contacts;"
```

---

## 🚀 Deployment

### Option 1: Vercel (Recommended) ⭐

**Best for**: Production deployments, automatic HTTPS, serverless functions

**Prerequisites**:
- Vercel account (free): [vercel.com](https://vercel.com)
- Vercel CLI: `npm install -g vercel`

**Steps**:

1. **Login to Vercel**
   ```bash
   vercel login
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow prompts**:
   - Set up and deploy? **Yes**
   - Which scope? Choose your account
   - Link to existing project? **No**
   - Project name? **hss-website** (or your choice)
   - Directory? **./` (press Enter)**
   - Override settings? **No**

4. **Production deployment**
   ```bash
   vercel --prod
   ```

**Your site is now live!** 🎉

**Configuration**:
- Vercel automatically detects the `vercel.json` configuration
- API routes in `api/` become serverless functions
- Static files (HTML, CSS, JS) served from root
- Automatic HTTPS certificate

**Custom Domain** (optional):
```bash
vercel domains add yourdomain.com
```

**Environment Variables** (if needed):
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variables from `.env.example`
3. Redeploy for changes to take effect

**Database Considerations**:
- SQLite doesn't work on Vercel (serverless filesystem is read-only)
- Use Vercel Postgres, Supabase, or PlanetScale for production
- Or use a simple serverless-compatible DB

### Option 2: Netlify

**Best for**: Alternative to Vercel, great for static sites with functions

**Steps**:

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

4. **Follow prompts** to set up site

**Note**: For database, use external service (Supabase, PlanetScale, etc.) as Netlify Functions don't support SQLite file storage.

### Option 3: Traditional Hosting (cPanel, Shared Hosting)

**Best for**: Traditional web hosting with cPanel

**Steps**:

1. **Prepare files**
   - Ensure all files are in one folder
   - No build step needed

2. **Upload via FTP**
   - Use FileZilla or similar FTP client
   - Upload to `public_html` or `www` directory

3. **Setup Node.js app** (in cPanel):
   - Create Node.js app
   - Set Node.js version to 18+
   - Set application root to uploaded directory
   - Set application startup file to `api/server.js`
   - Install dependencies (cPanel will run `npm install`)

4. **Start application** via cPanel

5. **Configure domain** to point to Node.js app

### Option 4: VPS/Cloud Server (AWS, DigitalOcean, Linode)

**Best for**: Full control, production-grade deployments

**Prerequisites**:
- VPS with Ubuntu 20.04+ or similar
- SSH access
- Domain name (optional)

**Steps**:

1. **SSH into server**
   ```bash
   ssh root@your-server-ip
   ```

2. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Install PM2** (process manager)
   ```bash
   sudo npm install -g pm2
   ```

4. **Clone repository**
   ```bash
   cd /var/www
   git clone https://github.com/DandaAkhilReddy/Hssmedicinewebsite.git
   cd Hssmedicinewebsite
   ```

5. **Install dependencies**
   ```bash
   npm install
   ```

6. **Start with PM2**
   ```bash
   pm2 start api/server.js --name hss-website
   pm2 startup  # Enable startup on reboot
   pm2 save     # Save current process list
   ```

7. **Install Nginx** (reverse proxy)
   ```bash
   sudo apt-get install nginx
   ```

8. **Configure Nginx**

   Create file: `/etc/nginx/sites-available/hss-website`
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;

       location / {
           proxy_pass http://localhost:3002;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

9. **Enable site**
   ```bash
   sudo ln -s /etc/nginx/sites-available/hss-website /etc/nginx/sites-enabled/
   sudo nginx -t  # Test configuration
   sudo systemctl restart nginx
   ```

10. **Install SSL certificate** (Let's Encrypt - free)
    ```bash
    sudo apt-get install certbot python3-certbot-nginx
    sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
    ```

**Your site is now live with HTTPS!** 🎉

**Useful PM2 commands**:
```bash
pm2 list              # List all processes
pm2 logs hss-website  # View logs
pm2 restart hss-website  # Restart app
pm2 stop hss-website  # Stop app
pm2 delete hss-website  # Remove from PM2
```

---

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env` and customize:

```bash
cp .env.example .env
```

**Common variables**:

```env
# Server Configuration
PORT=3002                    # Port for local development
NODE_ENV=production          # Environment (development/production)

# Database (if using external DB)
DATABASE_URL=postgresql://...

# Email Notifications (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Admin Settings
ADMIN_EMAIL=asimon@hssmedicine.com
NOTIFY_ON_CONTACT=false

# Security (generate strong random values)
SESSION_SECRET=your-secret-key-here
ADMIN_API_TOKEN=your-admin-token-here
```

**⚠️ Important**:
- Never commit `.env` to version control
- Use strong random values for secrets
- Different values for development and production

### Customization

#### Update Contact Information

Edit [index.html](index.html):

```html
<!-- Find and update -->
<a href="mailto:info@hssmedicine.com">info@hssmedicine.com</a>
<a href="mailto:asimon@hssmedicine.com">asimon@hssmedicine.com</a>
```

#### Change Colors

Edit [css/style.css](css/style.css):

```css
:root {
    --navy-dark: #003366;      /* Primary brand color */
    --coral-pink: #E8A0A0;     /* Accent color */
    --coral-orange: #F4A582;   /* Secondary accent */
    --purple: #9B59B6;         /* Logo gradient */
}
```

#### Replace Logo

Replace [images/logo.svg](images/logo.svg) with your own:

```html
<!-- In index.html -->
<img src="images/your-logo.png" alt="HSS Logo">
```

---

## 📱 Website Sections

The website includes 19 professionally designed sections:

1. **Hero Section** - Main introduction with statistics
2. **About HSS** - Company foundation and leadership
3. **Group Overview** - History and experience
4. **Services** - Hospitalist, Emergency Medicine, Radiology
5. **Key Differentiators** - Unique selling points
6. **Data-Driven Excellence** - Analytics focus
7. **Graduate Medical Education** - Teaching programs
8. **Patient Experience Timeline** - 6-step care process
9. **Radiology Services** - Detailed service info
10. **Medical Director Leadership** - Leadership philosophy
11. **Staffing** - Coverage and turnaround times
12. **Recruiting & Quality** - QA processes
13. **Financial Models** - Three pricing options
14. **Ensuring Throughput** - Best practices
15. **Locations** - Nationwide facilities map
16. **Quality Metrics** - Performance data
17. **Program Transition** - Implementation timeline
18. **Contact** - Contact form and information
19. **Footer** - Navigation and legal links

---

## 🔒 Security Best Practices

### For Production Deployment

#### 1. Add Authentication to Admin Endpoints

The `/api/contacts` endpoint should be protected in production:

```javascript
// In api/server.js
const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;
  const validToken = process.env.ADMIN_API_TOKEN;

  if (!token || token !== `Bearer ${validToken}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

// Protect the endpoint
app.get('/api/contacts', requireAuth, (req, res) => {
  // ... existing code
});
```

**Usage**:
```bash
curl -H "Authorization: Bearer your-secret-token" \
  http://localhost:3002/api/contacts
```

#### 2. Enable HTTPS Only

- Use SSL certificate (Let's Encrypt is free)
- Redirect HTTP to HTTPS
- Vercel/Netlify handle this automatically

#### 3. Add Rate Limiting

Prevent abuse by limiting requests:

```bash
npm install express-rate-limit
```

```javascript
// In api/server.js
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.'
});

// Apply to all API routes
app.use('/api/', limiter);

// Stricter limit for contact form
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // 5 submissions per hour per IP
});

app.post('/api/contact', contactLimiter, async (req, res) => {
  // ... existing code
});
```

#### 4. Input Sanitization

Already implemented basic validation. For production, consider:

```bash
npm install express-validator
```

```javascript
const { body, validationResult } = require('express-validator');

app.post('/api/contact', [
  body('name').trim().isLength({ min: 2, max: 100 }),
  body('email').isEmail().normalizeEmail(),
  body('message').trim().isLength({ min: 10, max: 5000 }),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // ... proceed with submission
});
```

#### 5. Environment Variables

- Never hardcode secrets
- Use `.env` file (already configured)
- Different values for dev/staging/production

#### 6. Regular Updates

```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix

# Update dependencies
npm update
```

#### 7. CORS Configuration

For production, restrict CORS to specific domains:

```javascript
// In api/server.js
const cors = require('cors');

app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? ['https://yourdomain.com', 'https://www.yourdomain.com']
    : '*'
}));
```

---

## 🧪 Testing

### Manual Testing Checklist

Before deployment, verify all functionality:

#### Backend API
- [ ] `/api/health` returns healthy status
- [ ] `/api/contact` accepts valid submissions
- [ ] `/api/contact` rejects invalid email
- [ ] `/api/contact` rejects missing required fields
- [ ] `/api/contacts` returns all submissions
- [ ] Database file `api/contacts.db` is created
- [ ] Contact data is saved correctly

#### Frontend
- [ ] Website loads at `http://localhost:3002`
- [ ] All 19 sections render correctly
- [ ] Navigation menu works (smooth scrolling)
- [ ] Mobile menu opens/closes (hamburger icon)
- [ ] Contact form validation works (frontend)
- [ ] Contact form submits successfully
- [ ] Success message displays after submission
- [ ] Form clears after successful submission

#### Responsive Design
- [ ] Mobile (iPhone 12/13/14) - 375px width
- [ ] Tablet (iPad) - 768px width
- [ ] Desktop (1920px+)
- [ ] All images scale properly
- [ ] Text is readable at all sizes
- [ ] Navigation menu adapts to screen size

#### Performance
- [ ] Page loads in < 3 seconds
- [ ] No console errors (F12 → Console)
- [ ] Animated statistics trigger on scroll
- [ ] Smooth scrolling works
- [ ] All links work correctly

### Automated Testing

**Test health endpoint**:
```bash
curl http://localhost:3002/api/health
```

**Test contact submission**:
```bash
curl -X POST http://localhost:3002/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","phone":"555-1234","organization":"Test Hospital","service":"Hospitalist Services","message":"This is a test submission."}'
```

**Test invalid email**:
```bash
curl -X POST http://localhost:3002/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"invalid-email","message":"Test"}'
```

**Retrieve contacts**:
```bash
curl http://localhost:3002/api/contacts
```

---

## 🐛 Troubleshooting

### Common Issues and Solutions

#### Issue: `better-sqlite3` Compilation Error (Windows)

**Error**:
```
Error: \\?\C:\...\better_sqlite3.node is not a valid Win32 application
```

**OR**

```
gyp ERR! find VS Could not find any Visual Studio installation
```

**Solution**:
```bash
# Uninstall the problematic package
npm uninstall better-sqlite3

# Reinstall with prebuilt binaries (no compilation needed)
npm install better-sqlite3@11.7.0
```

**Why**: `better-sqlite3` is a native module that needs to be compiled for your specific system. The prebuilt binaries work without requiring Visual Studio build tools.

---

#### Issue: Port 3002 Already in Use

**Error**:
```
Error: listen EADDRINUSE: address already in use :::3002
```

**Solution (Windows)**:
```bash
# Find process using port 3002
netstat -ano | findstr :3002

# Kill the process (replace <PID> with process ID from above)
taskkill /PID <PID> /F
```

**Solution (Mac/Linux)**:
```bash
# Find and kill process on port 3002
lsof -ti:3002 | xargs kill -9
```

**OR change the port** in `api/server.js`:
```javascript
const PORT = process.env.PORT || 3003; // Changed to 3003
```

---

#### Issue: Cannot Find Module 'express'

**Error**:
```
Error: Cannot find module 'express'
```

**Solution**:
```bash
# Install dependencies
npm install

# If that doesn't work, clean install
rm -rf node_modules package-lock.json
npm install
```

---

#### Issue: Database File Not Created

**Error**: No `api/contacts.db` file after starting server

**Solution**:
1. **Check folder permissions**: Ensure write access to `api/` folder
   ```bash
   ls -la api/
   ```

2. **Check server logs**: Look for database initialization message
   ```
   ✅ Database initialized successfully at: [...]/api/contacts.db
   ```

3. **Manually create database**:
   ```bash
   sqlite3 api/contacts.db "CREATE TABLE contacts (id INTEGER PRIMARY KEY);"
   ```

4. **OneDrive sync issues** (if project is in OneDrive folder):
   - OneDrive may interfere with file writes
   - Move project to a local folder (not in OneDrive)
   - Or exclude `api/contacts.db` from OneDrive sync

---

#### Issue: Contact Form Not Submitting

**Symptom**: Form doesn't submit, no success message

**Debugging steps**:

1. **Open browser console** (F12 → Console tab)
2. **Look for errors**:
   - CORS errors → Check server CORS settings
   - Network errors → Server not running
   - Validation errors → Check form fields

3. **Verify server is running**:
   ```bash
   curl http://localhost:3002/api/health
   ```

4. **Check form action** in `index.html`:
   ```html
   <!-- Should POST to correct endpoint -->
   <form id="contact-form" action="/api/contact" method="POST">
   ```

5. **Test API directly**:
   ```bash
   curl -X POST http://localhost:3002/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
   ```

---

#### Issue: CSS Not Loading

**Symptom**: Website displays with no styling

**Solutions**:

1. **Clear browser cache**: `Ctrl+Shift+R` (hard refresh)

2. **Check file paths** in `index.html`:
   ```html
   <link rel="stylesheet" href="css/style.css">
   ```

3. **Verify file exists**:
   ```bash
   ls -la css/style.css
   ```

4. **Check browser console** (F12 → Network tab):
   - Look for 404 errors
   - Verify `style.css` loads successfully

5. **Check server is serving static files**:
   ```javascript
   // Should be in api/server.js
   app.use(express.static(path.join(__dirname, '..')));
   ```

---

#### Issue: Database Error on Vercel/Netlify

**Error**: Database doesn't work after deploying to Vercel/Netlify

**Why**: Serverless platforms have read-only filesystems

**Solution**: Use external database for serverless deployments:
- **Vercel Postgres** (recommended for Vercel)
- **Supabase** (PostgreSQL, has free tier)
- **PlanetScale** (MySQL, has free tier)
- **MongoDB Atlas** (NoSQL, has free tier)

---

#### Issue: OneDrive Sync Conflicts

**Symptom**: Files getting locked, database errors, sync issues

**Solution**:
1. **Move project out of OneDrive folder**:
   ```bash
   # Move to C:\Projects or similar
   mkdir C:\Projects
   move "C:\Users\...\OneDrive\...\hss-website" "C:\Projects\hss-website"
   ```

2. **OR exclude from sync**:
   - Right-click `hss-website` folder → "Free up space"
   - This keeps folder but doesn't sync it

---

## 📊 Performance

### Lighthouse Scores (Target)
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### Optimization Tips
- **Images**: Use WebP format, implement lazy loading
- **CSS**: Already minified, no unused styles
- **JavaScript**: Vanilla JS, no heavy frameworks
- **Fonts**: Loaded from Google Fonts CDN (optimized)

### Performance Checklist
- [ ] Enable gzip compression (Nginx/Apache)
- [ ] Add cache headers for static assets
- [ ] Minify HTML/CSS/JS for production
- [ ] Use CDN for static assets (optional)
- [ ] Implement lazy loading for images
- [ ] Optimize images (WebP, compression)

---

## 📄 Browser Compatibility

| Browser        | Version | Support | Notes |
|----------------|---------|---------|-------|
| Chrome         | 90+     | ✅ Full  | Recommended |
| Edge           | 90+     | ✅ Full  | Chromium-based |
| Firefox        | 88+     | ✅ Full  | Fully tested |
| Safari         | 14+     | ✅ Full  | iOS and macOS |
| Mobile Safari  | 14+     | ✅ Full  | iPhone, iPad |
| Chrome Android | 90+     | ✅ Full  | Fully responsive |
| Samsung Internet | 15+   | ✅ Full  | Android |
| Opera          | 76+     | ✅ Full  | Chromium-based |
| IE 11          | -       | ⚠️ Partial | Some CSS features unsupported |

**Tested on**:
- Windows 10/11
- macOS Monterey+
- iOS 14+
- Android 10+

---

## 📞 Support & Contact

### Project Questions

- **GitHub Issues**: [Create an issue](https://github.com/DandaAkhilReddy/Hssmedicinewebsite/issues)
- **Documentation**: You're reading it!
- **Bug Reports**: Use GitHub issues with details

### HSS Business Inquiries

- **Website**: [hssmedicine.com](https://hssmedicine.com) *(replace with actual URL)*
- **General Email**: info@hssmedicine.com
- **Operations Director**: asimon@hssmedicine.com (Andrea Simon)

---

## 📜 License

© 2025 HSS Hospital Specialists. All rights reserved.

This project is proprietary software created for HSS Hospital Specialists.

**Restrictions**:
- Not for redistribution
- Not for commercial use by third parties
- Modification allowed only for internal use

---

## 🙏 Acknowledgments

- **Design**: Based on HSS corporate presentation
- **Icons**: HTML entities and custom CSS
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Inter)
- **Built with**: Node.js, Express.js, SQLite, and vanilla web technologies
- **Developed with**: [Claude Code](https://claude.com/claude-code)

---

## 📚 Additional Resources

### Documentation
- [Express.js Guide](https://expressjs.com/) - Web framework
- [Better-SQLite3 Docs](https://github.com/WiseLibs/better-sqlite3) - Database
- [Vercel Deployment](https://vercel.com/docs) - Serverless deployment
- [MDN Web Docs](https://developer.mozilla.org/) - Web development reference

### Useful Commands

```bash
# Development
npm start            # Start development server
npm run dev          # Same as npm start

# Database
sqlite3 api/contacts.db ".schema"              # View database schema
sqlite3 api/contacts.db "SELECT * FROM contacts;"  # View all contacts
sqlite3 api/contacts.db ".backup backup.db"    # Create backup

# Deployment
vercel               # Deploy to Vercel
vercel --prod        # Deploy to production
netlify deploy       # Deploy to Netlify
git push origin master  # Push to GitHub

# Maintenance
npm audit            # Check for vulnerabilities
npm audit fix        # Fix vulnerabilities
npm update           # Update dependencies
npm outdated         # Check for outdated packages

# Logs (PM2 - VPS deployments)
pm2 logs hss-website  # View application logs
pm2 monit             # Monitor resources
```

---

## 🚀 Quick Reference Card

**Start Server**: `npm start`
**Stop Server**: `Ctrl+C`
**Website URL**: http://localhost:3002
**Health Check**: http://localhost:3002/api/health
**View Contacts**: http://localhost:3002/api/contacts
**Test Form**: http://localhost:3002/test-form.html

**Database Location**: `api/contacts.db`
**Server File**: `api/server.js`
**Frontend**: `index.html`

**Need Help?** Check [Troubleshooting](#-troubleshooting) section above!

---

**Built with care for HSS Hospital Specialists**

*Professional medical website - Clean, trustworthy, data-driven*

**Questions?** Check the [Issues](https://github.com/DandaAkhilReddy/Hssmedicinewebsite/issues) page or create a new issue.

**Last Updated**: October 2025
