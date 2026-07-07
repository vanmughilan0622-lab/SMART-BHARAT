const fs = require('fs');

const publicServicesTamil = {
    placeholder: "அனைத்து பொது சேவைகள், சான்றிதழ்கள் மற்றும் விண்ணப்பங்களை தேடவும்...",
    rtoTitle: "ஆர்.டி.ஓ & ஓட்டுநர்",
    rtoDesc: "புதிய ஓட்டுநர் உரிமம், உரிமம் புதுப்பித்தல், வாகன பதிவு மற்றும் பலவற்றிற்கு விண்ணப்பிக்கவும்.",
    rtoApply: "புதிய உரிமத்திற்கு விண்ணப்பிக்கவும்",
    rtoRenew: "உரிமத்தை புதுப்பிக்கவும்",
    rtoBook: "RTO சந்திப்பை முன்பதிவு செய்யவும்",
    rtoStatus: "சந்திப்பு ஜூலை 15",
    aadhaarTitle: "ஆதார்",
    aadhaarDesc: "முகவரி, பயோமெட்ரிக்ஸ் புதுப்பிக்கவும் மற்றும் இ-ஆதார் பதிவிறக்கவும்.",
    aadhaarAddress: "முகவரியை புதுப்பிக்கவும்",
    aadhaarDownload: "இ-ஆதார் பதிவிறக்கவும்",
    aadhaarStatusText: "புதுப்பிப்பு நிலையைச் சரிபார்க்கவும்",
    aadhaarStatus: "அங்கீகரிக்கப்பட்டது",
    voterTitle: "வாக்காளர் அட்டை",
    voterDesc: "வாக்காளர் பட்டியலை சரிபார்க்கவும், EPIC க்கான விண்ணப்பம்.",
    voterCheck: "வாக்காளர் பட்டியலை சரிபார்க்கவும்",
    voterApply: "EPIC க்கான விண்ணப்பம்",
    voterCorrect: "விவரங்களை திருத்தவும்",
    voterStatus: "செயலில்",
    civilTitle: "சிவில் ஆவணங்கள்",
    civilDesc: "பிறப்பு, இறப்பு, திருமண சான்றிதழ்கள்.",
    lockerTitle: "டிஜிலாக்கர்",
    lockerDesc: "டிஜிட்டல் ஆவண காப்பகம்.",
    taxTitle: "வரி மற்றும் நிதி",
    taxDesc: "GST பதிவு, ITR, பான் அட்டை."
};

const publicServicesHindi = {
    placeholder: "सभी सार्वजनिक सेवाएं, प्रमाण पत्र और आवेदन खोजें...",
    rtoTitle: "आरटीओ और ड्राइविंग",
    rtoDesc: "नए डीएल, रिन्यू डीएल, वाहन पंजीकरण आदि के लिए आवेदन करें।",
    rtoApply: "नए डीएल के लिए आवेदन करें",
    rtoRenew: "लाइसेंस रिन्यू करें",
    rtoBook: "आरटीओ अपॉइंटमेंट बुक करें",
    rtoStatus: "अपॉइंटमेंट 15 जुलाई",
    aadhaarTitle: "आधार",
    aadhaarDesc: "पता, बायोमेट्रिक्स अपडेट करें और ई-आधार डाउनलोड करें।",
    aadhaarAddress: "पता अपडेट करें",
    aadhaarDownload: "ई-आधार डाउनलोड करें",
    aadhaarStatusText: "अपडेट स्थिति की जांच करें",
    aadhaarStatus: "स्वीकृत",
    voterTitle: "वोटर आईडी",
    voterDesc: "मतदाता सूची जांचें, ईपीआईसी के लिए आवेदन करें।",
    voterCheck: "मतदाता सूची जांचें",
    voterApply: "ईपीआईसी के लिए आवेदन करें",
    voterCorrect: "विवरण सही करें",
    voterStatus: "सक्रिय",
    civilTitle: "नागरिक दस्तावेज़",
    civilDesc: "जन्म, मृत्यु, विवाह प्रमाण पत्र।",
    lockerTitle: "डिजिलॉकर",
    lockerDesc: "डिजिटल दस्तावेज़ लॉकर।",
    taxTitle: "कर और वित्त",
    taxDesc: "जीएसटी पंजीकरण, आईटीआर, पैन कार्ड।"
};

function updateFileWithTranslations(filePath, tamilDict, hindiDict) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Convert dicts to string
    const tamilStr = Object.entries(tamilDict).map(([k, v]) => `    ${k}: "${v}"`).join(',\n');
    const hindiStr = Object.entries(hindiDict).map(([k, v]) => `    ${k}: "${v}"`).join(',\n');
    
    // Inject into the pageTranslations object
    if (!content.includes('Tamil: {') && content.includes('English: {')) {
        content = content.replace('  },', `  },\n  Tamil: {\n${tamilStr}\n  },\n  Hindi: {\n${hindiStr}\n  },`);
        fs.writeFileSync(filePath, content);
        console.log(`Updated translations in ${filePath}`);
    } else {
        console.log(`Could not inject into ${filePath}, might already exist or pattern mismatch.`);
    }
}

updateFileWithTranslations('src/app/dashboard/public-services/page.tsx', publicServicesTamil, publicServicesHindi);
