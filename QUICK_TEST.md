# Quick Test Guide - HSS Contact Form

## 🚀 Your Site is Live!

**New Deployment URL:** https://hss-website-ircdkl8ol-akhil-reddy-dandas-projects-e000c108.vercel.app

---

## ⚡ Quick 3-Step Test

### Step 1: Configure Email Service (5 minutes)

1. **Sign up for Resend (Easiest option):**
   - Go to: https://resend.com/signup
   - Create free account
   - Go to API Keys section
   - Create new API key
   - Copy the key (starts with `re_`)

2. **Add to Vercel:**
   - Go to: https://vercel.com/dashboard
   - Find "hss-website" project
   - Settings → Environment Variables
   - Add these variables:
     ```
     RESEND_API_KEY = [your_key_here]
     EMAIL_FROM = onboarding@resend.dev
     EMAIL_TO = [your_email@example.com]
     ```
   - Select: Production, Preview, Development
   - Click Save

3. **Redeploy:**
   ```bash
   cd /c/users/akhil/hss-website
   npx vercel --prod
   ```

---

### Step 2: Test the Form

1. **Open your site:**
   - URL: https://hss-website-ircdkl8ol-akhil-reddy-dandas-projects-e000c108.vercel.app

2. **Scroll to Contact Section**

3. **Fill in the form:**
   ```
   Name: Test User
   Email: test@example.com
   Phone: (555) 123-4567
   Organization: Test Hospital
   Service: Select any
   Message: This is my first test!
   ```

4. **Click "Send Message"**

5. **Expected Results:**
   - ✅ Button says "Sending..."
   - ✅ Success alert appears
   - ✅ Form clears
   - ✅ Email arrives in your inbox (check EMAIL_TO address)

---

### Step 3: Verify Email Received

**Check your email for:**
- Subject: "New Contact Form Submission - Test User"
- Professional HTML formatted email
- All form data displayed correctly
- Timestamp and IP address at bottom

---

## 🐛 Troubleshooting

### Form doesn't submit:
1. Open browser DevTools (F12)
2. Go to Console tab
3. Submit form again
4. Look for errors
5. Check Network tab for `/api/submit-contact` request

### No email received:
1. Check spam/junk folder
2. Verify `EMAIL_TO` is correct in Vercel
3. Check Resend dashboard for delivery status
4. View Vercel function logs:
   - Vercel Dashboard → Project → Functions tab
   - Click on `api/submit-contact.js`
   - View logs for errors

### "Method not allowed" error:
- Redeploy with `npx vercel --prod`
- Ensure `api/submit-contact.js` exists in deployment

---

## 📊 What Was Deployed

### New Files:
1. **api/submit-contact.js** - Serverless function
2. **VERCEL_SETUP_GUIDE.md** - Complete setup guide
3. **TESTING_CHECKLIST.md** - 28-point test checklist
4. **js/main.js** - Updated to use new endpoint

### Changes:
- Contact form now uses `/api/submit-contact` endpoint
- Improved error handling
- Better user feedback
- Email integration ready

---

## 🎯 Test Scenarios

### Quick Tests:

**Test 1: Empty Form**
- Don't fill anything
- Click submit
- Should see validation error

**Test 2: Invalid Email**
- Name: "Test"
- Email: "notanemail"
- Message: "Test"
- Should see "invalid email" error

**Test 3: Valid Submission**
- Fill all required fields
- Should succeed and receive email

**Test 4: Mobile View**
- Open on phone
- Form should be responsive
- Submission should work

---

## 📝 Next Steps

After successful testing:

1. ✅ Confirm email delivery works
2. ✅ Test on different devices
3. ✅ Run full testing checklist (TESTING_CHECKLIST.md)
4. 🔄 Consider adding:
   - Auto-reply emails to users
   - Admin dashboard
   - Form submission storage
   - Slack notifications

---

## 🆘 Need Help?

**View Function Logs:**
```bash
npx vercel logs --follow
```

**View Deployment Details:**
```bash
npx vercel inspect hss-website-ircdkl8ol-akhil-reddy-dandas-projects-e000c108.vercel.app
```

**Redeploy:**
```bash
cd /c/users/akhil/hss-website
npx vercel --prod
```

**Test Locally:**
```bash
cd /c/users/akhil/hss-website
vercel dev
# Open http://localhost:3000
```

---

## 🎉 Success Criteria

Your form is working if:
- ✅ Form validates inputs correctly
- ✅ Success message appears after submission
- ✅ Form clears after success
- ✅ Email arrives within 30 seconds
- ✅ Email is properly formatted
- ✅ No console errors
- ✅ Works on mobile and desktop

---

## 📸 Expected Flow

```
User fills form
     ↓
Clicks "Send Message"
     ↓
Button shows "Sending..."
     ↓
Serverless function receives data
     ↓
Validates inputs
     ↓
Sends email via Resend/SendGrid
     ↓
Returns success response
     ↓
Shows success alert
     ↓
Form clears
     ↓
Email arrives in inbox
```

---

**Ready to test? Follow Step 1 above!** 🚀

**Pro Tip:** Use the full VERCEL_SETUP_GUIDE.md for detailed instructions, or TESTING_CHECKLIST.md for comprehensive testing.
