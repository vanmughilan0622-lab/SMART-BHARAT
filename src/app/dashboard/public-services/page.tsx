"use client"

import { Search, ChevronDown, Car, Fingerprint, Vote, FileText, Cloud, Calculator, IdCard, Box, ScrollText, FileCheck, DollarSign, ArrowRightLeft } from "lucide-react"
import { useLanguage } from "@/components/providers/LanguageProvider"

const pageTranslations: Record<string, Record<string, string>> = {
  English: {
    placeholder: "Search all public services, certificates, and applications...",
    rtoTitle: "RTO & DRIVING",
    rtoDesc: "Apply for New DL, Renew DL, Vehicle Registration, and more.",
    rtoApply: "Apply for New DL",
    rtoRenew: "Renew License",
    rtoBook: "Book RTO Appointment",
    rtoStatus: "Appointment 15th July",
    aadhaarTitle: "AADHAAR",
    aadhaarDesc: "Update Address, Biometrics, and Download E-Aadhaar.",
    aadhaarAddress: "Update Address",
    aadhaarDownload: "Download E-Aadhaar",
    aadhaarStatusText: "Check Update Status",
    aadhaarStatus: "Approved",
    voterTitle: "VOTER ID",
    voterDesc: "Check Electoral Roll, Apply for EPIC.",
    voterCheck: "Check Electoral Roll",
    voterApply: "Apply for EPIC",
    voterCorrect: "Correct Details",
    voterStatus: "Active",
    civilTitle: "CIVIL DOCS",
    civilDesc: "Birth, death, marriage certificates.",
    lockerTitle: "DIGILOCKER",
    lockerDesc: "Digital document locker.",
    taxTitle: "TAX & FINANCE",
    latestStatus: "Latest Status",
    details: "DETAILS",
    statusLabel: "Status",
    linked: "LINKED",
    birthCert: "Birth Certificate",
    deathCert: "Death Certificate",
    marriageCert: "Marriage Cert.",
    apply: "APPLY",
    docSecured: "12 DOCS SECURED",
    open: "Open",
    gst: "GST Registration",
    itr: "File ITR",
    panCard: "PAN Card",
    gstDesc: "GST, ITR, PAN Services",
    services: "SERVICES",
  },
  Tamil: {
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
    taxDesc: "GST பதிவு, ITR, பான் அட்டை.",
    latestStatus: "சமீபத்திய நிலை",
    details: "விவரங்கள்",
    statusLabel: "நிலை",
    linked: "இணைக்கப்பட்டது",
    birthCert: "பிறப்பு சான்றிதழ்",
    deathCert: "இறப்பு சான்றிதழ்",
    marriageCert: "திருமண சான்றிதழ்",
    apply: "விண்ணப்பிக்கவும்",
    docSecured: "12 ஆவணங்கள் பாதுகாக்கப்பட்டன",
    open: "திற",
    gst: "GST பதிவு",
    itr: "ITR தாக்கல்",
    panCard: "பான் அட்டை",
    gstDesc: "GST, ITR, பான் சேவைகள்",
    services: "சேவைகள்",
  },
  Hindi: {
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
    taxDesc: "जीएसटी पंजीकरण, आईटीआर, पैन कार्ड।",
    latestStatus: "नवीनतम स्थिति",
    details: "विवरण",
    statusLabel: "स्थिति",
    linked: "लिंक्ड",
    birthCert: "जन्म प्रमाण पत्र",
    deathCert: "मृत्यु प्रमाण पत्र",
    marriageCert: "विवाह प्रमाण पत्र",
    apply: "आवेदन करें",
    docSecured: "12 दस्तावेज़ सुरक्षित",
    open: "खोलें",
    gst: "जीएसटी पंजीकरण",
    itr: "आईटीआर दाखिल करें",
    panCard: "पैन कार्ड",
    gstDesc: "जीएसटी, आईटीआर, पैन सेवाएं",
    services: "सेवाएं",
  },
  // ... Simplified for brevity, same translations apply
}

export default function PublicServicesHub() {
  const { language } = useLanguage()
  const t = (key: string) => pageTranslations[language]?.[key] || pageTranslations["English"][key] || key

  return (
    <div className="flex flex-col h-full w-full mx-auto space-y-6 animate-in fade-in duration-500 pb-10">
      
      {/* Search Bar */}
      <div className="relative group w-full max-w-2xl mx-auto mb-4">
        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-zinc-500 group-focus-within:text-[#FF5722] transition-colors" />
        </div>
        <input 
          type="text" 
          placeholder={t("placeholder")} 
          className="w-full bg-[#1C1C1E] border border-[#333] rounded-full py-4 pl-14 pr-6 text-[13px] font-bold text-white tracking-widest uppercase placeholder:text-zinc-600 focus:outline-none focus:border-[#FF5722] focus:ring-1 focus:ring-[#FF5722] transition-all shadow-inner"
        />
      </div>

      {/* Services Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-min gap-6 max-w-full">
        
        {/* Card 1: RTO (Large Main Block) */}
        <div className="neo-card p-8 md:col-span-8 md:row-span-2 min-h-[350px] flex flex-col justify-between group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[#FF5722]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 opacity-50 pointer-events-none"></div>
          
          <div className="flex justify-between items-start relative z-10">
            <div>
              <h2 className="text-[#FF5722] font-black text-2xl tracking-widest uppercase mb-1">{t("rtoTitle")}</h2>
              <h3 className="text-white font-light text-xl tracking-widest uppercase">{t("services")}</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#232325] border border-[#3A3A3C] shadow-inner flex items-center justify-center cursor-pointer hover:border-[#FF5722] transition-colors">
              <Car className="h-6 w-6 text-[#FF5722]" />
            </div>
          </div>

          <div className="flex-1 mt-8 relative z-10 flex flex-col justify-center">
             <div className="grid grid-cols-3 gap-4">
                <a href="#" className="bg-[#1C1C1E] border border-[#333] hover:border-[#FF5722] transition-colors p-4 rounded-xl flex flex-col items-center justify-center text-center gap-2 group/btn">
                  <div className="w-10 h-10 rounded-full bg-[#232325] border border-[#333] flex items-center justify-center group-hover/btn:glow-border-orange transition-all">
                    <FileCheck className="w-5 h-5 text-white group-hover/btn:text-[#FF5722]" />
                  </div>
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">{t("rtoApply")}</span>
                </a>
                <a href="#" className="bg-[#1C1C1E] border border-[#333] hover:border-[#FF5722] transition-colors p-4 rounded-xl flex flex-col items-center justify-center text-center gap-2 group/btn">
                  <div className="w-10 h-10 rounded-full bg-[#232325] border border-[#333] flex items-center justify-center group-hover/btn:glow-border-orange transition-all">
                    <ArrowRightLeft className="w-5 h-5 text-white group-hover/btn:text-[#FF5722]" />
                  </div>
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">{t("rtoRenew")}</span>
                </a>
                <a href="#" className="bg-[#1C1C1E] border border-[#333] hover:border-[#FF5722] transition-colors p-4 rounded-xl flex flex-col items-center justify-center text-center gap-2 group/btn">
                  <div className="w-10 h-10 rounded-full bg-[#232325] border border-[#333] flex items-center justify-center group-hover/btn:glow-border-orange transition-all">
                    <ScrollText className="w-5 h-5 text-white group-hover/btn:text-[#FF5722]" />
                  </div>
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">{t("rtoBook")}</span>
                </a>
             </div>
          </div>

          <div className="mt-8 flex items-center justify-between relative z-10 border-t border-[#333] pt-6">
            <div>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">{t("latestStatus")}</p>
              <p className="text-[#FF5722] text-sm font-bold mt-1 tracking-widest uppercase">{t("rtoStatus")}</p>
            </div>
            <button className="px-6 py-2 rounded-full bg-[#232325] border border-[#3A3A3C] text-zinc-300 text-[10px] font-bold uppercase tracking-widest hover:border-[#FF5722] transition-colors shadow-inner flex items-center gap-2">
              {t("details")} <span className="text-[#FF5722]">&gt;</span>
            </button>
          </div>
        </div>

        {/* Card 2: Aadhaar (Tall Block) */}
        <div className="neo-card p-6 md:col-span-4 md:row-span-2 min-h-[350px] flex flex-col justify-between relative overflow-hidden group">
          {/* removed external pattern image to eliminate external asset */}
          
          <div className="relative z-10 text-center w-full mb-6">
            <h2 className="text-white font-black text-2xl tracking-widest uppercase mb-1">{t("aadhaarTitle")}</h2>
            <div className="inline-block px-3 py-1 rounded-full bg-[#FF5722]/10 border border-[#FF5722]/20 text-[10px] text-[#FF5722] font-bold uppercase tracking-widest">
              {t("linked")}
            </div>
          </div>

          <div className="relative z-10 flex-1 flex flex-col gap-3">
             <a href="#" className="flex items-center justify-between p-4 rounded-xl bg-[#1C1C1E] border border-[#333] hover:border-[#FF5722] transition-colors">
               <span className="text-xs font-bold text-zinc-300 tracking-widest uppercase">{t("aadhaarAddress")}</span>
               <div className="w-6 h-6 rounded-full bg-[#232325] flex items-center justify-center"><span className="text-[#FF5722] text-xs">&gt;</span></div>
             </a>
             <a href="#" className="flex items-center justify-between p-4 rounded-xl bg-[#1C1C1E] border border-[#333] hover:border-[#FF5722] transition-colors">
               <span className="text-xs font-bold text-zinc-300 tracking-widest uppercase">{t("aadhaarDownload")}</span>
               <div className="w-6 h-6 rounded-full bg-[#232325] flex items-center justify-center"><span className="text-[#FF5722] text-xs">&gt;</span></div>
             </a>
          </div>

          <div className="relative z-10 w-full flex items-center justify-between border-t border-[#333] pt-6 mt-6">
            <Fingerprint className="w-8 h-8 text-[#FF5722]" />
            <div className="text-right">
              <span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase block">{t("statusLabel")}</span>
              <span className="text-xs font-bold text-[#FF5722] tracking-widest uppercase">{t("aadhaarStatus")}</span>
            </div>
          </div>
        </div>

        {/* Card 3: Voter ID */}
        <div className="neo-card p-6 md:col-span-4 min-h-[220px] flex flex-col justify-between relative">
           <h3 className="text-white font-bold text-lg tracking-widest uppercase mb-4">{t("voterTitle")}</h3>
           <div className="flex-1 flex flex-col gap-2">
             <a href="#" className="text-xs font-bold text-zinc-400 hover:text-[#FF5722] uppercase tracking-wider transition-colors border-b border-[#333] pb-2">{t("voterCheck")}</a>
             <a href="#" className="text-xs font-bold text-zinc-400 hover:text-[#FF5722] uppercase tracking-wider transition-colors border-b border-[#333] pb-2">{t("voterApply")}</a>
             <a href="#" className="text-xs font-bold text-zinc-400 hover:text-[#FF5722] uppercase tracking-wider transition-colors">{t("voterCorrect")}</a>
           </div>
           <div className="mt-4 flex items-center justify-between">
              <Vote className="w-6 h-6 text-[#FF5722]" />
              <span className="px-3 py-1 bg-[#1C1C1E] border border-[#333] rounded-full text-[10px] font-bold text-[#FF5722] uppercase tracking-widest">{t("voterStatus")}</span>
           </div>
        </div>

        {/* Card 4: Civil Docs */}
        <div className="neo-card p-6 md:col-span-4 min-h-[220px] flex flex-col justify-between relative">
         <h3 className="text-white font-bold text-lg tracking-widest uppercase mb-4">{t("civilTitle")}</h3>
           <div className="flex-1 flex flex-col gap-2">
             <a href="#" className="text-xs font-bold text-zinc-400 hover:text-[#FF5722] uppercase tracking-wider transition-colors border-b border-[#333] pb-2">{t("birthCert")}</a>
             <a href="#" className="text-xs font-bold text-zinc-400 hover:text-[#FF5722] uppercase tracking-wider transition-colors border-b border-[#333] pb-2">{t("deathCert")}</a>
             <a href="#" className="text-xs font-bold text-zinc-400 hover:text-[#FF5722] uppercase tracking-wider transition-colors">{t("marriageCert")}</a>
           </div>
           <div className="mt-4 flex items-center justify-between">
              <FileText className="w-6 h-6 text-[#FF5722]" />
              <button className="text-[10px] font-bold text-white uppercase tracking-widest hover:text-[#FF5722] transition-colors">{t("apply")} &gt;</button>
           </div>
        </div>

        {/* Card 5: DigiLocker */}
        <div className="neo-card p-6 md:col-span-4 min-h-[220px] flex flex-col justify-between relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5722]/5 blur-2xl rounded-full"></div>
           <h3 className="text-white font-bold text-lg tracking-widest uppercase mb-4 relative z-10">{t("lockerTitle")}</h3>
           <div className="flex-1 flex flex-col items-center justify-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-[#1C1C1E] border border-[#333] flex items-center justify-center glow-border-orange">
                 <Cloud className="w-8 h-8 text-[#FF5722]" />
              </div>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-4">{t("docSecured")}</span>
           </div>
           <div className="mt-4 flex items-center justify-between relative z-10">
              <span className="px-3 py-1 bg-[#232325] border border-[#333] rounded-full text-[10px] font-bold text-white uppercase tracking-widest">{t("linked")}</span>
              <button className="text-[10px] font-bold text-[#FF5722] uppercase tracking-widest hover:text-white transition-colors">{t("open")} &gt;</button>
           </div>
        </div>

        {/* Card 6: Tax & Finance (Wide Bottom Block) */}
        <div className="neo-card p-6 md:col-span-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-[600px] h-full bg-gradient-to-l from-[#FF5722]/10 to-transparent pointer-events-none"></div>
          
          <div className="flex items-center gap-6 relative z-10 mb-6 md:mb-0">
             <div className="w-16 h-16 rounded-2xl bg-[#1C1C1E] border border-[#333] flex items-center justify-center shadow-inner">
                <Calculator className="w-8 h-8 text-[#FF5722]" />
             </div>
             <div>
                <h3 className="text-white font-black text-2xl tracking-widest uppercase mb-1">{t("taxTitle")}</h3>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{t("gstDesc")}</p>
             </div>
          </div>
          
          <div className="flex gap-4 relative z-10 w-full md:w-auto">
             <a href="#" className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-[#1C1C1E] border border-[#333] text-xs font-bold text-zinc-300 uppercase tracking-wider text-center hover:border-[#FF5722] hover:text-white transition-all shadow-inner">
               {t("gst")}
             </a>
             <a href="#" className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-[#1C1C1E] border border-[#333] text-xs font-bold text-zinc-300 uppercase tracking-wider text-center hover:border-[#FF5722] hover:text-white transition-all shadow-inner">
               {t("itr")}
             </a>
             <a href="#" className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-[#FF5722] border border-[#FF5722] text-xs font-bold text-white uppercase tracking-wider text-center hover:bg-[#E64A19] transition-all shadow-[0_0_15px_rgba(255,87,34,0.4)]">
               {t("panCard")}
             </a>
          </div>
        </div>

      </div>

    </div>
  )
}

