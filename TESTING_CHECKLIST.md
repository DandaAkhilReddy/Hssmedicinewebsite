# HSS Website Contact Form - Testing Checklist

## Pre-Deployment Testing

Use this checklist to verify the contact form is working correctly on your live Vercel deployment.

---

## ✅ Setup Verification

- [ ] Created serverless function at `api/submit-contact.js`
- [ ] Added setup guide in `VERCEL_SETUP_GUIDE.md`
- [ ] Updated JavaScript to use new endpoint `/api/submit-contact`
- [ ] Configured environment variables in Vercel dashboard:
  - [ ] `RESEND_API_KEY` or `SENDGRID_API_KEY`
  - [ ] `EMAIL_FROM`
  - [ ] `EMAIL_TO`

---

## 📝 Form Validation Tests

### Test 1: Empty Form Submission
**Steps:**
1. Open contact form
2. Click "Send Message" without filling anything
3. **Expected:** Alert shows "Please fill in all required fields"
4. **Status:** ⬜ Pass / ⬜ Fail

### Test 2: Invalid Email Format
**Steps:**
1. Fill in name: "Test User"
2. Fill in email: "notanemail"
3. Fill in message: "Test"
4. Click "Send Message"
5. **Expected:** Alert shows "Please enter a valid email address"
6. **Status:** ⬜ Pass / ⬜ Fail

### Test 3: Missing Required Fields
**Steps:**
1. Fill in only name: "Test User"
2. Leave email and message empty
3. Click "Send Message"
4. **Expected:** Alert shows "Please fill in all required fields"
5. **Status:** ⬜ Pass / ⬜ Fail

### Test 4: Valid Form Submission (Minimal)
**Steps:**
1. Fill in name: "John Doe"
2. Fill in email: "john@example.com"
3. Fill in message: "This is a test submission"
4. Click "Send Message"
5. **Expected:**
   - Button text changes to "Sending..."
   - Success alert appears
   - Form clears
   - Email received at configured EMAIL_TO address
6. **Status:** ⬜ Pass / ⬜ Fail

### Test 5: Valid Form Submission (Complete)
**Steps:**
1. Fill in all fields:
   - Name: "Jane Smith"
   - Email: "jane@hospital.com"
   - Phone: "(555) 123-4567"
   - Organization: "Test Hospital"
   - Service: Select "Surgical Consultation"
   - Message: "We need surgical specialists for our facility"
2. Click "Send Message"
3. **Expected:**
   - Success alert appears
   - Form clears
   - Email received with all field data
6. **Status:** ⬜ Pass / ⬜ Fail

---

## 📧 Email Delivery Tests

### Test 6: Email Format Verification
**Check received email contains:**
- [ ] Subject: "New Contact Form Submission - [Name]"
- [ ] Properly formatted HTML email
- [ ] Name field displayed
- [ ] Email address (clickable mailto: link)
- [ ] Phone number (if provided, clickable tel: link)
- [ ] Organization (if provided)
- [ ] Service selected (if provided)
- [ ] Message content (with line breaks preserved)
- [ ] Timestamp
- [ ] IP address
- [ ] User agent

**Status:** ⬜ Pass / ⬜ Fail

### Test 7: Multiple Submissions
**Steps:**
1. Submit form 3 times with different data
2. Wait 1 minute between each submission
3. **Expected:** Receive 3 separate emails
4. **Status:** ⬜ Pass / ⬜ Fail

### Test 8: Special Characters in Message
**Steps:**
1. Submit form with message containing:
   - Line breaks
   - Special characters: @#$%&*
   - Quotes: "quoted text"
   - Apostrophes: don't, can't
2. **Expected:** Email displays all characters correctly
3. **Status:** ⬜ Pass / ⬜ Fail

---

## 🌐 Cross-Browser Testing

### Test 9: Chrome
- [ ] Form displays correctly
- [ ] Validation works
- [ ] Submission succeeds
- [ ] Success message shows

### Test 10: Firefox
- [ ] Form displays correctly
- [ ] Validation works
- [ ] Submission succeeds
- [ ] Success message shows

### Test 11: Safari
- [ ] Form displays correctly
- [ ] Validation works
- [ ] Submission succeeds
- [ ] Success message shows

### Test 12: Edge
- [ ] Form displays correctly
- [ ] Validation works
- [ ] Submission succeeds
- [ ] Success message shows

---

## 📱 Mobile Testing

### Test 13: Mobile Chrome (Android)
- [ ] Form is responsive
- [ ] All fields are tappable
- [ ] Keyboard appears correctly
- [ ] Submission works
- [ ] Success message displays properly

### Test 14: Mobile Safari (iOS)
- [ ] Form is responsive
- [ ] All fields are tappable
- [ ] Keyboard appears correctly
- [ ] Submission works
- [ ] Success message displays properly

---

## 🚨 Error Handling Tests

### Test 15: Network Error Simulation
**Steps:**
1. Open browser DevTools
2. Go to Network tab
3. Set throttling to "Offline"
4. Try to submit form
5. **Expected:** Alert shows "Network error. Please check your connection"
6. **Status:** ⬜ Pass / ⬜ Fail

### Test 16: Invalid API Key (Backend Error)
**Steps:**
1. Temporarily set invalid `RESEND_API_KEY` in Vercel
2. Submit form
3. **Expected:**
   - Success response received (form accepted)
   - `emailSent` will be `false`
   - Check Vercel function logs for error
4. Restore correct API key
5. **Status:** ⬜ Pass / ⬜ Fail

### Test 17: Button State During Submission
**Steps:**
1. Submit form
2. While "Sending..." is showing, try to click again
3. **Expected:** Button is disabled, can't double-submit
4. **Status:** ⬜ Pass / ⬜ Fail

---

## 🔒 Security Tests

### Test 18: SQL Injection Attempt
**Steps:**
1. Try submitting with malicious input in name field:
   ```
   '; DROP TABLE contacts;--
   ```
2. **Expected:** Form submits normally, input treated as text
3. **Status:** ⬜ Pass / ⬜ Fail

### Test 19: XSS Attempt
**Steps:**
1. Try submitting with script in message:
   ```
   <script>alert('XSS')</script>
   ```
2. Check received email
3. **Expected:** Script tags displayed as text, not executed
4. **Status:** ⬜ Pass / ⬜ Fail

### Test 20: Long Input Handling
**Steps:**
1. Submit form with:
   - Name: 500 characters
   - Email: Valid but 100 characters
   - Message: 10,000 characters
2. **Expected:** Form submits successfully, all text preserved
3. **Status:** ⬜ Pass / ⬜ Fail

---

## 🎯 User Experience Tests

### Test 21: Form Field Focus States
- [ ] Click on each input field
- [ ] Verify focus styles appear (blue border/glow)
- [ ] Verify label styling changes
- [ ] Tab through fields works correctly

### Test 22: Service Dropdown
- [ ] Click service dropdown
- [ ] All options are visible and selectable
- [ ] Selected option displays correctly

### Test 23: Success Feedback
**Steps:**
1. Submit valid form
2. Check for:
   - [ ] Success alert message
   - [ ] Form clears automatically
   - [ ] Button re-enables
   - [ ] No error messages

### Test 24: Error Feedback
**Steps:**
1. Submit invalid form
2. Check for:
   - [ ] Clear error message
   - [ ] Form data preserved (not cleared)
   - [ ] Button re-enables
   - [ ] User can correct and resubmit

---

## 🔧 Vercel Function Monitoring

### Test 25: Check Vercel Function Logs
**Steps:**
1. Go to Vercel Dashboard
2. Navigate to your project
3. Click "Functions" tab
4. Click on `api/submit-contact.js`
5. View recent logs
6. **Expected logs:**
   ```
   📬 Contact Form Submission:
      Name: [name]
      Email: [email]
      Email Sent: ✅ Yes
   ```
7. **Status:** ⬜ Pass / ⬜ Fail

### Test 26: Response Time
**Steps:**
1. Open DevTools Network tab
2. Submit form
3. Find `/api/submit-contact` request
4. Check response time
5. **Expected:** < 2 seconds
6. **Actual time:** _______ ms
7. **Status:** ⬜ Pass / ⬜ Fail

---

## 📊 Performance Tests

### Test 27: Lighthouse Score
**Steps:**
1. Open DevTools
2. Go to Lighthouse tab
3. Run audit for "Performance" and "Accessibility"
4. **Expected scores:**
   - Performance: > 90
   - Accessibility: > 90
5. **Actual scores:**
   - Performance: _______
   - Accessibility: _______
6. **Status:** ⬜ Pass / ⬜ Fail

---

## 🎉 Final Verification

### Test 28: End-to-End Happy Path
**Complete workflow test:**
1. [ ] User opens website
2. [ ] Scrolls to contact section
3. [ ] Fills in all required fields
4. [ ] Submits form
5. [ ] Sees success message
6. [ ] Form clears
7. [ ] Email arrives within 30 seconds
8. [ ] Email format is professional and readable

**Status:** ⬜ Pass / ⬜ Fail

---

## 📈 Test Results Summary

**Total Tests:** 28

**Passed:** _____ / 28

**Failed:** _____ / 28

**Pass Rate:** _____%

---

## 🐛 Issues Found

| Test # | Issue Description | Severity | Status |
|--------|------------------|----------|---------|
| | | High/Med/Low | Open/Fixed |
| | | | |
| | | | |

---

## ✅ Sign-Off

**Tested By:** _______________________

**Date:** _______________________

**Environment:** Production / Staging

**Vercel URL:** https://hss-website-6r5m7s1gz-akhil-reddy-dandas-projects-e000c108.vercel.app

**Notes:**
_______________________________________________
_______________________________________________
_______________________________________________

---

## 🚀 Next Steps After Testing

- [ ] All tests passing
- [ ] Issues documented and tracked
- [ ] Critical bugs fixed
- [ ] Performance optimized
- [ ] Ready for production use
- [ ] Monitoring set up
- [ ] Email notifications confirmed
- [ ] Backup/logging configured

---

**Good luck with testing! 🎯**
