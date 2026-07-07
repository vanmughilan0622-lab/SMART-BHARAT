"use client"

import { useLanguage } from "@/components/providers/LanguageProvider"
import { FileText, Bot, AlertTriangle, Building, Zap } from "lucide-react"

const pageTranslations: Record<string, Record<string, string>> = {
  English: {
    title: "Resolution & Tracking Center",
    subtitle: "A unified timeline of all your scheme applications, service requests, and civic complaints.",
    officialStatus: "Official Status:",
    aiSummary: "AI Summary",
    uploadDoc: "Upload Document",
    // Item types
    schemeApp: "Scheme Application",
    civicComplaint: "Civic Complaint",
    serviceRequest: "Service Request",
    // Statuses
    approved: "Approved",
    inProgress: "In Progress",
    actionRequired: "Action Required",
    // Item titles
    pmKisan: "PM-Kisan Samman Nidhi",
    pothole: "Large Pothole on 12th Main Road",
    dlRenewal: "Driving License Renewal",
    // Official statuses
    pmKisanOfficialStatus: "Beneficiary details verified. File forwarded to central node for DBT processing under batch #49281.",
    potholeOfficialStatus: "Assigned to Ward 45 engineering division. Tender pending for asphalt allocation.",
    dlOfficialStatus: "Application held in abeyance. Medical certificate format invalid as per CMVR 1989 Form 1A.",
    // AI summaries
    pmKisanAiSummary: "Your application is approved! The funds will be transferred directly to your linked bank account shortly.",
    potholeAiSummary: "BBMP engineers are preparing to fix the pothole. They are currently waiting for the repair materials to be dispatched.",
    dlAiSummary: "Your application is paused because the medical certificate uploaded is in the wrong format. Please upload a new certificate using 'Form 1A'.",
  },
  Tamil: {
    title: "தீர்வு மற்றும் கண்காணிப்பு மையம்",
    subtitle: "உங்கள் அனைத்து திட்ட விண்ணப்பங்கள், சேவை கோரிக்கைகள் மற்றும் குடிமக்கள் புகார்களின் ஒருங்கிணைந்த காலவரிசை.",
    officialStatus: "அதிகாரப்பூர்வ நிலை:",
    aiSummary: "AI சுருக்கம்",
    uploadDoc: "ஆவணத்தை பதிவேற்றவும்",
    schemeApp: "திட்ட விண்ணப்பம்",
    civicComplaint: "குடிமக்கள் புகார்",
    serviceRequest: "சேவை கோரிக்கை",
    approved: "அங்கீகரிக்கப்பட்டது",
    inProgress: "செயல்பாட்டில் உள்ளது",
    actionRequired: "நடவடிக்கை தேவை",
    pmKisan: "பிஎம்-கிசான் சம்மான் நிதி",
    pothole: "12வது பிரதான சாலையில் பெரிய குழி",
    dlRenewal: "ஓட்டுநர் உரிமம் புதுப்பித்தல்",
    pmKisanOfficialStatus: "பயனாளி விவரங்கள் சரிபார்க்கப்பட்டன. தொகுதி #49281 இல் DBT செயலாக்கத்திற்காக மத்திய முனைக்கு கோப்பு அனுப்பப்பட்டது.",
    potholeOfficialStatus: "வார்டு 45 பொறியியல் பிரிவிற்கு ஒதுக்கப்பட்டது. ஆஸ்பால்ட் ஒதுக்கீட்டிற்காக டெண்டர் நிலுவையில் உள்ளது.",
    dlOfficialStatus: "விண்ணப்பம் நிலுவையில் வைக்கப்பட்டுள்ளது. CMVR 1989 படிவம் 1A படி மருத்துவ சான்றிதழ் வடிவம் செல்லாது.",
    pmKisanAiSummary: "உங்கள் விண்ணப்பம் அங்கீகரிக்கப்பட்டது! நிதிகள் விரைவில் உங்கள் இணைக்கப்பட்ட வங்கி கணக்கிற்கு நேரடியாக மாற்றப்படும்.",
    potholeAiSummary: "BBMP பொறியாளர்கள் குழியை சரிசெய்ய தயார் செய்கிறார்கள். அவர்கள் தற்போது பழுதுபார்க்கும் பொருட்கள் அனுப்பப்படுவதற்காக காத்திருக்கிறார்கள்.",
    dlAiSummary: "பதிவேற்றப்பட்ட மருத்துவ சான்றிதழ் தவறான வடிவத்தில் உள்ளதால் உங்கள் விண்ணப்பம் இடைநிறுத்தப்பட்டுள்ளது. 'படிவம் 1A' ஐப் பயன்படுத்தி புதிய சான்றிதழை பதிவேற்றவும்.",
  },
  Hindi: {
    title: "समाधान और ट्रैकिंग केंद्र",
    subtitle: "आपके सभी योजना आवेदनों, सेवा अनुरोधों और नागरिक शिकायतों की एक एकीकृत समयरेखा।",
    officialStatus: "आधिकारिक स्थिति:",
    aiSummary: "AI सारांश",
    uploadDoc: "दस्तावेज़ अपलोड करें",
    schemeApp: "योजना आवेदन",
    civicComplaint: "नागरिक शिकायत",
    serviceRequest: "सेवा अनुरोध",
    approved: "स्वीकृत",
    inProgress: "प्रगति में",
    actionRequired: "कार्रवाई आवश्यक",
    pmKisan: "पीएम-किसान सम्मान निधि",
    pothole: "12वीं मेन रोड पर बड़ा गड्ढा",
    dlRenewal: "ड्राइविंग लाइसेंस नवीनीकरण",
    pmKisanOfficialStatus: "लाभार्थी विवरण सत्यापित। बैच #49281 के तहत DBT प्रसंस्करण के लिए केंद्रीय नोड पर फ़ाइल अग्रेषित की गई।",
    potholeOfficialStatus: "वार्ड 45 इंजीनियरिंग डिवीजन को सौंपा गया। डामर आवंटन के लिए टेंडर लंबित।",
    dlOfficialStatus: "आवेदन अनिर्णीत रखा गया। CMVR 1989 फॉर्म 1A के अनुसार मेडिकल सर्टिफिकेट फॉर्मेट अमान्य।",
    pmKisanAiSummary: "आपका आवेदन स्वीकृत हो गया है! जल्द ही धनराशि सीधे आपके लिंक किए गए बैंक खाते में स्थानांतरित की जाएगी।",
    potholeAiSummary: "BBMP इंजीनियर गड्ढे को ठीक करने की तैयारी कर रहे हैं। वे वर्तमान में मरम्मत सामग्री भेजे जाने का इंतजार कर रहे हैं।",
    dlAiSummary: "आपका आवेदन रुका हुआ है क्योंकि अपलोड किया गया मेडिकल सर्टिफिकेट गलत फॉर्मेट में है। कृपया 'फॉर्म 1A' का उपयोग करके नया सर्टिफिकेट अपलोड करें।",
  }
}

type TrackingItem = {
  id: string
  typeKey: string
  titleKey: string
  date: string
  statusKey: string
  officialStatusKey: string
  aiSummaryKey: string
  icon: typeof FileText
  color: string
}

const TRACKING_DATA: TrackingItem[] = [
  {
    id: "APP-KISSN-902",
    typeKey: "schemeApp",
    titleKey: "pmKisan",
    date: "Oct 15, 2023",
    statusKey: "approved",
    officialStatusKey: "pmKisanOfficialStatus",
    aiSummaryKey: "pmKisanAiSummary",
    icon: Building,
    color: "orange"
  },
  {
    id: "COMP-29381",
    typeKey: "civicComplaint",
    titleKey: "pothole",
    date: "Oct 12, 2023",
    statusKey: "inProgress",
    officialStatusKey: "potholeOfficialStatus",
    aiSummaryKey: "potholeAiSummary",
    icon: AlertTriangle,
    color: "blue"
  },
  {
    id: "SVC-DL-441",
    typeKey: "serviceRequest",
    titleKey: "dlRenewal",
    date: "Oct 10, 2023",
    statusKey: "actionRequired",
    officialStatusKey: "dlOfficialStatus",
    aiSummaryKey: "dlAiSummary",
    icon: FileText,
    color: "orange"
  }
]

export default function TrackingCenterPage() {
  const { language } = useLanguage()
  const t = (key: string) => pageTranslations[language]?.[key] || pageTranslations["English"][key] || key

  return (
    <div className="w-full mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
        <div>
          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 bg-orange-500/10 rounded-2xl border border-orange-500/20 shadow-[0_0_30px_rgba(255,87,34,0.15)]">
              <Zap className="w-8 h-8 text-orange-500" />
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white">{t("title")}</h1>
          </div>
          <p className="text-[16px] text-zinc-400 font-medium">
            {t("subtitle")}
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {TRACKING_DATA.map((item) => {
          const Icon = item.icon
          const colorClass = item.color === 'orange' ? 'text-orange-500 bg-orange-500/10 border-orange-500/20 shadow-[0_0_20px_rgba(255,87,34,0.1)]' :
                             item.color === 'blue' ? 'text-blue-400 bg-blue-500/10 border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]' :
                             'text-orange-500 bg-orange-500/10 border-orange-500/20 shadow-[0_0_20px_rgba(255,87,34,0.1)]'
          const badgeClass = item.color === 'orange' ? 'bg-orange-500/10 text-orange-500 border border-orange-500/20' :
                             item.color === 'blue' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                             'bg-orange-500/10 text-orange-500 border border-orange-500/20'
          
          return (
            <div key={item.id} className="bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl rounded-[2rem] p-8 shadow-xl transition-all duration-500 hover:bg-white/[0.03] hover:-translate-y-1 hover:border-orange-500/20 group relative overflow-hidden">
              
              <div className="flex flex-col md:flex-row gap-8">
                 {/* Left side: Basic Info */}
                 <div className="flex-[1.5] space-y-6">
                    <div className="flex items-start gap-5">
                       <div className={`p-4 rounded-2xl border ${colorClass}`}>
                         <Icon className="w-7 h-7" />
                       </div>
                       <div className="pt-1">
                          <div className="flex items-center gap-4 mb-2">
                             <h3 className="text-xl font-bold text-white tracking-wide">{t(item.titleKey)}</h3>
                             <span className={`text-[11px] font-extrabold px-3 py-1.5 rounded-lg uppercase tracking-wider ${badgeClass}`}>
                               {t(item.statusKey)}
                             </span>
                          </div>
                          <div className="flex items-center gap-3 text-[14px] font-semibold text-zinc-500 mt-1">
                             <span>{t(item.typeKey)}</span>
                             <span className="w-1.5 h-1.5 rounded-full bg-white/[0.2]"></span>
                             <span className="text-zinc-400">{item.id}</span>
                             <span className="w-1.5 h-1.5 rounded-full bg-white/[0.2]"></span>
                             <span>{item.date}</span>
                          </div>
                       </div>
                    </div>
                    
                    <div className="pl-[4.5rem]">
                       <p className="text-[14px] font-medium text-zinc-400 italic border-l-2 border-white/[0.1] pl-5 py-2">
                         <span className="font-bold text-white/50 not-italic mr-2 uppercase tracking-wider text-[12px]">{t("officialStatus")} </span> 
                         {t(item.officialStatusKey)}
                       </p>
                    </div>
                 </div>

                 {/* Right side: AI Summary Widget */}
                 <div className="flex-1 bg-[#121212] border border-[#fb923c]/20 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-center shadow-inner group-hover:border-[#fb923c]/40 transition-colors">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
                    
                    <div className="flex items-center gap-3 mb-4 relative z-10">
                       <Bot className="w-5 h-5 text-orange-500" />
                       <span className="text-[12px] font-extrabold uppercase tracking-widest text-orange-500">{t("aiSummary")}</span>
                    </div>
                    <p className="text-[15px] font-medium text-zinc-200 relative z-10 leading-relaxed">
                       {t(item.aiSummaryKey)}
                    </p>
                    
                    {item.statusKey === 'actionRequired' && (
                       <button className="mt-5 bg-orange-500 hover:bg-orange-500 text-zinc-950 text-[14px] font-extrabold py-3 px-6 rounded-xl transition-all hover:-translate-y-0.5 shadow-[0_0_20px_rgba(255,87,34,0.3)] self-start relative z-10">
                          {t("uploadDoc")}
                       </button>
                    )}
                 </div>
              </div>

            </div>
          )
        })}
      </div>
    </div>
  )
}
