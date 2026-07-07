const fs = require('fs');

const englishDict = {
  "Complaint Description": "Complaint Description",
  "Type your complaint in detail here...": "Type your complaint in detail here...",
  "Target Department": "Target Department",
  "Police": "Police",
  "Electricity": "Electricity",
  "Water": "Water",
  "Public Works": "Public Works",
  "General Gov": "General Gov",
  "IT & e-Gov": "IT & e-Gov",
  "Ration": "Ration",
  "Let AI Match": "Let AI Match",
  "Incident Location": "Incident Location",
  "State": "State",
  "District": "District",
  "City/Village": "City/Village",
  "Enter City or Village": "Enter City or Village",
  "Precise Address or Landmark": "Precise Address or Landmark",
  "Precise Address...": "Precise Address...",
  "Date & Time of Incident": "Date & Time of Incident",
  "Date": "Date",
  "Time": "Time",
  "Supporting Information": "Supporting Information",
  "Complaint Category": "Complaint Category",
  "Public Utilities, Corruption, etc...": "Public Utilities, Corruption, etc...",
  "Attach Evidence": "Attach Evidence",
  "Upload Photos": "Upload Photos",
  "Upload Videos": "Upload Videos",
  "Attach Documents": "Attach Documents",
  "File(s) attached": "File(s) attached",
  "Supported files": "Supported files",
  "Contact Preferences": "Contact Preferences",
  "Name (detail)": "Name (detail)",
  "Email": "Email",
  "Receive updates via AI Assistant": "Receive updates via AI Assistant",
  "Send progress updates via email": "Send progress updates via email",
  "Privacy Option": "Privacy Option",
  "Submit anonymously": "Submit anonymously",
  "(Note: Anonymous complaints may have limited tracking)": "(Note: Anonymous complaints may have limited tracking)",
  "Submit Complaint": "Submit Complaint",
  "Clear Form": "Clear Form",
  "Complaint Submitted": "Complaint Submitted",
  "Your issue has been successfully reported...": "Your issue has been successfully reported to the relevant authorities. You will receive tracking updates shortly.",
  "Return to Dashboard": "Return to Dashboard"
};

const hindiDict = {
  "Complaint Description": "शिकायत का विवरण",
  "Type your complaint in detail here...": "अपनी शिकायत का विवरण यहाँ टाइप करें...",
  "Target Department": "लक्षित विभाग",
  "Police": "पुलिस",
  "Electricity": "बिजली",
  "Water": "पानी",
  "Public Works": "सार्वजनिक निर्माण",
  "General Gov": "सामान्य सरकार",
  "IT & e-Gov": "आईटी और ई-गव",
  "Ration": "राशन",
  "Let AI Match": "AI से मिलान करें",
  "Incident Location": "घटना स्थल",
  "State": "राज्य",
  "District": "ज़िला",
  "City/Village": "शहर/गाँव",
  "Enter City or Village": "शहर या गाँव दर्ज करें",
  "Precise Address or Landmark": "सटीक पता या लैंडमार्क",
  "Precise Address...": "सटीक पता...",
  "Date & Time of Incident": "घटना की तिथि और समय",
  "Date": "दिनांक",
  "Time": "समय",
  "Supporting Information": "सहायक जानकारी",
  "Complaint Category": "शिकायत श्रेणी",
  "Public Utilities, Corruption, etc...": "सार्वजनिक उपयोगिताओं, भ्रष्टाचार, आदि...",
  "Attach Evidence": "साक्ष्य संलग्न करें",
  "Upload Photos": "तस्वीरें अपलोड करें",
  "Upload Videos": "वीडियो अपलोड करें",
  "Attach Documents": "दस्तावेज़ संलग्न करें",
  "File(s) attached": "संलग्न फ़ाइलें",
  "Supported files": "समर्थित फ़ाइलें",
  "Contact Preferences": "संपर्क प्राथमिकताएं",
  "Name (detail)": "नाम",
  "Email": "ईमेल",
  "Receive updates via AI Assistant": "AI के माध्यम से अपडेट प्राप्त करें",
  "Send progress updates via email": "ईमेल के माध्यम से अपडेट भेजें",
  "Privacy Option": "गोपनीयता विकल्प",
  "Submit anonymously": "गुमनाम रूप से सबमिट करें",
  "(Note: Anonymous complaints may have limited tracking)": "(नोट: गुमनाम शिकायतों की ट्रैकिंग सीमित हो सकती है)",
  "Submit Complaint": "शिकायत दर्ज करें",
  "Clear Form": "फ़ॉर्म साफ़ करें",
  "Complaint Submitted": "शिकायत दर्ज की गई",
  "Your issue has been successfully reported...": "आपकी समस्या संबंधित अधिकारियों को सफलतापूर्वक रिपोर्ट कर दी गई है। आपको जल्द ही ट्रैकिंग अपडेट प्राप्त होंगे।",
  "Return to Dashboard": "डैशबोर्ड पर वापस जाएं"
};

const tamilDict = {
  "Complaint Description": "புகார் விளக்கம்",
  "Type your complaint in detail here...": "உங்கள் புகாரை இங்கே விரிவாக தட்டச்சு செய்யவும்...",
  "Target Department": "இலக்கு துறை",
  "Police": "காவல்துறை",
  "Electricity": "மின்சாரம்",
  "Water": "தண்ணீர்",
  "Public Works": "பொதுப்பணி",
  "General Gov": "பொது அரசு",
  "IT & e-Gov": "தகவல் தொழில்நுட்பம் & மின்-ஆளுமை",
  "Ration": "ரேஷன்",
  "Let AI Match": "AI மூலம் பொருத்துக",
  "Incident Location": "சம்பவ இடம்",
  "State": "மாநிலம்",
  "District": "மாவட்டம்",
  "City/Village": "நகரம்/கிராமம்",
  "Enter City or Village": "நகரம் அல்லது கிராமத்தை உள்ளிடவும்",
  "Precise Address or Landmark": "சரியான முகவரி அல்லது அடையாளம்",
  "Precise Address...": "சரியான முகவரி...",
  "Date & Time of Incident": "சம்பவத்தின் தேதி மற்றும் நேரம்",
  "Date": "தேதி",
  "Time": "நேரம்",
  "Supporting Information": "துணை தகவல்",
  "Complaint Category": "புகார் வகை",
  "Public Utilities, Corruption, etc...": "பொது சேவைகள், ஊழல் போன்றவை...",
  "Attach Evidence": "சான்றுகளை இணைக்கவும்",
  "Upload Photos": "புகைப்படங்களை பதிவேற்றவும்",
  "Upload Videos": "வீடியோக்களை பதிவேற்றவும்",
  "Attach Documents": "ஆவணங்களை இணைக்கவும்",
  "File(s) attached": "இணைக்கப்பட்ட கோப்பு(கள்)",
  "Supported files": "ஆதரிக்கப்படும் கோப்புகள்",
  "Contact Preferences": "தொடர்பு முன்னுரிமைகள்",
  "Name (detail)": "பெயர் (விவரம்)",
  "Email": "மின்னஞ்சல்",
  "Receive updates via AI Assistant": "AI உதவியாளர் மூலம் அறிவிப்புகளைப் பெறுங்கள்",
  "Send progress updates via email": "மின்னஞ்சல் மூலம் முன்னேற்றப் புதுப்பிப்புகளை அனுப்பவும்",
  "Privacy Option": "தனியுரிமை விருப்பம்",
  "Submit anonymously": "அடையாளம் இல்லாமல் சமர்ப்பிக்கவும்",
  "(Note: Anonymous complaints may have limited tracking)": "(குறிப்பு: அநாமதேய புகார்களுக்கு கண்காணிப்பு குறைவாக இருக்கலாம்)",
  "Submit Complaint": "புகாரை சமர்ப்பிக்கவும்",
  "Clear Form": "படிவத்தை அழிக்கவும்",
  "Complaint Submitted": "புகார் சமர்ப்பிக்கப்பட்டது",
  "Your issue has been successfully reported...": "உங்கள் பிரச்சனை சம்பந்தப்பட்ட அதிகாரிகளுக்கு வெற்றிகரமாக தெரிவிக்கப்பட்டுள்ளது. நீங்கள் விரைவில் கண்காணிப்பு புதுப்பிப்புகளைப் பெறுவீர்கள்.",
  "Return to Dashboard": "முகப்புக்குத் திரும்பு"
};


let fileStr = fs.readFileSync('src/lib/translations.ts', 'utf8');

// Update type TranslationKeys
// We will just append them at the end of the type, or dynamically let TS infer them if it was `string`. But it's an explicit type.
// We should replace `export type TranslationKeys = \n  | "OVERVIEW"` with the new keys.
let keysList = Object.keys(englishDict).map(k => `"${k}"`).join(" | ");
fileStr = fileStr.replace('export type TranslationKeys = ', 'export type TranslationKeys = ' + keysList + ' | \n');

// Inject keys into English, Hindi, Tamil
function injectDict(fileStr, lang, dict) {
  let entries = Object.entries(dict).map(([k,v]) => `    "${k}": "${v}"`).join(",\n");
  return fileStr.replace(new RegExp(`${lang}: \\{`), `${lang}: {\n${entries},`);
}

fileStr = injectDict(fileStr, "English", englishDict);
fileStr = injectDict(fileStr, "Hindi", hindiDict);
fileStr = injectDict(fileStr, "Tamil", tamilDict);

fs.writeFileSync('src/lib/translations.ts', fileStr);
console.log('translations.ts updated.');
