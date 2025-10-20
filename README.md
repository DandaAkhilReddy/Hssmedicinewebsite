# HSS Hospital Specialists - Professional Medical Website

A complete, production-ready website for HSS (Hospital Specialists) with integrated contact form, backend API, and database storage. Built with professional medical aesthetics matching company branding.

## 🌟 Overview

HSS Hospital Specialists provides comprehensive hospitalist, emergency medicine, and radiology services. This website showcases their services, leadership, and expertise with a clean, trustworthy medical-grade design.

**Live Demo**: [Add your deployed URL here]

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

## 📁 Project Structure

```
hss-website/
├── index.html              # Main website (all sections)
├── test-form.html          # Contact form testing page
├── css/
│   └── style.css          # Professional medical styling (2000+ lines)
├── js/
│   └── main.js            # Frontend interactions (300+ lines)
├── images/
│   └── logo.svg           # HSS gradient cross logo
├── api/
│   ├── server.js          # Express server (local development)
│   ├── database.js        # SQLite database setup
│   ├── contact.js         # Vercel serverless function
│   └── submit-contact.js  # Alternative Vercel endpoint
├── vercel.json            # Vercel deployment config
├── netlify.toml           # Netlify deployment config
├── package.json           # Node.js dependencies
├── .gitignore             # Git exclusions
└── README.md             # This file
```

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

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ ([Download here](https://nodejs.org/))
- Git ([Download here](https://git-scm.com/))

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/DandaAkhilReddy/Hssmedicinewebsite.git
   cd Hssmedicinewebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3002
   ```

   You should see:
   ```
   ╔════════════════════════════════════════════════════════════╗
   ║  🏥 HSS Hospital Specialists Server                        ║
   ║  🌐 Server running on: http://localhost:3002               ║
   ║  📊 Database: SQLite (contacts.db)                         ║
   ║  📬 Contact API: http://localhost:3002/api/contact         ║
   ║  📋 View contacts: http://localhost:3002/api/contacts      ║
   ╚════════════════════════════════════════════════════════════╝
   ```

### Testing the Contact Form

1. Navigate to `http://localhost:3002/test-form.html`
2. Fill out the form with test data
3. Submit and verify success message
4. Check submissions: `http://localhost:3002/api/contacts`

## 🌐 API Documentation

### Base URL
- **Local**: `http://localhost:3002`
- **Production**: `https://your-domain.com`

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

**Response (Error):**
```json
{
  "success": false,
  "error": "Name, email, and message are required fields"
}
```

**Validation Rules:**
- `name`: Required, trimmed
- `email`: Required, valid email format, lowercase
- `message`: Required, trimmed
- `phone`: Optional
- `organization`: Optional
- `service`: Optional

#### 2. Get All Contacts (Admin)
```http
GET /api/contacts?limit=100
```

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
      "message": "...",
      "submitted_at": "2025-10-20 12:00:00",
      "ip_address": "192.168.1.1",
      "user_agent": "Mozilla/5.0..."
    }
  ]
}
```

**Query Parameters:**
- `limit`: Maximum number of contacts to return (default: 100)

⚠️ **Security Note**: Add authentication before deploying to production!

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
| submitted_at  | DATETIME | DEFAULT CURRENT_TIME  | Submission timestamp           |
| ip_address    | TEXT     | NULL                  | Client IP address              |
| user_agent    | TEXT     | NULL                  | Client user agent string       |

**Indexes:**
- `idx_email` - On email column for fast lookups
- `idx_submitted_at` - On timestamp for date-based queries

**Database Location:**
- Local: `api/contacts.db`
- Vercel: Uses serverless storage or external DB (configure as needed)

## 🚀 Deployment

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Configure Environment**
   - Database will be created automatically on first contact submission
   - For production, consider using Vercel Postgres or external database

4. **Set Custom Domain** (Optional)
   ```bash
   vercel domains add yourdomain.com
   ```

**Vercel Configuration** (`vercel.json`):
- Serverless functions in `api/` folder
- Static files served from root
- Automatic HTTPS

### Option 2: Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**
   ```bash
   netlify deploy --prod
   ```

3. **Configure Functions**
   - Netlify Functions are configured in `netlify.toml`
   - Database requires external service (Supabase, PlanetScale, etc.)

### Option 3: Traditional Hosting (cPanel, FTP)

1. **Build for production** (if needed)
   ```bash
   # No build step required - pure HTML/CSS/JS
   ```

2. **Upload files via FTP**
   - Upload all files to `public_html` or `www`
   - Set up Node.js app in hosting control panel
   - Point to `api/server.js` as entry point

3. **Configure Environment**
   - Set Node.js version to 18+
   - Install dependencies on server
   - Start server with `npm start`

### Option 4: VPS/Cloud Server (AWS, DigitalOcean, etc.)

1. **SSH into server**
   ```bash
   ssh user@your-server-ip
   ```

2. **Clone repository**
   ```bash
   git clone https://github.com/DandaAkhilReddy/Hssmedicinewebsite.git
   cd Hssmedicinewebsite
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Use PM2 for process management**
   ```bash
   npm install -g pm2
   pm2 start api/server.js --name hss-website
   pm2 startup
   pm2 save
   ```

5. **Configure Nginx reverse proxy**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3002;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=3002
NODE_ENV=production

# Database (if using external DB)
DATABASE_URL=your-database-connection-string

# Email Service (optional - for notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-password

# Admin Notifications
ADMIN_EMAIL=asimon@hssmedicine.com
NOTIFY_ON_CONTACT=true
```

**Note**: Never commit `.env` to version control!

### Customization

#### Update Contact Information

Edit `index.html` (search for these sections):
- Email: `info@hssmedicine.com` (contact section)
- Fallback email: `asimon@hssmedicine.com`
- Addresses: Update location section
- Phone: Currently routes through email

#### Change Colors

Edit `css/style.css`:
```css
:root {
    --navy-dark: #003366;      /* Primary brand color */
    --coral-pink: #E8A0A0;     /* Accent color */
    --coral-orange: #F4A582;   /* Secondary accent */
}
```

#### Add Your Logo

Replace `images/logo.svg` with your logo:
```html
<img src="images/your-logo.png" alt="HSS Logo">
```

## 📱 Website Sections

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

## 🔒 Security Best Practices

### For Production Deployment

1. **Add Authentication to Admin Endpoints**
   ```javascript
   // Example middleware
   function requireAuth(req, res, next) {
     const token = req.headers.authorization;
     if (!token || !verifyToken(token)) {
       return res.status(401).json({ error: 'Unauthorized' });
     }
     next();
   }

   app.get('/api/contacts', requireAuth, (req, res) => {
     // ... protected route
   });
   ```

2. **Enable HTTPS Only**
   - Use SSL certificate (Let's Encrypt is free)
   - Redirect HTTP to HTTPS

3. **Add Rate Limiting**
   ```bash
   npm install express-rate-limit
   ```
   ```javascript
   const rateLimit = require('express-rate-limit');

   const limiter = rateLimit({
     windowMs: 15 * 60 * 1000, // 15 minutes
     max: 100 // limit each IP to 100 requests per windowMs
   });

   app.use('/api/', limiter);
   ```

4. **Input Sanitization**
   ```bash
   npm install express-validator
   ```

5. **Use Environment Variables**
   - Never hardcode secrets
   - Use `.env` file (already configured)

6. **Regular Updates**
   ```bash
   npm audit
   npm audit fix
   ```

## 🧪 Testing

### Manual Testing Checklist

- [ ] Contact form validation (empty fields)
- [ ] Contact form validation (invalid email)
- [ ] Contact form successful submission
- [ ] API endpoint `/api/contact` returns correct response
- [ ] API endpoint `/api/contacts` retrieves submissions
- [ ] API endpoint `/api/health` shows healthy status
- [ ] Mobile responsiveness (iPhone, Android)
- [ ] Tablet responsiveness (iPad)
- [ ] Desktop responsiveness (1920px+)
- [ ] Smooth scrolling navigation
- [ ] Animated statistics on scroll
- [ ] All images load correctly
- [ ] All links work correctly

### Test Contact Form

Navigate to `test-form.html` for a standalone form testing page.

## 🐛 Troubleshooting

### Database Errors

**Problem**: `Error: Cannot find module 'better-sqlite3'`
```bash
# Solution
npm install better-sqlite3
```

**Problem**: Database file not created
```bash
# Solution - Check folder permissions
# Database will be created at: api/contacts.db
ls -la api/
```

### Server Won't Start

**Problem**: `Error: Port 3002 already in use`
```bash
# Solution - Kill process on port 3002
# Windows
netstat -ano | findstr :3002
taskkill /PID <process_id> /F

# Mac/Linux
lsof -ti:3002 | xargs kill -9
```

**Problem**: `Cannot find module 'express'`
```bash
# Solution
npm install
```

### Contact Form Not Submitting

1. Check browser console (F12) for errors
2. Verify API server is running
3. Check CORS settings in `server.js`
4. Verify form action points to correct URL

### CSS Not Loading

1. Clear browser cache (Ctrl+Shift+R)
2. Check file paths in `index.html`
3. Verify `css/style.css` exists
4. Check browser console for 404 errors

## 📊 Performance

### Lighthouse Scores (Target)
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### Optimization Tips
- Images: Use WebP format, lazy loading
- CSS: Already minified, no unused styles
- JavaScript: Vanilla JS, no heavy frameworks
- Fonts: Loaded from Google Fonts CDN

## 📄 Browser Compatibility

| Browser        | Version | Support |
|----------------|---------|---------|
| Chrome         | 90+     | ✅ Full  |
| Edge           | 90+     | ✅ Full  |
| Firefox        | 88+     | ✅ Full  |
| Safari         | 14+     | ✅ Full  |
| Mobile Safari  | 14+     | ✅ Full  |
| Chrome Android | 90+     | ✅ Full  |
| IE 11          | -       | ⚠️ Partial |

## 📞 Support & Contact

### Project Questions
- Create an issue on GitHub
- Email: [Your Email]

### HSS Business Inquiries
- Website: [Add production URL]
- Email: info@hssmedicine.com
- Fallback: asimon@hssmedicine.com

## 📜 License

© 2025 HSS Hospital Specialists. All rights reserved.

This project is proprietary software created for HSS Hospital Specialists.

## 🙏 Acknowledgments

- **Design**: Based on HSS corporate presentation
- **Icons**: HTML entities and CSS
- **Fonts**: Google Fonts (Inter)
- **Built with**: Node.js, Express, SQLite, and vanilla web technologies

## 📚 Additional Resources

### Documentation
- [Express.js Guide](https://expressjs.com/)
- [Better-SQLite3 Docs](https://github.com/WiseLibs/better-sqlite3)
- [Vercel Deployment](https://vercel.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)

### Useful Commands

```bash
# Development
npm run dev          # Start development server
npm start            # Start production server

# Database
sqlite3 api/contacts.db ".schema"     # View database schema
sqlite3 api/contacts.db "SELECT * FROM contacts;" # View all contacts

# Deployment
vercel               # Deploy to Vercel
netlify deploy       # Deploy to Netlify

# Maintenance
npm audit            # Check for vulnerabilities
npm update           # Update dependencies
```

---

**Built with care for HSS Hospital Specialists**

*Professional medical website - Clean, trustworthy, data-driven*

**Need help?** Check the [Issues](https://github.com/DandaAkhilReddy/Hssmedicinewebsite/issues) page or create a new issue.
