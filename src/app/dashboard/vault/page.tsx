"use client"

import { useLanguage } from "@/components/providers/LanguageProvider"
import { FileText, UploadCloud, ShieldCheck, Search, Link2, Share2, ScanFace, CheckCircle2, AlertCircle } from "lucide-react"

const pageTranslations: Record<string, Record<string, string>> = {
  "English": {
    "title": "Digital Document Vault",
    "subtitle": "Securely store, verify, and manage your essential documents in your e-Locker.",
    "upload": "Upload Document",
    "drag": "Drag and drop or browse files (PDF, JPG, PNG)",
    "select": "Select File",
    "scan": "AI Scan & Verify",
    "auto": "Auto-extracts data for forms",
    "checks": "Checks clarity and legibility",
    "alerts": "Alerts on missing/expired docs",
    "action": "Action Required",
    "warning": "Your Income Certificate is expiring in 15 days. Please renew and upload the latest copy for uninterrupted scheme benefits.",
    "renew": "Renew Now →",
    "verifiedTitle": "Verified Documents",
    "verified": "Verified",
    "aadhaar": "Aadhaar Card",
    "pan": "PAN Card",
    "income": "Income Certificate",
    "valid": "Valid till Dec 2024",
    "attach": "Attach to Form",
    "searchDocs": "Search documents..."
  },
  "Tamil": {
    "title": "டிஜிட்டல் ஆவண பெட்டகம்",
    "subtitle": "உங்கள் இ-லாக்கரில் உங்கள் அத்தியாவசிய ஆவணங்களை பாதுகாப்பாக சேமித்து, சரிபார்த்து நிர்வகிக்கவும்.",
    "upload": "ஆவணத்தை பதிவேற்றவும்",
    "drag": "இழுத்து விடவும் அல்லது கோப்புகளை உலாவவும் (PDF, JPG, PNG)",
    "select": "கோப்பைத் தேர்ந்தெடுக்கவும்",
    "scan": "AI ஸ்கேன் & சரிபார்ப்பு",
    "auto": "படிவங்களுக்கான தரவை தானாகவே பிரித்தெடுக்கிறது",
    "checks": "தெளிவு மற்றும் தெளிவுத்திறனை சரிபார்க்கிறது",
    "alerts": "விடுபட்ட/காலாவதியான ஆவணங்களில் எச்சரிக்கைகள்",
    "action": "செயல் தேவை",
    "warning": "உங்கள் வருமானச் சான்றிதழ் 15 நாட்களில் காலாவதியாகிறது. தடையில்லா திட்ட பலன்களுக்கு புதுப்பித்து சமீபத்திய நகலை பதிவேற்றவும்.",
    "renew": "இப்போது புதுப்பிக்கவும் →",
    "verifiedTitle": "சரிபார்க்கப்பட்ட ஆவணங்கள்",
    "verified": "சரிபார்க்கப்பட்டது",
    "aadhaar": "ஆதார் அட்டை",
    "pan": "பான் அட்டை",
    "income": "வருமானச் சான்றிதழ்",
    "valid": "டிசம்பர் 2024 வரை செல்லுபடியாகும்",
    "attach": "படிவத்துடன் இணைக்கவும்",
    "searchDocs": "ஆவணங்களை தேடவும்..."
  },
  "Hindi": {
    "title": "डिजिटल दस्तावेज़ वॉल्ट",
    "subtitle": "अपने ई-लॉकर में अपने आवश्यक दस्तावेज़ों को सुरक्षित रूप से संग्रहीत, सत्यापित और प्रबंधित करें।",
    "upload": "दस्तावेज़ अपलोड करें",
    "drag": "खींचें और छोड़ें या फ़ाइलें ब्राउज़ करें (PDF, JPG, PNG)",
    "select": "फ़ाइल चुनें",
    "scan": "AI स्कैन और सत्यापन",
    "auto": "फॉर्म के लिए स्वचालित रूप से डेटा निकालता है",
    "checks": "स्पष्टता और पठनीयता की जांच करता है",
    "alerts": "गायब/समाप्त हो चुके दस्तावेज़ों पर अलर्ट",
    "action": "कार्रवाई आवश्यक है",
    "warning": "आपका आय प्रमाण पत्र 15 दिनों में समाप्त हो रहा है। कृपया निर्बाध योजना लाभों के लिए नवीनतम प्रति को नवीनीकृत और अपलोड करें।",
    "renew": "अभी नवीनीकृत करें →",
    "verifiedTitle": "सत्यापित दस्तावेज़",
    "verified": "सत्यापित",
    "aadhaar": "आधार कार्ड",
    "pan": "पैन कार्ड",
    "income": "आय प्रमाण पत्र",
    "valid": "दिसंबर 2024 तक वैध",
    "attach": "फॉर्म के साथ संलग्न करें",
    "searchDocs": "दस्तावेज़ खोजें..."
  }
};

export default function DocumentVaultPage() {
  const { language } = useLanguage()
  const t = (key: string) => pageTranslations[language]?.[key] || pageTranslations["English"][key] || key

  return (
    <div className="w-full mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="w-8 h-8 text-orange-500" />
            <h1 className="text-3xl font-black tracking-tight text-foreground">{t("title")}</h1>
          </div>
          <p className="text-muted-foreground font-medium">
            {t("subtitle")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column - AI Scan & Upload */}
        <div className="lg:col-span-1 space-y-6">
          
          <div className="bg-white/[0.02] border border-orange-500/30 backdrop-blur-md rounded-3xl p-6 shadow-[0_0_20px_rgba(255,87,34,0.05)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors duration-500"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-white/[0.1] rounded-2xl hover:border-orange-500/50 transition-colors cursor-pointer bg-black/20">
              <div className="p-4 bg-orange-500/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <UploadCloud className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{t("upload")}</h3>
              <p className="text-xs text-muted-foreground mb-4">{t("drag")}</p>
              
              <button className="bg-orange-500 hover:bg-orange-500 text-zinc-950 font-bold py-2 px-6 rounded-xl transition-colors text-sm w-full">
                {t("select")}
              </button>
            </div>

            <div className="mt-6 relative z-10">
               <h4 className="flex items-center gap-2 text-sm font-bold text-foreground mb-3">
                 <ScanFace className="w-4 h-4 text-orange-500" /> {t("scan")}
               </h4>
               <div className="space-y-3">
                 <div className="flex items-center gap-3 text-sm text-muted-foreground">
                   <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                   <span>{t("auto")}</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm text-muted-foreground">
                   <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                   <span>{t("checks")}</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm text-muted-foreground">
                   <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                   <span>{t("alerts")}</span>
                 </div>
               </div>
            </div>
          </div>

          <div className="bg-white/[0.02] border border-orange-500/30 backdrop-blur-md rounded-3xl p-6 relative overflow-hidden">
             <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                   <h4 className="font-bold text-foreground text-sm">{t("action")}</h4>
                   <p className="text-xs text-muted-foreground mt-1">{t("warning")}</p>
                   <button className="text-xs font-bold text-orange-500 hover:text-orange-500 mt-3 transition-colors">{t("renew")}</button>
                </div>
             </div>
          </div>

        </div>

        {/* Right Column - Document Grid */}
        <div className="lg:col-span-2">
          
          <div className="flex items-center justify-between mb-6">
             <h2 className="text-xl font-bold text-foreground">{t("verifiedTitle")}</h2>
             <div className="relative">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
               <input 
                 type="text" 
                 placeholder={t("searchDocs")} 
                 className="bg-white/[0.03] border border-white/[0.08] rounded-xl py-2 pl-9 pr-4 text-sm text-foreground focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all w-64"
               />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Document Card 1 */}
            <div className="bg-white/[0.02] border border-white/[0.06] hover:border-orange-500/30 backdrop-blur-md rounded-2xl p-5 transition-all group relative overflow-hidden">
               <div className="absolute top-3 right-3">
                 <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 bg-orange-500/10 text-orange-500 rounded-md border border-orange-500/20">
                   <ShieldCheck className="w-3 h-3" /> Verified
                 </span>
               </div>
               <div className="flex items-center gap-4 mb-4">
                 <div className="p-3 bg-blue-500/10 rounded-xl">
                   <FileText className="w-6 h-6 text-blue-400" />
                 </div>
                 <div>
                   <h4 className="font-bold text-foreground">{t("aadhaar")}</h4>
                   <p className="text-xs text-muted-foreground">XXXX XXXX 1234</p>
                 </div>
               </div>
               <div className="flex gap-2">
                 <button className="flex-1 flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] text-foreground text-xs font-bold py-2 rounded-lg transition-colors border border-white/[0.05]">
                   <Link2 className="w-3 h-3" /> Attach to Form
                 </button>
                 <button className="flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] text-foreground text-xs font-bold px-3 rounded-lg transition-colors border border-white/[0.05]" title="Share with AI">
                   <Share2 className="w-3 h-3" />
                 </button>
               </div>
            </div>

            {/* Document Card 2 */}
            <div className="bg-white/[0.02] border border-white/[0.06] hover:border-orange-500/30 backdrop-blur-md rounded-2xl p-5 transition-all group relative overflow-hidden">
               <div className="absolute top-3 right-3">
                 <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 bg-orange-500/10 text-orange-500 rounded-md border border-orange-500/20">
                   <ShieldCheck className="w-3 h-3" /> Verified
                 </span>
               </div>
               <div className="flex items-center gap-4 mb-4">
                 <div className="p-3 bg-orange-500/10 rounded-xl">
                   <FileText className="w-6 h-6 text-orange-500" />
                 </div>
                 <div>
                   <h4 className="font-bold text-foreground">{t("pan")}</h4>
                   <p className="text-xs text-muted-foreground">ABCDE1234F</p>
                 </div>
               </div>
               <div className="flex gap-2">
                 <button className="flex-1 flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] text-foreground text-xs font-bold py-2 rounded-lg transition-colors border border-white/[0.05]">
                   <Link2 className="w-3 h-3" /> Attach to Form
                 </button>
                 <button className="flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] text-foreground text-xs font-bold px-3 rounded-lg transition-colors border border-white/[0.05]" title="Share with AI">
                   <Share2 className="w-3 h-3" />
                 </button>
               </div>
            </div>

            {/* Document Card 3 */}
            <div className="bg-white/[0.02] border border-white/[0.06] hover:border-orange-500/30 backdrop-blur-md rounded-2xl p-5 transition-all group relative overflow-hidden">
               <div className="absolute top-3 right-3">
                 <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 bg-orange-500/10 text-orange-500 rounded-md border border-orange-500/20">
                   <ShieldCheck className="w-3 h-3" /> Verified
                 </span>
               </div>
               <div className="flex items-center gap-4 mb-4">
                 <div className="p-3 bg-purple-500/10 rounded-xl">
                   <FileText className="w-6 h-6 text-purple-400" />
                 </div>
                 <div>
                   <h4 className="font-bold text-foreground">{t("income")}</h4>
                   <p className="text-xs text-muted-foreground">{t("valid")}</p>
                 </div>
               </div>
               <div className="flex gap-2">
                 <button className="flex-1 flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] text-foreground text-xs font-bold py-2 rounded-lg transition-colors border border-white/[0.05]">
                   <Link2 className="w-3 h-3" /> Attach to Form
                 </button>
                 <button className="flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] text-foreground text-xs font-bold px-3 rounded-lg transition-colors border border-white/[0.05]" title="Share with AI">
                   <Share2 className="w-3 h-3" />
                 </button>
               </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}


