# Vercel Setup Guide for HSS Website Contact Form

## 🚀 Quick Setup (5 minutes)

This guide will help you configure the contact form to work on your live Vercel deployment.

---

## Step 1: Choose Your Email Service

You need to pick one of these email services to receive contact form submissions:

### Option A: Resend (Recommended - Easiest)
- ✅ Free tier: 100 emails/day
- ✅ Simple API
- ✅ Great documentation
- 🔗 Sign up: https://resend.com/signup

### Option B: SendGrid
- ✅ Free tier: 100 emails/day
- ✅ Established service
- 🔗 Sign up: https://signup.sendgrid.com/

---

## Step 2: Get Your API Key

### For Resend:
1. Go to https://resend.com/api-keys
2. Click "Create API Key"
3. Name it "HSS Contact Form"
4. Copy the API key (starts with `re_`)

### For SendGrid:
1. Go to Settings → API Keys
2. Click "Create API Key"
3. Choose "Full Access" or "Mail Send" permission
4. Copy the API key (starts with `SG.`)

---

## Step 3: Configure Vercel Environment Variables

1. **Open your Vercel dashboard:**
   ```
   https://vercel.com/dashboard
   ```

2. **Navigate to your project:**
   - Find "hss-website" project
   - Click on it

3. **Go to Settings → Environment Variables**

4. **Add these variables:**

   ### For Resend:
   ```
   RESEND_API_KEY = your_api_key_here
   EMAIL_FROM = noreply@hsshospitalspecialists.com
   EMAIL_TO = your-email@example.com
   ```

   ### For SendGrid:
   ```
   SENDGRID_API_KEY = your_api_key_here
   EMAIL_FROM = noreply@hsshospitalspecialists.com
   EMAIL_TO = your-email@example.com
   ```

   **Important:** Replace `your-email@example.com` with the email address where you want to receive contact form submissions.

5. **Select environments:**
   - ✅ Production
   - ✅ Preview
   - ✅ Development

6. **Click "Save"**

---

## Step 4: Verify Domain (For Resend)

If using Resend, you need to verify your sending domain:

### Option 1: Use Resend's Domain
Use `onboarding@resend.dev` as your `EMAIL_FROM` (no verification needed)

### Option 2: Use Your Own Domain
1. Go to Resend Dashboard → Domains
2. Add your domain
3. Add the provided DNS records to your domain
4. Wait for verification (5-10 minutes)

---

## Step 5: Update Vercel Configuration

The `vercel.json` file should include:

```json
{
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api/$1"
    }
  ]
}
```

This is already configured in your project. ✅

---

## Step 6: Deploy

Once you've set the environment variables:

### Option 1: Auto-deploy (Recommended)
Simply push to your GitHub repository:
```bash
git add .
git commit -m "Add contact form serverless function"
git push
```

Vercel will automatically detect changes and redeploy.

### Option 2: Manual deploy
```bash
cd C:\users\akhil\hss-website
npx vercel --prod
```

---

## Step 7: Test the Contact Form

1. **Open your live website:**
   ```
   https://hss-website-6r5m7s1gz-akhil-reddy-dandas-projects-e000c108.vercel.app
   ```

2. **Scroll to the contact form**

3. **Fill in the form:**
   - Name: Test User
   - Email: test@example.com
   - Phone: (555) 123-4567
   - Organization: Test Hospital
   - Service: Select any service
   - Message: This is a test submission

4. **Click "Send Message"**

5. **Expected result:**
   - ✅ Success message appears
   - ✅ Form fields clear
   - ✅ Email arrives at your configured EMAIL_TO address

---

## Troubleshooting

### Form submission fails
1. Check Vercel function logs:
   - Go to Vercel Dashboard → Your Project → Functions
   - Click on `api/submit-contact.js`
   - View logs

2. Verify environment variables are set correctly

3. Check email API key is valid

### Email not received
1. Check spam/junk folder
2. Verify `EMAIL_TO` is correct
3. Check Resend/SendGrid dashboard for send logs
4. Verify domain is verified (if using custom domain)

### CORS errors
- The serverless function already includes CORS headers
- If issues persist, check browser console for specific error

---

## Testing with Different Email Services

### Test with Resend:
```bash
curl -X POST https://your-site.vercel.app/api/submit-contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "555-123-4567",
    "message": "Test message"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Thank you for contacting us! We will get back to you soon.",
  "emailSent": true,
  "timestamp": "2025-10-15T..."
}
```

---

## Local Testing (Optional)

To test locally before deploying:

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Create `.env` file:**
   ```
   RESEND_API_KEY=your_api_key
   EMAIL_FROM=noreply@hsshospitalspecialists.com
   EMAIL_TO=your-email@example.com
   ```

3. **Run locally:**
   ```bash
   vercel dev
   ```

4. **Test at:** `http://localhost:3000`

---

## Email Template Preview

When someone submits the form, you'll receive an email that looks like this:

```
Subject: New Contact Form Submission - [Name]

┌─────────────────────────────────────┐
│ 🏥 New Contact Form Submission      │
│ HSS Hospital Specialists            │
└─────────────────────────────────────┘

Name: John Doe
Email: john@example.com
Phone: (555) 123-4567
Organization: Test Hospital
Service: Surgical Consultation

Message:
We are interested in your hospital
specialist services...

---
Submitted: 2025-10-15T10:30:00Z
IP: 123.456.789.0
```

---

## Security Features

The serverless function includes:

- ✅ Input validation (required fields)
- ✅ Email format validation
- ✅ Phone format validation
- ✅ IP address tracking
- ✅ User agent logging
- ✅ Timestamp recording
- ✅ Error handling
- ✅ CORS protection
- ✅ Method restriction (POST only)

---

## Cost Analysis

### Free Tier Limits:
- **Resend:** 100 emails/day, 3,000/month
- **SendGrid:** 100 emails/day forever
- **Vercel:** 100GB bandwidth, 100 serverless function invocations per day

For a hospital website, these free tiers should be more than sufficient.

---

## Next Steps

After setup is complete:

1. ✅ Test form submission
2. ✅ Verify email delivery
3. ✅ Test all validation scenarios
4. ✅ Monitor Vercel function logs
5. 🔄 Consider adding:
   - Auto-reply to submitters
   - Submission storage (database)
   - Admin notification dashboard
   - Slack/Discord notifications

---

## Support

If you need help:
- Resend Docs: https://resend.com/docs
- SendGrid Docs: https://docs.sendgrid.com
- Vercel Docs: https://vercel.com/docs
- GitHub Issues: Create issue in your repository

---

## Environment Variables Reference

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `RESEND_API_KEY` | Yes (if using Resend) | Resend API key | `re_xxxxx` |
| `SENDGRID_API_KEY` | Yes (if using SendGrid) | SendGrid API key | `SG.xxxxx` |
| `EMAIL_FROM` | Yes | Sender email address | `noreply@example.com` |
| `EMAIL_TO` | Yes | Recipient email (your email) | `contact@example.com` |
| `NODE_ENV` | No | Environment type | `production` |

---

**Ready to test?** Follow the steps above and your contact form will be live! 🚀
