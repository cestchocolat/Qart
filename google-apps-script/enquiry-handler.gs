const ADMIN_EMAIL = "qart.admin@gmail.com";
const SHEET_NAME = "Qart Enquiries";
const SPREADSHEET_ID = "";

const HEADERS = [
  "Timestamp",
  "Inquiry Type",
  "Interested Residence",
  "Name",
  "Email Address",
  "WhatsApp / Phone Number",
  "Preferred Areas",
  "Property Type",
  "Bedrooms",
  "Pet Friendly",
  "Budget Range",
  "Move-in Date",
  "Additional Requirements",
];

function doPost(event) {
  const payload = parsePayload_(event);
  const timestamp = new Date();
  const lock = LockService.getScriptLock();

  lock.waitLock(10000);
  try {
    const sheet = getLeadSheet_();
    const headers = ensureHeaders_(sheet);
    const nextRow = sheet.getLastRow() + 1;
    const rowValues = headers.map((header) => getValueForHeader_(header, payload, timestamp));
    const phoneColumn = headers.indexOf("WhatsApp / Phone Number") + 1;

    if (phoneColumn > 0) {
      sheet.getRange(nextRow, phoneColumn).setNumberFormat("@");
    }

    sheet.getRange(nextRow, 1, 1, rowValues.length).setValues([rowValues]);
  } finally {
    lock.releaseLock();
  }

  sendNotification_(payload, timestamp);

  return jsonResponse_({
    ok: true,
    message: "Enquiry received",
  });
}

function doGet() {
  return jsonResponse_({
    ok: true,
    message: "Qart enquiry endpoint is active",
  });
}

function parsePayload_(event) {
  let data = {};

  if (event?.postData?.contents) {
    try {
      data = JSON.parse(event.postData.contents);
    } catch (error) {
      data = event.parameter || {};
    }
  } else {
    data = event?.parameter || {};
  }

  return {
    inquiryType: clean_(data.inquiryType || data["Inquiry Type"]),
    residence: clean_(data.residence || data.interestedResidence || data["Interested Residence"]),
    fullName: clean_(data.fullName || data.name || data.Name || data["full-name"] || data["Full Name"] || data["Full Name Field"]),
    email: clean_(data.email || data["Email Address"]),
    phone: clean_(data.phone || data.phoneNumber || data["WhatsApp / Phone Number"]),
    preferredAreas: clean_(data.preferredAreas || data["preferred-areas"] || data["Preferred Areas"]),
    propertyType: clean_(data.propertyType || data["property-type"] || data["Property Type"]),
    bedrooms: clean_(data.bedrooms),
    petFriendly: clean_(data.petFriendly || data["pet-friendly"] || data["Pet Friendly"]),
    budget: clean_(data.budget || data.budgetRange || data["Budget Range"]),
    moveInDate: clean_(data.moveInDate || data["move-in-date"] || data["Move-in Date"]),
    message: clean_(data.message || data.additionalRequirements || data.requirements || data["Additional Requirements"]),
  };
}

function getLeadSheet_() {
  const properties = PropertiesService.getScriptProperties();
  const savedId = properties.getProperty("QART_ENQUIRY_SPREADSHEET_ID");
  const spreadsheetId = SPREADSHEET_ID || savedId;

  if (spreadsheetId) {
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
  }

  const spreadsheet = SpreadsheetApp.create("Qart Luxury Residence Enquiries");
  properties.setProperty("QART_ENQUIRY_SPREADSHEET_ID", spreadsheet.getId());
  return spreadsheet.getActiveSheet().setName(SHEET_NAME);
}

function ensureHeaders_(sheet) {
  const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
  const existingHeaders = headerRange.getValues()[0];
  const hasHeaders = existingHeaders.some((value) => value);

  if (!hasHeaders) {
    headerRange.setValues([HEADERS]);
    headerRange.setFontWeight("bold");
    sheet.setFrozenRows(1);
    return HEADERS;
  }

  const lastColumn = sheet.getLastColumn();
  const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
  const missingHeaders = HEADERS.filter((header) => !headers.includes(header));

  if (missingHeaders.length) {
    sheet.getRange(1, lastColumn + 1, 1, missingHeaders.length).setValues([missingHeaders]);
    sheet.getRange(1, 1, 1, lastColumn + missingHeaders.length).setFontWeight("bold");
    return headers.concat(missingHeaders);
  }

  return headers;
}

function getValueForHeader_(header, payload, timestamp) {
  const values = {
    "Timestamp": timestamp,
    "Inquiry Type": payload.inquiryType,
    "Interested Residence": payload.residence,
    "Name": payload.fullName,
    "Full Name": payload.fullName,
    "Email Address": payload.email,
    "WhatsApp / Phone Number": asPlainText_(payload.phone),
    "Preferred Areas": payload.preferredAreas,
    "Property Type": payload.propertyType,
    "Bedrooms": payload.bedrooms,
    "Pet Friendly": normalizePetFriendly_(payload.petFriendly),
    "Budget Range": payload.budget,
    "Move-in Date": payload.moveInDate,
    "Additional Requirements": payload.message,
  };

  return values[header] ?? "";
}

function asPlainText_(value) {
  const cleaned = clean_(value);
  return cleaned ? `'${cleaned}` : "";
}

function sendNotification_(payload, timestamp) {
  const subjectResidence = payload.residence || "Qart Residence";
  const subject = `New Qart enquiry: ${payload.inquiryType || subjectResidence}`;
  const htmlBody = `
    <div style="font-family:Inter,Arial,sans-serif;color:#2f261d;line-height:1.55;">
      <h2 style="font-family:Georgia,serif;font-weight:400;margin:0 0 16px;">${escapeHtml_(payload.inquiryType || "Qart Enquiry")}</h2>
      ${row_("Timestamp", Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss"))}
      ${row_("Inquiry Type", payload.inquiryType)}
      ${row_("Interested Residence", payload.residence)}
      ${row_("Name", payload.fullName)}
      ${row_("Email Address", payload.email)}
      ${row_("WhatsApp / Phone Number", payload.phone)}
      ${row_("Preferred Areas", payload.preferredAreas)}
      ${row_("Property Type", payload.propertyType)}
      ${row_("Bedrooms", payload.bedrooms)}
      ${row_("Pet Friendly", normalizePetFriendly_(payload.petFriendly))}
      ${row_("Budget Range", payload.budget)}
      ${row_("Move-in Date", payload.moveInDate)}
      ${row_("Additional Requirements", payload.message)}
    </div>
  `;

  const mailOptions = {
    to: ADMIN_EMAIL,
    subject,
    htmlBody,
    name: "Qart Enquiries",
  };

  if (payload.email) {
    mailOptions.replyTo = payload.email;
  }

  MailApp.sendEmail(mailOptions);
}

function row_(label, value) {
  const safeLabel = escapeHtml_(label);
  const safeValue = escapeHtml_(value || "-");
  return `<p style="margin:0 0 10px;"><strong>${safeLabel}:</strong> ${safeValue}</p>`;
}

function clean_(value) {
  return String(value || "").trim();
}

function normalizePetFriendly_(value) {
  const cleaned = clean_(value).toLowerCase();
  if (cleaned === "yes") return "Yes";
  if (cleaned === "no") return "No";
  return "";
}

function escapeHtml_(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
