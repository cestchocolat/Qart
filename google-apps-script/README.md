# Qart Enquiry Notifications

Use `enquiry-handler.gs` as the Google Apps Script Web App receiver for the residence enquiry modal.

## Deploy

1. Open [script.google.com](https://script.google.com) and create a new Apps Script project.
2. Paste the contents of `enquiry-handler.gs` into the project.
3. Deploy as a Web App:
   - Execute as: `Me`
   - Who has access: `Anyone`
4. Copy the Web App URL.
5. Paste it into `script.js`:

```js
const ENQUIRY_ENDPOINT = "https://script.google.com/macros/s/.../exec";
```

The first enquiry creates a Google Sheet named `Qart Luxury Residence Enquiries` in the deploying Google account and emails `qart.admin@gmail.com`.

To use an existing Sheet instead, paste its ID into `SPREADSHEET_ID` in `enquiry-handler.gs` before deploying.
