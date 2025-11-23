# Environment Variables Setup

Create a `.env.local` file in the root directory with the following content:

```env
# ============================================
# Email Configuration (Nodemailer)
# ============================================
# SMTP server host (e.g., smtp.gmail.com, smtp.outlook.com)
SMTP_HOST=smtp.gmail.com

# SMTP server port (587 for TLS, 465 for SSL)
SMTP_PORT=587

# SMTP username (your email address)
SMTP_USER=your-email@gmail.com

# SMTP password (use App Password for Gmail, not your regular password)
# For Gmail: Go to Google Account > Security > 2-Step Verification > App Passwords
SMTP_PASS=your-app-password

# Email address to send emails FROM
SMTP_FROM=your-email@gmail.com

# Email address to receive contact form submissions
SMTP_TO=contact@bharatengrs.com

# ============================================
# WhatsApp Configuration
# ============================================
# WhatsApp number for floating button (include country code, e.g., +919876543210)
# This should start with NEXT_PUBLIC_ to be accessible in client components
NEXT_PUBLIC_WHATSAPP_NUMBER=+919876543210

# ============================================
# Site Configuration
# ============================================
# Your website URL (used for sitemap, robots.txt, and SEO metadata)
# This should start with NEXT_PUBLIC_ to be accessible in client components
NEXT_PUBLIC_SITE_URL=https://www.bharatengrs.com
```

## Setup Instructions

1. **Create `.env.local` file** in the root directory
2. **Copy the content above** and replace with your actual values
3. **For Gmail SMTP:**
   - Enable 2-Step Verification in your Google Account
   - Generate an App Password: Google Account > Security > 2-Step Verification > App Passwords
   - Use the App Password (not your regular password) for `SMTP_PASS`

## Important Notes

- `.env.local` is already in `.gitignore` - it won't be committed to Git
- Variables starting with `NEXT_PUBLIC_` are accessible in client-side code
- Variables without `NEXT_PUBLIC_` are only available on the server side
- Never commit `.env.local` to version control

