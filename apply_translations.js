const fs = require('fs');

let pageContent = fs.readFileSync('src/app/dashboard/report-issue/page.tsx', 'utf8');

const replacements = [
  ['Complaint Description', '{t(language, "Complaint Description")}'],
  ['placeholder="Type your complaint in detail here..."', 'placeholder={t(language, "Type your complaint in detail here...")}'],
  ['Target Department', '{t(language, "Target Department")}'],
  ['>Police<', '>{t(language, "Police")}<'],
  ['>Electricity<', '>{t(language, "Electricity")}<'],
  ['>Water<', '>{t(language, "Water")}<'],
  ['>Public Works<', '>{t(language, "Public Works")}<'],
  ['>General Gov<', '>{t(language, "General Gov")}<'],
  ['>IT & e-Gov<', '>{t(language, "IT & e-Gov")}<'],
  ['>Ration<', '>{t(language, "Ration")}<'],
  ['>Let AI Match<', '>{t(language, "Let AI Match")}<'],
  ['Incident Location', '{t(language, "Incident Location")}'],
  ['>State<', '>{t(language, "State")}<'],
  ['>District<', '>{t(language, "District")}<'],
  ['>City/Village<', '>{t(language, "City/Village")}<'],
  ['placeholder="Enter City or Village"', 'placeholder={t(language, "Enter City or Village")}'],
  ['Precise Address or Landmark', '{t(language, "Precise Address or Landmark")}'],
  ['placeholder="Precise Address..."', 'placeholder={t(language, "Precise Address...")}'],
  ['Date & Time of Incident', '{t(language, "Date & Time of Incident")}'],
  ['placeholder="Date"', 'placeholder={t(language, "Date")}'],
  ['placeholder="Time"', 'placeholder={t(language, "Time")}'],
  ['Supporting Information', '{t(language, "Supporting Information")}'],
  ['>Complaint Category<', '>{t(language, "Complaint Category")}<'],
  ['placeholder="Public Utilities, Corruption, etc..."', 'placeholder={t(language, "Public Utilities, Corruption, etc...")}'],
  ['Attach Evidence', '{t(language, "Attach Evidence")}'],
  ['Upload Photos', '{t(language, "Upload Photos")}'],
  ['Upload Videos', '{t(language, "Upload Videos")}'],
  ['Attach Documents', '{t(language, "Attach Documents")}'],
  ['File(s) attached', '{t(language, "File(s) attached")}'],
  ['Supported files', '{t(language, "Supported files")}'],
  ['Contact Preferences', '{t(language, "Contact Preferences")}'],
  ['>Name (detail)<', '>{t(language, "Name (detail)")}<'],
  ['>Email<', '>{t(language, "Email")}<'],
  ['Receive updates via AI Assistant', '{t(language, "Receive updates via AI Assistant")}'],
  ['Send progress updates via email', '{t(language, "Send progress updates via email")}'],
  ['Privacy Option', '{t(language, "Privacy Option")}'],
  ['Submit anonymously', '{t(language, "Submit anonymously")}'],
  ['(Note: Anonymous complaints may have limited tracking)', '{t(language, "(Note: Anonymous complaints may have limited tracking)")}'],
  ['>Submit Complaint<', '>{t(language, "Submit Complaint")}<'],
  ['>Clear Form<', '>{t(language, "Clear Form")}<'],
  ['Complaint Submitted', '{t(language, "Complaint Submitted")}'],
  ['Your issue has been successfully reported to the relevant authorities. You will receive tracking updates shortly.', '{t(language, "Your issue has been successfully reported...")}'],
  ['Return to Dashboard', '{t(language, "Return to Dashboard")}']
];

for (const [search, replace] of replacements) {
  // Be careful with replacing multiple occurrences
  pageContent = pageContent.split(search).join(replace);
}

// Add imports
if (!pageContent.includes('useLanguage')) {
  pageContent = pageContent.replace('import { useState } from "react"', 'import { useState } from "react"\nimport { useLanguage } from "@/components/providers/LanguageProvider"\nimport { t } from "@/lib/translations"');
}

// Add useLanguage hook
if (!pageContent.includes('const { language } = useLanguage()')) {
  pageContent = pageContent.replace('export default function ReportIssue() {\n  const [complaintText', 'export default function ReportIssue() {\n  const { language } = useLanguage()\n  const [complaintText');
}

fs.writeFileSync('src/app/dashboard/report-issue/page.tsx', pageContent);
console.log('page.tsx updated.');
