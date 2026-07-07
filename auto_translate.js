const fs = require('fs');

const transparencyTranslations = {
  English: {
    title: "Community Transparency",
    subtitle: "Bengaluru South District",
    resolved: "Complaints Resolved",
    active: "Active Infra Projects",
    time: "Avg Resolution Time",
    days: "Days",
    heatmap: "Live Issue Heatmap",
    potholes: "Potholes",
    water: "Water",
    lights: "Streetlights",
    fixed: "Fixed Today",
    jayanagar: "Jayanagar & Surrounding",
    reports: "8 active pothole reports. Do not report duplicates.",
    recent: "Recent Local Actions",
    road: "Road Repair Completed",
    bbmp: "12th Main Road pothole fixed by BBMP.",
    hours: "2 hours ago",
    pipe: "New Water Line Project",
    phase: "Phase 1 started in JP Nagar 3rd Phase.",
    yesterday: "Yesterday",
    fund: "Fund Allocation",
    cr: "₹1.2Cr allocated for local park redevelopment.",
    daysAgo: "3 days ago",
    viewAll: "View All Actions",
    month: "+12% this month",
    new: "4 new",
    minus: "-2 days"
  },
  Tamil: {
    title: "சமூக வெளிப்படைத்தன்மை",
    subtitle: "பெங்களூரு தெற்கு மாவட்டம்",
    resolved: "தீர்க்கப்பட்ட புகார்கள்",
    active: "செயலில் உள்ள கட்டமைப்பு திட்டங்கள்",
    time: "சராசரி தீர்வு நேரம்",
    days: "நாட்கள்",
    heatmap: "நிகழ்நேர பிரச்சனை வரைபடம்",
    potholes: "குழிகள்",
    water: "தண்ணீர்",
    lights: "தெருவிளக்குகள்",
    fixed: "இன்று சரிசெய்யப்பட்டது",
    jayanagar: "ஜெயநகர் மற்றும் சுற்றுப்புறம்",
    reports: "8 செயலில் உள்ள குழி புகார்கள். நகல்களை புகாரளிக்க வேண்டாம்.",
    recent: "சமீபத்திய உள்ளூர் நடவடிக்கைகள்",
    road: "சாலை சீரமைப்பு முடிந்தது",
    bbmp: "12வது பிரதான சாலை குழி BBMP ஆல் சரிசெய்யப்பட்டது.",
    hours: "2 மணி நேரத்திற்கு முன்",
    pipe: "புதிய குடிநீர் குழாய் திட்டம்",
    phase: "ஜேபி நகர் 3வது கட்டத்தில் 1வது கட்டம் தொடங்கியது.",
    yesterday: "நேற்று",
    fund: "நிதி ஒதுக்கீடு",
    cr: "உள்ளூர் பூங்கா மறுமேம்பாட்டிற்காக ₹1.2 கோடி ஒதுக்கீடு.",
    daysAgo: "3 நாட்களுக்கு முன்",
    viewAll: "அனைத்து நடவடிக்கைகளையும் காண்க",
    month: "இந்த மாதம் +12%",
    new: "புதிய 4",
    minus: "-2 நாட்கள்"
  },
  Hindi: {
    title: "सामुदायिक पारदर्शिता",
    subtitle: "बेंगलुरु दक्षिण जिला",
    resolved: "हल की गई शिकायतें",
    active: "सक्रिय इन्फ्रा प्रोजेक्ट्स",
    time: "औसत समाधान समय",
    days: "दिन",
    heatmap: "लाइव इश्यू हीटमैप",
    potholes: "गड्ढे",
    water: "पानी",
    lights: "स्ट्रीटलाइट्स",
    fixed: "आज ठीक किया गया",
    jayanagar: "जयनगर और आसपास",
    reports: "8 सक्रिय गड्ढे की रिपोर्ट। डुप्लिकेट रिपोर्ट न करें।",
    recent: "हाल की स्थानीय कार्रवाइयां",
    road: "सड़क मरम्मत पूरी हुई",
    bbmp: "बीबीएमपी द्वारा 12वीं मेन रोड का गड्ढा ठीक किया गया।",
    hours: "2 घंटे पहले",
    pipe: "नई जल लाइन परियोजना",
    phase: "जेपी नगर तीसरे चरण में चरण 1 शुरू हुआ।",
    yesterday: "कल",
    fund: "निधि आवंटन",
    cr: "स्थानीय पार्क पुनर्विकास के लिए ₹1.2 करोड़ आवंटित।",
    daysAgo: "3 दिन पहले",
    viewAll: "सभी कार्रवाइयां देखें",
    month: "इस महीने +12%",
    new: "4 नए",
    minus: "-2 दिन"
  }
};

const vaultTranslations = {
  English: {
    title: "Digital Document Vault",
    subtitle: "Securely store, verify, and manage your essential documents in your e-Locker.",
    upload: "Upload Document",
    drag: "Drag and drop or browse files (PDF, JPG, PNG)",
    select: "Select File",
    scan: "AI Scan & Verify",
    auto: "Auto-extracts data for forms",
    checks: "Checks clarity and legibility",
    alerts: "Alerts on missing/expired docs",
    action: "Action Required",
    warning: "Your Income Certificate is expiring in 15 days. Please renew and upload the latest copy for uninterrupted scheme benefits.",
    renew: "Renew Now →",
    verifiedTitle: "Verified Documents",
    verified: "Verified",
    aadhaar: "Aadhaar Card",
    pan: "PAN Card",
    income: "Income Certificate",
    valid: "Valid till Dec 2024",
    attach: "Attach to Form"
  },
  Tamil: {
    title: "டிஜிட்டல் ஆவண பெட்டகம்",
    subtitle: "உங்கள் இ-லாக்கரில் உங்கள் அத்தியாவசிய ஆவணங்களை பாதுகாப்பாக சேமித்து, சரிபார்த்து நிர்வகிக்கவும்.",
    upload: "ஆவணத்தை பதிவேற்றவும்",
    drag: "இழுத்து விடவும் அல்லது கோப்புகளை உலாவவும் (PDF, JPG, PNG)",
    select: "கோப்பைத் தேர்ந்தெடுக்கவும்",
    scan: "AI ஸ்கேன் & சரிபார்ப்பு",
    auto: "படிவங்களுக்கான தரவை தானாகவே பிரித்தெடுக்கிறது",
    checks: "தெளிவு மற்றும் தெளிவுத்திறனை சரிபார்க்கிறது",
    alerts: "விடுபட்ட/காலாவதியான ஆவணங்களில் எச்சரிக்கைகள்",
    action: "செயல் தேவை",
    warning: "உங்கள் வருமானச் சான்றிதழ் 15 நாட்களில் காலாவதியாகிறது. தடையில்லா திட்ட பலன்களுக்கு புதுப்பித்து சமீபத்திய நகலை பதிவேற்றவும்.",
    renew: "இப்போது புதுப்பிக்கவும் →",
    verifiedTitle: "சரிபார்க்கப்பட்ட ஆவணங்கள்",
    verified: "சரிபார்க்கப்பட்டது",
    aadhaar: "ஆதார் அட்டை",
    pan: "பான் அட்டை",
    income: "வருமானச் சான்றிதழ்",
    valid: "டிசம்பர் 2024 வரை செல்லுபடியாகும்",
    attach: "படிவத்துடன் இணைக்கவும்"
  },
  Hindi: {
    title: "डिजिटल दस्तावेज़ वॉल्ट",
    subtitle: "अपने ई-लॉकर में अपने आवश्यक दस्तावेज़ों को सुरक्षित रूप से संग्रहीत, सत्यापित और प्रबंधित करें।",
    upload: "दस्तावेज़ अपलोड करें",
    drag: "खींचें और छोड़ें या फ़ाइलें ब्राउज़ करें (PDF, JPG, PNG)",
    select: "फ़ाइल चुनें",
    scan: "AI स्कैन और सत्यापन",
    auto: "फॉर्म के लिए स्वचालित रूप से डेटा निकालता है",
    checks: "स्पष्टता और पठनीयता की जांच करता है",
    alerts: "गायब/समाप्त हो चुके दस्तावेज़ों पर अलर्ट",
    action: "कार्रवाई आवश्यक है",
    warning: "आपका आय प्रमाण पत्र 15 दिनों में समाप्त हो रहा है। कृपया निर्बाध योजना लाभों के लिए नवीनतम प्रति को नवीनीकृत और अपलोड करें।",
    renew: "अभी नवीनीकृत करें →",
    verifiedTitle: "सत्यापित दस्तावेज़",
    verified: "सत्यापित",
    aadhaar: "आधार कार्ड",
    pan: "पैन कार्ड",
    income: "आय प्रमाण पत्र",
    valid: "दिसंबर 2024 तक वैध",
    attach: "फॉर्म के साथ संलग्न करें"
  }
};

const trackingTranslations = {
  English: {
    title: "Resolution & Tracking Center",
    subtitle: "A unified timeline of all your scheme applications, service requests, and civic complaints.",
    status: "OFFICIAL STATUS:",
    ai: "AI SUMMARY"
  },
  Tamil: {
    title: "தீர்வு மற்றும் கண்காணிப்பு மையம்",
    subtitle: "உங்கள் அனைத்து திட்ட விண்ணப்பங்கள், சேவை கோரிக்கைகள் மற்றும் குடிமக்கள் புகார்களின் ஒருங்கிணைந்த காலவரிசை.",
    status: "அதிகாரப்பூர்வ நிலை:",
    ai: "AI சுருக்கம்"
  },
  Hindi: {
    title: "समाधान और ट्रैकिंग केंद्र",
    subtitle: "आपके सभी योजना आवेदनों, सेवा अनुरोधों और नागरिक शिकायतों की एक एकीकृत समयरेखा।",
    status: "आधिकारिक स्थिति:",
    ai: "AI सारांश"
  }
};

function processFile(filepath, dicts, replacements) {
  let content = fs.readFileSync(filepath, 'utf8');
  
  // Inject pageTranslations
  if (!content.includes('const pageTranslations')) {
    const tsx = `const pageTranslations: Record<string, Record<string, string>> = ${JSON.stringify(dicts, null, 2)};\n`;
    content = content.replace('export default function', tsx + '\nexport default function');
  }
  
  if (!content.includes('import { useLanguage }')) {
    content = content.replace('import {', 'import { useLanguage } from "@/components/providers/LanguageProvider"\nimport {');
  }
  
  if (!content.includes('const { language } = useLanguage()')) {
    content = content.replace('export default function', 'export default function');
    // We need to inject the hook and t function right after export default function Name() {
    content = content.replace(/(export default function \w+\(\) {)/, `$1\n  const { language } = useLanguage()\n  const t = (key: string) => pageTranslations[language]?.[key] || pageTranslations["English"][key] || key\n`);
  }
  
  // Do string replacements
  for (const [key, searchStr] of replacements) {
    content = content.split(`>${searchStr}<`).join(`>{t("${key}")}<`);
    // Some texts are not inside exact ><, might have trailing spaces or be part of placeholder
    content = content.split(`placeholder="${searchStr}"`).join(`placeholder={t("${key}")}`);
    content = content.split(`>OFFICIAL STATUS:</span>`).join(`>{t("status")}</span>`);
    content = content.split(`>AI SUMMARY</span>`).join(`>{t("ai")}</span>`);
    content = content.split(`>${searchStr}</span>`).join(`>{t("${key}")}</span>`);
    content = content.split(`>${searchStr}</p>`).join(`>{t("${key}")}</p>`);
    content = content.split(`>${searchStr}</h1>`).join(`>{t("${key}")}</h1>`);
    content = content.split(`>${searchStr}</h2>`).join(`>{t("${key}")}</h2>`);
    content = content.split(`>${searchStr}</h3>`).join(`>{t("${key}")}</h3>`);
  }
  
  fs.writeFileSync(filepath, content);
}

// Replacements array [key, search string in JSX]
const transparencyReplacements = [
  ["title", "Community Transparency"],
  ["subtitle", "Bengaluru South District"],
  ["resolved", "Complaints Resolved"],
  ["active", "Active Infra Projects"],
  ["time", "Avg Resolution Time"],
  ["days", "Days"],
  ["heatmap", "Live Issue Heatmap"],
  ["potholes", "Potholes"],
  ["water", "Water"],
  ["lights", "Streetlights"],
  ["fixed", "Fixed Today"],
  ["jayanagar", "Jayanagar & Surrounding"],
  ["reports", "8 active pothole reports. Do not report duplicates."],
  ["recent", "Recent Local Actions"],
  ["road", "Road Repair Completed"],
  ["bbmp", "12th Main Road pothole fixed by BBMP."],
  ["hours", "2 hours ago"],
  ["pipe", "New Water Line Project"],
  ["phase", "Phase 1 started in JP Nagar 3rd Phase."],
  ["yesterday", "Yesterday"],
  ["fund", "Fund Allocation"],
  ["cr", "₹1.2Cr allocated for local park redevelopment."],
  ["daysAgo", "3 days ago"],
  ["viewAll", "View All Actions"],
  ["month", "+12% this month"],
  ["new", "4 new"],
  ["minus", "-2 days"]
];

const vaultReplacements = [
  ["title", "Digital Document Vault"],
  ["subtitle", "Securely store, verify, and manage your essential documents in your e-Locker."],
  ["upload", "Upload Document"],
  ["drag", "Drag and drop or browse files (PDF, JPG, PNG)"],
  ["select", "Select File"],
  ["scan", "AI Scan & Verify"],
  ["auto", "Auto-extracts data for forms"],
  ["checks", "Checks clarity and legibility"],
  ["alerts", "Alerts on missing/expired docs"],
  ["action", "Action Required"],
  ["warning", "Your Income Certificate is expiring in 15 days. Please renew and upload the latest copy for uninterrupted scheme benefits."],
  ["renew", "Renew Now →"],
  ["verifiedTitle", "Verified Documents"],
  ["verified", "Verified"],
  ["aadhaar", "Aadhaar Card"],
  ["pan", "PAN Card"],
  ["income", "Income Certificate"],
  ["valid", "Valid till Dec 2024"],
  ["attach", "Attach to Form"]
];

const trackingReplacements = [
  ["title", "Resolution & Tracking Center"],
  ["subtitle", "A unified timeline of all your scheme applications, service requests, and civic complaints."]
];

processFile('src/app/dashboard/transparency/page.tsx', transparencyTranslations, transparencyReplacements);
processFile('src/app/dashboard/vault/page.tsx', vaultTranslations, vaultReplacements);
processFile('src/app/dashboard/tracking/page.tsx', trackingTranslations, trackingReplacements);

console.log('All remaining pages translated.');
