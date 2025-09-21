# Formspree Setup Guide

## Step 1: Create Formspree Account

1. **Go to**: https://formspree.io
2. **Sign up** for a free account
3. **Create a new form**:
   - Name: "The Vital Room Contact Form"
   - Email: Your email address (e.g., hello@thevitalroom.com)
4. **Copy the form endpoint URL** (looks like: `https://formspree.io/f/xxxxxxxx`)

## Step 2: Update Your Website

1. **Replace** `YOUR_FORM_ID_HERE` in your `index.html` file with your actual Formspree form ID
2. **The line should look like**:
   ```html
   <form id="contactForm" class="contact-form" action="https://formspree.io/f/abc123def" method="POST">
   ```

## Step 3: Test the Form

1. **Fill out the contact form** on your website
2. **Submit the form**
3. **Check your email** - you should receive the contact form submission
4. **Verify** all form fields are included in the email

## Formspree Features

✅ **Automatic spam protection**
✅ **Email notifications** - Instant delivery to your inbox
✅ **Form analytics** - See submission statistics
✅ **GDPR compliant** - Built-in compliance features
✅ **Custom styling** - Your form keeps its beautiful design
✅ **Reliable delivery** - 99.9% uptime guarantee

## Free vs Paid Plans

**Free Plan:**
- 50 submissions per month
- Basic spam protection
- Formspree branding

**Paid Plan ($10/month):**
- Unlimited submissions
- Advanced spam protection
- No Formspree branding
- Priority support
- Custom redirect pages

## Next Steps

Once working, you can:
- Upgrade to paid plan for unlimited submissions
- Set up custom thank you pages
- Add more form fields if needed
- View submission analytics

## Troubleshooting

- **Form not submitting**: Check the form action URL is correct
- **No emails received**: Check spam folder, verify email in Formspree
- **Error messages**: Check Formspree dashboard for issues
