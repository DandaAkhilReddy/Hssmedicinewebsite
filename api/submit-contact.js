// Vercel Serverless Function for Contact Form
// This function handles contact form submissions and sends email notifications

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Please use POST.'
    });
  }

  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

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

    // Phone validation (if provided)
    if (phone) {
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      if (!phoneRegex.test(phone)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid phone number format'
        });
      }
    }

    // Get client info
    const ip_address = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown';
    const user_agent = req.headers['user-agent'] || 'unknown';
    const timestamp = new Date().toISOString();

    // Prepare email content
    const emailContent = {
      from: process.env.EMAIL_FROM || 'noreply@hsshospitalspecialists.com',
      to: process.env.EMAIL_TO || 'contact@hsshospitalspecialists.com',
      subject: `New Contact Form Submission - ${name}`,
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
                <div class="value">${name}</div>
              </div>

              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>

              ${phone ? `
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              ` : ''}

              ${organization ? `
              <div class="field">
                <div class="label">Organization:</div>
                <div class="value">${organization}</div>
              </div>
              ` : ''}

              ${service ? `
              <div class="field">
                <div class="label">Service Interested In:</div>
                <div class="value">${service}</div>
              </div>
              ` : ''}

              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>

              <div class="footer">
                <p><strong>Submission Details:</strong></p>
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

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${organization ? `Organization: ${organization}` : ''}
${service ? `Service: ${service}` : ''}

Message:
${message}

---
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
   Name: ${name}
   Email: ${email}
   Phone: ${phone || 'N/A'}
   Organization: ${organization || 'N/A'}
   Service: ${service || 'N/A'}
   Email Sent: ${emailSent ? '✅ Yes' : '❌ No'}
   ${emailError ? `Error: ${emailError}` : ''}
    `);

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      emailSent,
      timestamp,
      ...(process.env.NODE_ENV === 'development' && { debug: { emailError } })
    });

  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    return res.status(500).json({
      success: false,
      error: 'An error occurred while processing your request. Please try again later.',
      ...(process.env.NODE_ENV === 'development' && { debug: error.message })
    });
  }
}
