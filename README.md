HSS Hospital Specialists Website
================================

A modern marketing and operations site for HSS Hospital Specialists. The project highlights our nationwide physician teams, provides a contact funnel, and delivers supporting information for hospital partners.

Live Resources
--------------

- **Production (Netlify)**: https://hss-hospital-specialists.netlify.app/ _(replace with your custom Netlify domain if different)_  
- **Repository**: https://github.com/DandaAkhilReddy/Hssmedicinewebsite

Tech Stack
----------

- Static frontend: `index.html`, `css/style.css`, `js/main.js`
- Contact API: serverless Node.js handler (Express-style) deployed as Netlify Functions under `api/`
- Data storage: SQLite database file for persisting contact form submissions
- Deployment: Netlify with configuration in `netlify.toml`

Getting Started
---------------

### Prerequisites

- Node.js 18 or higher (`node --version`)
- npm 9 or higher (`npm --version`)

### Installation

```bash
git clone https://github.com/DandaAkhilReddy/Hssmedicinewebsite.git
cd Hssmedicinewebsite
npm install
```

### Local Development

```bash
npm start
```

- Site: http://localhost:3002  
- Contact API health check: http://localhost:3002/api/health  
- Saved submissions: `api/contacts.db`

Project Structure
-----------------

```
.
├── index.html              # Marketing site content
├── css/
│   └── style.css           # Design system and layout styles
├── js/
│   └── main.js             # Navigation, animations, and form logic
├── api/
│   ├── contact.js          # Netlify serverless function entry point
│   ├── server.js           # Shared Express-style handler
│   └── contacts.db         # SQLite database (generated locally)
├── netlify.toml            # Netlify build, function, and header settings
└── package.json
```

Deploying to Netlify
--------------------

1. Install the Netlify CLI (optional but recommended):

   ```bash
   npm install -g netlify-cli
   netlify login
   ```

2. Create a new site:

   ```bash
   netlify init
   ```

   - Build command: leave empty (static site)  
   - Publish directory: `.`  
   - Functions directory: `api`

3. Deploy:

   ```bash
   netlify deploy --prod
   ```

   The CLI prints your production URL (update it above as needed).

Environment Variables
---------------------

The default setup stores contact submissions in a local SQLite database and does not require external secrets. If you extend the API (email, CRM, etc.), add variables in Netlify → Site Settings → Environment.

Maintenance Tips
----------------

- `npm audit`: check dependencies
- `sqlite3 api/contacts.db ".tables"`: inspect saved form submissions
- Back up `api/contacts.db` before redeploying serverless functions that modify schema

Contact
-------

- **Email**: info@hssmedicine.com  
- **Phone**: 877-832-2652  
- **Website**: https://www.hssmedicine.com/

License
-------

© 2025 HSS Hospital Specialists. All rights reserved. Internal use only.
