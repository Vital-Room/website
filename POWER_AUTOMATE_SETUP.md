# Microsoft Power Automate Setup Instructions

## Step 1: Create the Power Automate Flow

1. **Go to Power Automate**: https://flow.microsoft.com
2. **Sign in** with your Microsoft 365 Business account
3. **Create a new flow**:
   - Click "Create" → "Automated cloud flow"
   - Name it "The Vital Room Contact Form"
   - Choose "When an HTTP request is received" as trigger
   - Click "Create"

4. **Configure the HTTP trigger**:
   - Copy the HTTP POST URL (you'll need this for your form)
   - Set Request Body JSON Schema to:
```json
{
    "type": "object",
    "properties": {
        "name": {"type": "string"},
        "email": {"type": "string"},
        "phone": {"type": "string"},
        "message": {"type": "string"},
        "consent": {"type": "string"}
    }
}
```

5. **Add email action**:
   - Click "+ New step"
   - Search for "Send an email (V2)"
   - Configure:
     - **To**: Your email address (e.g., hello@thevitalroom.com)
     - **Subject**: "New Contact Form Submission - The Vital Room"
     - **Body**: 
```
New contact form submission from The Vital Room website:

Name: @{triggerBody()['name']}
Email: @{triggerBody()['email']}
Phone: @{triggerBody()['phone']}
Message: @{triggerBody()['message']}
Consent Given: @{triggerBody()['consent']}

Submitted on: @{utcNow()}

---
This email was sent via Microsoft Power Automate from your website contact form.
```

6. **Save the flow** and test it

## Step 2: Update Your Website

1. **Copy the HTTP POST URL** from your Power Automate flow
2. **Replace** `YOUR_POWER_AUTOMATE_URL_HERE` in your `index.html` file with the actual URL
3. **Test the form** to make sure it works

## Step 3: Test the Complete Flow

1. **Fill out the contact form** on your website
2. **Submit the form**
3. **Check your email** - you should receive the contact form submission
4. **Verify** all form fields are included in the email

## GDPR Compliance Features

✅ **Consent checkbox** - Required for data processing
✅ **Links to privacy policy** - Users can review data handling
✅ **Secure transmission** - HTTPS and Microsoft's secure infrastructure
✅ **Data retention** - Microsoft handles data according to their policies
✅ **Right to deletion** - Users can request data deletion via email

## Troubleshooting

- **Form not submitting**: Check the Power Automate URL is correct
- **No emails received**: Check spam folder, verify email address in Power Automate
- **Error messages**: Check Power Automate flow is saved and running
- **JSON errors**: Ensure the schema matches exactly what's shown above

## Next Steps

Once working, you can:
- Add more fields to the form if needed
- Set up email templates for better formatting
- Add notifications to other team members
- Set up automated responses to customers
