# Calendly Integration Setup

## Environment Variables

Add these to your `.env.local` file:

```bash
# Calendly Integration
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/saranochir-s/30min
CALENDLY_WEBHOOK_SECRET=changeme

# Optional: Thank you page redirect
THANK_YOU_PATH=/thank-you?source=calendly

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Calendly Configuration

### 1. Event Settings
- Go to your Calendly event settings
- Set **Confirmation Page** → **Redirect to external site** → `/thank-you?source=calendly`

### 2. Webhook Setup
- Go to **Integrations** → **Webhooks**
- Add webhook URL: `https://xperience.mn/api/calendly/webhook` (or your domain)
- Select events: `invitee.created`, `invitee.canceled`
- Copy the webhook secret to `CALENDLY_WEBHOOK_SECRET`

### 3. GDPR Compliance
- The integration automatically adds `hide_gdpr_banner=1` to all Calendly URLs
- Ensure your Calendly account is GDPR compliant

## Usage

### Inline Widget
```tsx
import CalendlyInline from "@/components/CalendlyInline";

<CalendlyInline 
  prefillName="John Doe"
  prefillEmail="john@example.com"
  height={800}
/>
```

### Popup Button
```tsx
import CalendlyButton from "@/components/CalendlyButton";

<CalendlyButton 
  label="Book a Call"
  variant="primary"
  size="lg"
/>
```

### Pages
- `/meet` - Full-page booking widget
- `/thank-you` - Post-booking confirmation page
- `/api/calendly/webhook` - Webhook endpoint for notifications

## Features Implemented

✅ **Inline Embed** - Full booking widget on `/meet` page
✅ **Popup Button** - Reusable button component with analytics
✅ **Thank You Page** - Post-booking confirmation with next steps
✅ **Webhook Endpoint** - Handles meeting notifications
✅ **Analytics Tracking** - Tracks popup button clicks
✅ **Dark Mode Support** - Works with light/dark themes
✅ **Mobile Responsive** - Optimized for all screen sizes
✅ **GDPR Compliant** - Hides GDPR banner automatically

## Testing

1. Visit `/meet` to test inline widget
2. Click any "Book a call" button to test popup
3. Complete a test booking to verify thank you page
4. Check webhook logs for meeting notifications

## Security Notes

- Webhook signature verification is implemented
- Environment variables are properly scoped
- No sensitive data exposed to client-side
