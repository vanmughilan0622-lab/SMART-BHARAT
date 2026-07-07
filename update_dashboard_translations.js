const fs = require('fs');

const englishDict = {
  "RECOMMENDED SCHEMES": "RECOMMENDED SCHEMES",
  "PERSONALIZED CIVIC BENEFITS": "PERSONALIZED CIVIC BENEFITS",
  "95% Match": "95% Match",
  "75% Match": "75% Match",
  "Localized tractors and scheme for PM-KISAN.": "Localized tractors and scheme for PM-KISAN.",
  "Affordable Housing and scheme to community health in India.": "Affordable Housing and scheme to community health in India.",
  "Stand Up Housing scheme, scheme, and unknown government to send.": "Stand Up Housing scheme, scheme, and unknown government to send.",
  "Digital Identity": "Digital Identity",
  "Status": "Status",
  "Aadhaar": "Aadhaar",
  "PAN": "PAN",
  "PAN Preview": "PAN Preview",
  "Voter ID": "Voter ID",
  "LINK YOUR SERVICES": "LINK YOUR SERVICES",
  "Tailored For You": "Tailored For You",
  "Complete Government benefits in it complete Profile": "Complete Government benefits in it complete Profile",
  "(Required for specific details)": "(Required for specific details)",
  "COMPLETE PROFILE": "COMPLETE PROFILE",
  "MY SERVICE HUB": "MY SERVICE HUB",
  "SERVICES : DOCUMENT VAULT": "SERVICES : DOCUMENT VAULT",
  "Document Vault": "Document Vault",
  "14 Valid Docs": "14 Valid Docs",
  "SECURE NEW DOCS": "SECURE NEW DOCS",
  "Request Tracker": "Request Tracker",
  "SCHEME": "SCHEME",
  "PROGRESS": "PROGRESS",
  "STATUS": "STATUS",
  "Passport Renewal": "Passport Renewal",
  "[In Review]": "[In Review]",
  "Active": "Active",
  "PAN Card Update": "PAN Card Update",
  "[Approved]": "[Approved]",
  "Resolved": "Resolved",
  "Pension Form": "Pension Form",
  "[Pending]": "[Pending]",
  "Pending": "Pending",
  "Water Connection": "Water Connection",
  "CIVIC ENGAGEMENT PORTAL": "CIVIC ENGAGEMENT PORTAL",
  "COMMUNITY RADAR": "COMMUNITY RADAR",
  "Road Construction": "Road Construction",
  "- MG Road": "- MG Road",
  "Pothole": "Pothole",
  "- College Rd.": "- College Rd.",
  "REPORTS": "REPORTS",
  "LOCALIZED CIVIC ALERTS & NEWS": "LOCALIZED CIVIC ALERTS & NEWS",
  "Scheduled Power Cut (1 PM - 4 PM) - Central Tiruppur": "Scheduled Power Cut (1 PM - 4 PM) - Central Tiruppur",
  "New Subsidy for B.Tech Students Announced": "New Subsidy for B.Tech Students Announced",
  "Heavy Rain Alert: Use Caution": "Heavy Rain Alert: Use Caution",
  "Real-time Localized Thread": "Real-time Localized Thread"
};

const hindiDict = {
  "RECOMMENDED SCHEMES": "अनुशंसित योजनाएं",
  "PERSONALIZED CIVIC BENEFITS": "व्यक्तिगत नागरिक लाभ",
  "95% Match": "95% मिलान",
  "75% Match": "75% मिलान",
  "Localized tractors and scheme for PM-KISAN.": "पीएम-किसान के लिए स्थानीयकृत ट्रैक्टर और योजना।",
  "Affordable Housing and scheme to community health in India.": "भारत में सामुदायिक स्वास्थ्य के लिए किफायती आवास योजना।",
  "Stand Up Housing scheme, scheme, and unknown government to send.": "स्टैंड अप हाउसिंग योजना, योजना और सरकार।",
  "Digital Identity": "डिजिटल पहचान",
  "Status": "स्थिति",
  "Aadhaar": "आधार",
  "PAN": "पैन",
  "PAN Preview": "पैन पूर्वावलोकन",
  "Voter ID": "वोटर आईडी",
  "LINK YOUR SERVICES": "अपनी सेवाएं लिंक करें",
  "Tailored For You": "आपके लिए तैयार",
  "Complete Government benefits in it complete Profile": "पूर्ण सरकारी लाभों के लिए प्रोफ़ाइल पूरा करें",
  "(Required for specific details)": "(विशिष्ट विवरण के लिए आवश्यक)",
  "COMPLETE PROFILE": "प्रोफ़ाइल पूरा करें",
  "MY SERVICE HUB": "मेरा सेवा हब",
  "SERVICES : DOCUMENT VAULT": "सेवाएं: दस्तावेज़ वॉल्ट",
  "Document Vault": "दस्तावेज़ वॉल्ट",
  "14 Valid Docs": "14 वैध दस्तावेज़",
  "SECURE NEW DOCS": "नए दस्तावेज़ सुरक्षित करें",
  "Request Tracker": "अनुरोध ट्रैकर",
  "SCHEME": "योजना",
  "PROGRESS": "प्रगति",
  "STATUS": "स्थिति",
  "Passport Renewal": "पासपोर्ट नवीनीकरण",
  "[In Review]": "[समीक्षाधीन]",
  "Active": "सक्रिय",
  "PAN Card Update": "पैन कार्ड अपडेट",
  "[Approved]": "[स्वीकृत]",
  "Resolved": "हल हो गया",
  "Pension Form": "पेंशन फॉर्म",
  "[Pending]": "[लंबित]",
  "Pending": "लंबित",
  "Water Connection": "जल कनेक्शन",
  "CIVIC ENGAGEMENT PORTAL": "नागरिक जुड़ाव पोर्टल",
  "COMMUNITY RADAR": "सामुदायिक रडार",
  "Road Construction": "सड़क निर्माण",
  "- MG Road": "- एमजी रोड",
  "Pothole": "गड्ढा",
  "- College Rd.": "- कॉलेज रोड",
  "REPORTS": "रिपोर्ट्स",
  "LOCALIZED CIVIC ALERTS & NEWS": "स्थानीय नागरिक अलर्ट और समाचार",
  "Scheduled Power Cut (1 PM - 4 PM) - Central Tiruppur": "निर्धारित बिजली कटौती (दोपहर 1 बजे - 4 बजे) - मध्य तिरुपुर",
  "New Subsidy for B.Tech Students Announced": "बी.टेक छात्रों के लिए नई सब्सिडी की घोषणा",
  "Heavy Rain Alert: Use Caution": "भारी बारिश अलर्ट: सावधानी बरतें",
  "Real-time Localized Thread": "रीयल-टाइम स्थानीयकृत थ्रेड"
};

const tamilDict = {
  "RECOMMENDED SCHEMES": "பரிந்துரைக்கப்படும் திட்டங்கள்",
  "PERSONALIZED CIVIC BENEFITS": "தனிப்பயனாக்கப்பட்ட குடிமக்கள் சலுகைகள்",
  "95% Match": "95% பொருத்தம்",
  "75% Match": "75% பொருத்தம்",
  "Localized tractors and scheme for PM-KISAN.": "PM-KISAN க்கான உள்ளூர்மயமாக்கப்பட்ட டிராக்டர்கள் மற்றும் திட்டம்.",
  "Affordable Housing and scheme to community health in India.": "இந்தியாவில் மலிவு விலை வீடுகள் மற்றும் சமூக சுகாதார திட்டம்.",
  "Stand Up Housing scheme, scheme, and unknown government to send.": "ஸ்டாண்ட் அப் வீட்டு வசதி திட்டம்.",
  "Digital Identity": "டிஜிட்டல் அடையாளம்",
  "Status": "நிலை",
  "Aadhaar": "ஆதார்",
  "PAN": "பான்",
  "PAN Preview": "பான் மாதிரிக்காட்சி",
  "Voter ID": "வாக்காளர் அட்டை",
  "LINK YOUR SERVICES": "உங்கள் சேவைகளை இணைக்கவும்",
  "Tailored For You": "உங்களுக்காகத் தயாரிக்கப்பட்டது",
  "Complete Government benefits in it complete Profile": "முழுமையான அரசாங்க சலுகைகளுக்கு சுயவிவரத்தை முழுமைப்படுத்தவும்",
  "(Required for specific details)": "(குறிப்பிட்ட விவரங்களுக்கு தேவை)",
  "COMPLETE PROFILE": "சுயவிவரத்தை முழுமைப்படுத்து",
  "MY SERVICE HUB": "எனது சேவை மையம்",
  "SERVICES : DOCUMENT VAULT": "சேவைகள் : ஆவண காப்பகம்",
  "Document Vault": "ஆவண காப்பகம்",
  "14 Valid Docs": "14 செல்லுபடியாகும் ஆவணங்கள்",
  "SECURE NEW DOCS": "புதிய ஆவணங்களை பாதுகாக்கவும்",
  "Request Tracker": "கோரிக்கை கண்காணிப்பு",
  "SCHEME": "திட்டம்",
  "PROGRESS": "முன்னேற்றம்",
  "STATUS": "நிலை",
  "Passport Renewal": "பாஸ்போர்ட் புதுப்பித்தல்",
  "[In Review]": "[பரிசீலனையில்]",
  "Active": "செயலில்",
  "PAN Card Update": "பான் அட்டை புதுப்பிப்பு",
  "[Approved]": "[அங்கீகரிக்கப்பட்டது]",
  "Resolved": "தீர்க்கப்பட்டது",
  "Pension Form": "ஓய்வூதிய படிவம்",
  "[Pending]": "[நிலுவையில்]",
  "Pending": "நிலுவையில்",
  "Water Connection": "குடிநீர் இணைப்பு",
  "CIVIC ENGAGEMENT PORTAL": "குடிமக்கள் ஈடுபாடு தளம்",
  "COMMUNITY RADAR": "சமூக ரேடார்",
  "Road Construction": "சாலை கட்டுமானம்",
  "- MG Road": "- எம்.ஜி. சாலை",
  "Pothole": "குழி",
  "- College Rd.": "- கல்லூரி சாலை",
  "REPORTS": "அறிக்கைகள்",
  "LOCALIZED CIVIC ALERTS & NEWS": "உள்ளூர் குடிமக்கள் எச்சரிக்கைகள் & செய்திகள்",
  "Scheduled Power Cut (1 PM - 4 PM) - Central Tiruppur": "திட்டமிடப்பட்ட மின்தடை (மதியம் 1 - 4 மணி) - மத்திய திருப்பூர்",
  "New Subsidy for B.Tech Students Announced": "பி.டெக் மாணவர்களுக்கான புதிய மானியம் அறிவிப்பு",
  "Heavy Rain Alert: Use Caution": "கனமழை எச்சரிக்கை: கவனமாக இருங்கள்",
  "Real-time Localized Thread": "நிகழ்நேர உள்ளூர்மயமாக்கப்பட்ட செய்தி"
};

// 1. Update page.tsx
let pageContent = fs.readFileSync('src/app/dashboard/page.tsx', 'utf8');

for (const key of Object.keys(englishDict)) {
  // Be careful with replacing exact matches in text nodes.
  // We can do simple string replacements for UI text in the JSX.
  
  // Replace direct JSX text >Text<
  pageContent = pageContent.split(`>${key}<`).join(`>{t(language, "${key}")}<`);
  
  // Replace inner text that might have spaces, using a slightly more complex split if needed, 
  // but let's try direct replacement first for common patterns.
}

// Manual specific replacements for page.tsx that might not have >< around them
const specificReplacements = [
  ['"RECOMMENDED SCHEMES"', '{t(language, "RECOMMENDED SCHEMES")}'],
  ['"PERSONALIZED CIVIC BENEFITS"', '{t(language, "PERSONALIZED CIVIC BENEFITS")}'],
  ['"MY SERVICE HUB"', '{t(language, "MY SERVICE HUB")}'],
  ['"SERVICES : DOCUMENT VAULT"', '{t(language, "SERVICES : DOCUMENT VAULT")}'],
  ['"CIVIC ENGAGEMENT PORTAL"', '{t(language, "CIVIC ENGAGEMENT PORTAL")}'],
  ['"COMMUNITY RADAR"', '{t(language, "COMMUNITY RADAR")}'],
  ['"LOCALIZED CIVIC ALERTS & NEWS"', '{t(language, "LOCALIZED CIVIC ALERTS & NEWS")}'],
  ['"Tailored For You"', '{t(language, "Tailored For You")}'],
  ['"LINK YOUR SERVICES"', '{t(language, "LINK YOUR SERVICES")}'],
  ['"COMPLETE PROFILE"', '{t(language, "COMPLETE PROFILE")}'],
  ['"SECURE NEW DOCS"', '{t(language, "SECURE NEW DOCS")}'],
  ['"14 Valid Docs"', '{t(language, "14 Valid Docs")}'],
  ['"Document Vault"', '{t(language, "Document Vault")}'],
  ['"Request Tracker"', '{t(language, "Request Tracker")}'],
  ['"SCHEME"', '{t(language, "SCHEME")}'],
  ['"PROGRESS"', '{t(language, "PROGRESS")}'],
  ['"STATUS"', '{t(language, "STATUS")}'],
  ['"REPORTS"', '{t(language, "REPORTS")}'],
  ['"Real-time Localized Thread"', '{t(language, "Real-time Localized Thread")}']
];

for (const [search, replace] of specificReplacements) {
  // We want to make sure it's inside JSX, so we check if it is part of a text node or attribute.
  // Actually, since these are very specific uppercase strings, we can just replace them inside the JSX tags.
  pageContent = pageContent.split(`>${search.replace(/"/g, '')}<`).join(`>${replace}<`);
  
  // If it's a raw string in the JSX like text-zinc-500 uppercase tracking-wider">PERSONALIZED CIVIC BENEFITS</p>
  pageContent = pageContent.split(`>${search.replace(/"/g, '')}</p>`).join(`>${replace}</p>`);
  pageContent = pageContent.split(`>${search.replace(/"/g, '')}</h2>`).join(`>${replace}</h2>`);
  pageContent = pageContent.split(`>${search.replace(/"/g, '')}</h3>`).join(`>${replace}</h3>`);
  pageContent = pageContent.split(`>${search.replace(/"/g, '')}</span>`).join(`>${replace}</span>`);
  pageContent = pageContent.split(`>${search.replace(/"/g, '')}</div>`).join(`>${replace}</div>`);
}

// Replace string literal nodes directly for the dashboard specific labels:
pageContent = pageContent.replace(/>\s*RECOMMENDED SCHEMES\s*</g, '>{t(language, "RECOMMENDED SCHEMES")}<');
pageContent = pageContent.replace(/>\s*PERSONALIZED CIVIC BENEFITS\s*</g, '>{t(language, "PERSONALIZED CIVIC BENEFITS")}<');
pageContent = pageContent.replace(/>\s*95% Match\s*</g, '>{t(language, "95% Match")}<');
pageContent = pageContent.replace(/>\s*75% Match\s*</g, '>{t(language, "75% Match")}<');
pageContent = pageContent.replace(/>\s*Localized tractors and scheme for PM-KISAN\.\s*</g, '>{t(language, "Localized tractors and scheme for PM-KISAN.")}<');
pageContent = pageContent.replace(/>\s*Affordable Housing and scheme to community health in India\.\s*</g, '>{t(language, "Affordable Housing and scheme to community health in India.")}<');
pageContent = pageContent.replace(/>\s*Stand Up Housing scheme, scheme, and unknown government to send\.\s*</g, '>{t(language, "Stand Up Housing scheme, scheme, and unknown government to send.")}<');
pageContent = pageContent.replace(/>\s*Digital Identity\s*</g, '>{t(language, "Digital Identity")}<');
pageContent = pageContent.replace(/>\s*Status\s*</g, '>{t(language, "Status")}<');
pageContent = pageContent.replace(/>\s*Aadhaar\s*</g, '>{t(language, "Aadhaar")}<');
pageContent = pageContent.replace(/>\s*PAN\s*</g, '>{t(language, "PAN")}<');
pageContent = pageContent.replace(/>\s*PAN Preview\s*</g, '>{t(language, "PAN Preview")}<');
pageContent = pageContent.replace(/>\s*Voter ID\s*</g, '>{t(language, "Voter ID")}<');
pageContent = pageContent.replace(/>\s*LINK YOUR SERVICES\s*</g, '>{t(language, "LINK YOUR SERVICES")}<');
pageContent = pageContent.replace(/>\s*Tailored For You\s*</g, '>{t(language, "Tailored For You")}<');
pageContent = pageContent.replace(/>\s*Complete Government benefits in it complete Profile\s*</g, '>{t(language, "Complete Government benefits in it complete Profile")}<');
pageContent = pageContent.replace(/>\s*\(Required for specific details\)\s*</g, '>{t(language, "(Required for specific details)")}<');
pageContent = pageContent.replace(/>\s*COMPLETE PROFILE\s*</g, '>{t(language, "COMPLETE PROFILE")}<');
pageContent = pageContent.replace(/>\s*MY SERVICE HUB\s*</g, '>{t(language, "MY SERVICE HUB")}<');
pageContent = pageContent.replace(/>\s*SERVICES : DOCUMENT VAULT\s*</g, '>{t(language, "SERVICES : DOCUMENT VAULT")}<');
pageContent = pageContent.replace(/>\s*Document Vault\s*</g, '>{t(language, "Document Vault")}<');
pageContent = pageContent.replace(/>\s*14 Valid Docs\s*</g, '>{t(language, "14 Valid Docs")}<');
pageContent = pageContent.replace(/>\s*SECURE NEW DOCS\s*</g, '>{t(language, "SECURE NEW DOCS")}<');
pageContent = pageContent.replace(/>\s*Request Tracker\s*</g, '>{t(language, "Request Tracker")}<');
pageContent = pageContent.replace(/>\s*SCHEME\s*</g, '>{t(language, "SCHEME")}<');
pageContent = pageContent.replace(/>\s*PROGRESS\s*</g, '>{t(language, "PROGRESS")}<');
pageContent = pageContent.replace(/>\s*STATUS\s*</g, '>{t(language, "STATUS")}<');
pageContent = pageContent.replace(/>\s*Passport Renewal\s*</g, '>{t(language, "Passport Renewal")}<');
pageContent = pageContent.replace(/>\s*\[In Review\]\s*</g, '>{t(language, "[In Review]")}<');
pageContent = pageContent.replace(/>\s*Active\s*</g, '>{t(language, "Active")}<');
pageContent = pageContent.replace(/>\s*PAN Card Update\s*</g, '>{t(language, "PAN Card Update")}<');
pageContent = pageContent.replace(/>\s*\[Approved\]\s*</g, '>{t(language, "[Approved]")}<');
pageContent = pageContent.replace(/>\s*Resolved\s*</g, '>{t(language, "Resolved")}<');
pageContent = pageContent.replace(/>\s*Pension Form\s*</g, '>{t(language, "Pension Form")}<');
pageContent = pageContent.replace(/>\s*\[Pending\]\s*</g, '>{t(language, "[Pending]")}<');
pageContent = pageContent.replace(/>\s*Pending\s*</g, '>{t(language, "Pending")}<');
pageContent = pageContent.replace(/>\s*Water Connection\s*</g, '>{t(language, "Water Connection")}<');
pageContent = pageContent.replace(/>\s*CIVIC ENGAGEMENT PORTAL\s*</g, '>{t(language, "CIVIC ENGAGEMENT PORTAL")}<');
pageContent = pageContent.replace(/>\s*COMMUNITY RADAR\s*</g, '>{t(language, "COMMUNITY RADAR")}<');
pageContent = pageContent.replace(/>\s*Road Construction\s*</g, '>{t(language, "Road Construction")}<');
pageContent = pageContent.replace(/>\s*- MG Road\s*</g, '>{t(language, "- MG Road")}<');
pageContent = pageContent.replace(/>\s*Pothole\s*</g, '>{t(language, "Pothole")}<');
pageContent = pageContent.replace(/>\s*- College Rd\.\s*</g, '>{t(language, "- College Rd.")}<');
pageContent = pageContent.replace(/>\s*REPORTS\s*</g, '>{t(language, "REPORTS")}<');
pageContent = pageContent.replace(/>\s*LOCALIZED CIVIC ALERTS & NEWS\s*</g, '>{t(language, "LOCALIZED CIVIC ALERTS & NEWS")}<');
pageContent = pageContent.replace(/>\s*Scheduled Power Cut \(1 PM - 4 PM\) - Central Tiruppur\s*</g, '>{t(language, "Scheduled Power Cut (1 PM - 4 PM) - Central Tiruppur")}<');
pageContent = pageContent.replace(/>\s*New Subsidy for B\.Tech Students Announced\s*</g, '>{t(language, "New Subsidy for B.Tech Students Announced")}<');
pageContent = pageContent.replace(/>\s*Heavy Rain Alert: Use Caution\s*</g, '>{t(language, "Heavy Rain Alert: Use Caution")}<');
pageContent = pageContent.replace(/>\s*Real-time Localized Thread\s*</g, '>{t(language, "Real-time Localized Thread")}<');


if (!pageContent.includes('import { t }')) {
  pageContent = pageContent.replace('import { useLanguage } from "@/components/providers/LanguageProvider"', 'import { useLanguage } from "@/components/providers/LanguageProvider"\nimport { t } from "@/lib/translations"');
}

fs.writeFileSync('src/app/dashboard/page.tsx', pageContent);

// 2. Update translations.ts
let fileStr = fs.readFileSync('src/lib/translations.ts', 'utf8');

let keysList = Object.keys(englishDict).map(k => `"${k}"`).join(" | ");
// It's a type union, we append to the end:
fileStr = fileStr.replace('export type TranslationKeys = ', 'export type TranslationKeys = ' + keysList + ' | \n');

function injectDict(fileStr, lang, dict) {
  let entries = Object.entries(dict).map(([k,v]) => `    "${k}": "${v}"`).join(",\n");
  return fileStr.replace(new RegExp(`${lang}: \\{`), `${lang}: {\n${entries},`);
}

fileStr = injectDict(fileStr, "English", englishDict);
fileStr = injectDict(fileStr, "Hindi", hindiDict);
fileStr = injectDict(fileStr, "Tamil", tamilDict);

fs.writeFileSync('src/lib/translations.ts', fileStr);
console.log('dashboard and translations updated.');
