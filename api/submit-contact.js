// Netlify Serverless Function for Contact Form
// This function handles contact form submissions, stores them, and sends email notifications

const { insertContact } = require('./database');

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle OPTIONS request for CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Method not allowed. Please use POST.'
      })
    };
  }

  try {
    // Parse request body
    const { name, email, phone, organization, service, message } = JSON.parse(event.body);

    // Validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Name, email, and message are required fields'
        })
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Invalid email address'
        })
      };
    }

    // Phone validation (if provided)
    if (phone) {
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      if (!phoneRegex.test(phone)) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            success: false,
            error: 'Invalid phone number format'
          })
        };
      }
    }

    // Get client info
    const ip_address = event.headers['x-forwarded-for'] || event.headers['x-real-ip'] || 'unknown';
    const user_agent = event.headers['user-agent'] || 'unknown';
    const timestamp = new Date().toISOString();

    const cleanedName = name.trim();
    const cleanedEmail = email.trim().toLowerCase();
    const cleanedPhone = phone ? phone.trim() : null;
    const cleanedOrganization = organization ? organization.trim() : null;
    const normalizedService = service || null;
    const cleanedMessage = message.trim();

    // Build contact payload for persistence
    let contactId = null;
    try {
      contactId = insertContact({
        name: cleanedName,
        email: cleanedEmail,
        phone: cleanedPhone,
        organization: cleanedOrganization,
        service: normalizedService,
        message: cleanedMessage,
        ip_address,
        user_agent
      });
    } catch (dbError) {
      console.error('❌ Failed to save contact submission:', dbError);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'We were unable to save your submission. Please try again shortly.'
        })
      };
    }

    // Prepare email content
    const emailRecipient = process.env.EMAIL_TO || 'info@hssmedicine.com';
    const emailSender = process.env.EMAIL_FROM || 'info@hssmedicine.com';
    const emailContent = {
      from: emailSender,
      to: emailRecipient,
      subject: `New Contact Form Submission - ${cleanedName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #667eea; }
            .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #667eea; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🏥 New Contact Form Submission</h2>
              <p>HSS Hospital Specialists</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${cleanedName}</div>
              </div>

              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${cleanedEmail}">${cleanedEmail}</a></div>
              </div>

              ${cleanedPhone ? `
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value"><a href="tel:${cleanedPhone}">${cleanedPhone}</a></div>
              </div>
              ` : ''}

              ${cleanedOrganization ? `
              <div class="field">
                <div class="label">Organization:</div>
                <div class="value">${cleanedOrganization}</div>
              </div>
              ` : ''}

              ${normalizedService ? `
              <div class="field">
                <div class="label">Service Interested In:</div>
                <div class="value">${normalizedService}</div>
              </div>
              ` : ''}

              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${cleanedMessage.replace(/\n/g, '<br>')}</div>
              </div>

              <div class="footer">
                <p><strong>Submission Details:</strong></p>
                <p>Contact ID: ${contactId}</p>
                <p>Time: ${timestamp}</p>
                <p>IP Address: ${ip_address}</p>
                <p>User Agent: ${user_agent}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission - HSS Hospital Specialists

Name: ${cleanedName}
Email: ${cleanedEmail}
${cleanedPhone ? `Phone: ${cleanedPhone}` : ''}
${cleanedOrganization ? `Organization: ${cleanedOrganization}` : ''}
${normalizedService ? `Service: ${normalizedService}` : ''}

Message:
${cleanedMessage}

---
Contact ID: ${contactId}
Submitted: ${timestamp}
IP: ${ip_address}
      `.trim()
    };

    // Send email using configured service
    let emailSent = false;
    let emailError = null;

    // Option 1: Use Resend (if RESEND_API_KEY is set)
    if (process.env.RESEND_API_KEY) {
      try {
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(emailContent)
        });

        if (resendResponse.ok) {
          emailSent = true;
          console.log('✅ Email sent via Resend');
        } else {
          const error = await resendResponse.text();
          emailError = `Resend API error: ${error}`;
        }
      } catch (error) {
        emailError = `Resend fetch error: ${error.message}`;
      }
    }

    // Option 2: Use SendGrid (if SENDGRID_API_KEY is set)
    if (!emailSent && process.env.SENDGRID_API_KEY) {
      try {
        const sgResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            personalizations: [{
              to: [{ email: emailContent.to }]
            }],
            from: { email: emailContent.from },
            subject: emailContent.subject,
            content: [
              { type: 'text/plain', value: emailContent.text },
              { type: 'text/html', value: emailContent.html }
            ]
          })
        });

        if (sgResponse.ok || sgResponse.status === 202) {
          emailSent = true;
          console.log('✅ Email sent via SendGrid');
        } else {
          const error = await sgResponse.text();
          emailError = `SendGrid API error: ${error}`;
        }
      } catch (error) {
        emailError = `SendGrid fetch error: ${error.message}`;
      }
    }

    // Log submission details
    console.log(`
📬 Contact Form Submission:
   Contact ID: ${contactId}
   Name: ${cleanedName}
   Email: ${cleanedEmail}
   Phone: ${cleanedPhone || 'N/A'}
   Organization: ${cleanedOrganization || 'N/A'}
   Service: ${normalizedService || 'N/A'}
   Email Sent: ${emailSent ? '✅ Yes' : '❌ No'}
   ${emailError ? `Error: ${emailError}` : ''}
    `);

    // Return success response
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Thank you for contacting us! We will get back to you soon.',
        emailSent,
        timestamp,
        contactId,
        ...(process.env.NODE_ENV === 'development' && { debug: { emailError } })
      })
    };

  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'An error occurred while processing your request. Please try again later.',
        ...(process.env.NODE_ENV === 'development' && { debug: error.message })
      })
    };
  }
};
