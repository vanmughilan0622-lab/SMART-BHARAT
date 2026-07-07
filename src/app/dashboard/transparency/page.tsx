"use client"

import { useLanguage } from "@/components/providers/LanguageProvider"
import { Map, BarChart3, TrendingUp, Clock, Activity, MapPin, CheckCircle2 } from "lucide-react"

const pageTranslations: Record<string, Record<string, string>> = {
  "English": {
    "title": "Community Transparency",
    "subtitle": "Bengaluru South District",
    "resolved": "Complaints Resolved",
    "active": "Active Infra Projects",
    "time": "Avg Resolution Time",
    "days": "Days",
    "heatmap": "Live Issue Heatmap",
    "potholes": "Potholes",
    "water": "Water",
    "lights": "Streetlights",
    "fixed": "Fixed Today",
    "jayanagar": "Jayanagar & Surrounding",
    "reports": "8 active pothole reports. Do not report duplicates.",
    "recent": "Recent Local Actions",
    "road": "Road Repair Completed",
    "bbmp": "12th Main Road pothole fixed by BBMP.",
    "hours": "2 hours ago",
    "pipe": "New Water Line Project",
    "phase": "Phase 1 started in JP Nagar 3rd Phase.",
    "yesterday": "Yesterday",
    "fund": "Fund Allocation",
    "cr": "₹1.2Cr allocated for local park redevelopment.",
    "daysAgo": "3 days ago",
    "viewAll": "View All Actions",
    "month": "+12% this month",
    "new": "4 new",
    "minus": "-2 days"
  },
  "Tamil": {
    "title": "சமூக வெளிப்படைத்தன்மை",
    "subtitle": "பெங்களூரு தெற்கு மாவட்டம்",
    "resolved": "தீர்க்கப்பட்ட புகார்கள்",
    "active": "செயலில் உள்ள கட்டமைப்பு திட்டங்கள்",
    "time": "சராசரி தீர்வு நேரம்",
    "days": "நாட்கள்",
    "heatmap": "நிகழ்நேர பிரச்சனை வரைபடம்",
    "potholes": "குழிகள்",
    "water": "தண்ணீர்",
    "lights": "தெருவிளக்குகள்",
    "fixed": "இன்று சரிசெய்யப்பட்டது",
    "jayanagar": "ஜெயநகர் மற்றும் சுற்றுப்புறம்",
    "reports": "8 செயலில் உள்ள குழி புகார்கள். நகல்களை புகாரளிக்க வேண்டாம்.",
    "recent": "சமீபத்திய உள்ளூர் நடவடிக்கைகள்",
    "road": "சாலை சீரமைப்பு முடிந்தது",
    "bbmp": "12வது பிரதான சாலை குழி BBMP ஆல் சரிசெய்யப்பட்டது.",
    "hours": "2 மணி நேரத்திற்கு முன்",
    "pipe": "புதிய குடிநீர் குழாய் திட்டம்",
    "phase": "ஜேபி நகர் 3வது கட்டத்தில் 1வது கட்டம் தொடங்கியது.",
    "yesterday": "நேற்று",
    "fund": "நிதி ஒதுக்கீடு",
    "cr": "உள்ளூர் பூங்கா மறுமேம்பாட்டிற்காக ₹1.2 கோடி ஒதுக்கீடு.",
    "daysAgo": "3 நாட்களுக்கு முன்",
    "viewAll": "அனைத்து நடவடிக்கைகளையும் காண்க",
    "month": "இந்த மாதம் +12%",
    "new": "புதிய 4",
    "minus": "-2 நாட்கள்"
  },
  "Hindi": {
    "title": "सामुदायिक पारदर्शिता",
    "subtitle": "बेंगलुरु दक्षिण जिला",
    "resolved": "हल की गई शिकायतें",
    "active": "सक्रिय इन्फ्रा प्रोजेक्ट्स",
    "time": "औसत समाधान समय",
    "days": "दिन",
    "heatmap": "लाइव इश्यू हीटमैप",
    "potholes": "गड्ढे",
    "water": "पानी",
    "lights": "स्ट्रीटलाइट्स",
    "fixed": "आज ठीक किया गया",
    "jayanagar": "जयनगर और आसपास",
    "reports": "8 सक्रिय गड्ढे की रिपोर्ट। डुप्लिकेट रिपोर्ट न करें।",
    "recent": "हाल की स्थानीय कार्रवाइयां",
    "road": "सड़क मरम्मत पूरी हुई",
    "bbmp": "बीबीएमपी द्वारा 12वीं मेन रोड का गड्ढा ठीक किया गया।",
    "hours": "2 घंटे पहले",
    "pipe": "नई जल लाइन परियोजना",
    "phase": "जेपी नगर तीसरे चरण में चरण 1 शुरू हुआ।",
    "yesterday": "कल",
    "fund": "निधि आवंटन",
    "cr": "स्थानीय पार्क पुनर्विकास के लिए ₹1.2 करोड़ आवंटित।",
    "daysAgo": "3 दिन पहले",
    "viewAll": "सभी कार्रवाइयां देखें",
    "month": "इस महीने +12%",
    "new": "4 नए",
    "minus": "-2 दिन"
  }
};

export default function TransparencyDashboardPage() {
  const { language } = useLanguage()
  const t = (key: string) => pageTranslations[language]?.[key] || pageTranslations["English"][key] || key

  return (
    <div className="w-full mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 className="w-8 h-8 text-orange-500" />
            <h1 className="text-3xl font-black tracking-tight text-foreground">{t("title")}</h1>
          </div>
          <p className="text-muted-foreground font-medium flex items-center gap-2">
            <MapPin className="w-4 h-4 text-orange-500" /> {t("subtitle")}
          </p>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/[0.02] border border-white/[0.06] hover:border-orange-500/30 backdrop-blur-md rounded-2xl p-6 transition-all group">
           <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-orange-500/10 rounded-xl group-hover:bg-orange-500/20 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-orange-500" />
              </div>
              <span className="text-xs font-bold text-orange-500 bg-orange-500/10 px-2 py-1 rounded-md border border-orange-500/20">{t("month")}</span>
           </div>
           <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{t("resolved")}</p>
           <h3 className="text-4xl font-black text-foreground mt-2">1,248</h3>
        </div>

        <div className="bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/30 backdrop-blur-md rounded-2xl p-6 transition-all group">
           <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                <Activity className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded-md border border-blue-500/20">{t("new")}</span>
           </div>
           <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{t("active")}</p>
           <h3 className="text-4xl font-black text-foreground mt-2">32</h3>
        </div>

        <div className="bg-white/[0.02] border border-white/[0.06] hover:border-orange-500/30 backdrop-blur-md rounded-2xl p-6 transition-all group">
           <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-orange-500/10 rounded-xl group-hover:bg-orange-500/20 transition-colors">
                <Clock className="w-6 h-6 text-orange-500" />
              </div>
              <span className="text-xs font-bold text-orange-500 bg-orange-500/10 px-2 py-1 rounded-md border border-orange-500/20">{t("minus")}</span>
           </div>
           <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{t("time")}</p>
           <h3 className="text-4xl font-black text-foreground mt-2">4.5<span className="text-xl text-muted-foreground ml-2">{t("days")}</span></h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Interactive Map Mockup */}
        <div className="lg:col-span-2 space-y-4">
           <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">{t("heatmap")}</h2>
              <div className="flex gap-2">
                 <button className="px-3 py-1.5 text-xs font-bold bg-orange-500 text-zinc-950 rounded-lg">{t("potholes")}</button>
                 <button className="px-3 py-1.5 text-xs font-bold bg-white/[0.05] hover:bg-white/[0.1] text-muted-foreground rounded-lg transition-colors">{t("water")}</button>
                 <button className="px-3 py-1.5 text-xs font-bold bg-white/[0.05] hover:bg-white/[0.1] text-muted-foreground rounded-lg transition-colors">{t("lights")}</button>
              </div>
           </div>
           
           <div className="w-full h-[400px] bg-zinc-950 border border-white/[0.06] rounded-3xl relative overflow-hidden flex items-center justify-center">
              {/* Fake Map Grid Background */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              
              <Map className="absolute opacity-5 text-white w-full h-full scale-150" />
              
              {/* Heatmap Nodes */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/20 rounded-full blur-2xl"></div>
              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,1)] border-2 border-zinc-950"></div>
              
              <div className="absolute top-1/2 left-2/3 w-24 h-24 bg-orange-500/20 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(255,87,34,1)] border-2 border-zinc-950"></div>
              
              <div className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 left-1/2 flex items-center justify-center gap-1 bg-orange-500/20 border border-orange-500/50 px-3 py-1.5 rounded-full backdrop-blur-md">
                 <CheckCircle2 className="w-3 h-3 text-orange-500" />
                 <span className="text-[10px] font-bold text-orange-500">{t("fixed")}</span>
              </div>
              
              {/* Overlay Label */}
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
                 <p className="text-xs font-bold text-foreground flex items-center gap-2"><MapPin className="w-3 h-3 text-orange-500" /> {t("jayanagar")}</p>
                 <p className="text-[10px] text-muted-foreground mt-0.5">{t("reports")}</p>
              </div>
           </div>
        </div>

        {/* Recent Local Actions */}
        <div className="lg:col-span-1 space-y-4">
           <h2 className="text-xl font-bold text-foreground">{t("recent")}</h2>
           
           <div className="space-y-4">
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                   <CheckCircle2 className="w-5 h-5 text-orange-500" />
                 </div>
                 <div>
                   <h4 className="text-sm font-bold text-foreground mb-1">{t("road")}</h4>
                   <p className="text-xs text-muted-foreground mb-2">{t("bbmp")}</p>
                   <span className="text-[10px] font-bold text-muted-foreground">{t("hours")}</span>
                 </div>
              </div>
              
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                   <Activity className="w-5 h-5 text-blue-400" />
                 </div>
                 <div>
                   <h4 className="text-sm font-bold text-foreground mb-1">{t("pipe")}</h4>
                   <p className="text-xs text-muted-foreground mb-2">{t("phase")}</p>
                   <span className="text-[10px] font-bold text-muted-foreground">{t("yesterday")}</span>
                 </div>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                   <TrendingUp className="w-5 h-5 text-orange-500" />
                 </div>
                 <div>
                   <h4 className="text-sm font-bold text-foreground mb-1">{t("fund")}</h4>
                   <p className="text-xs text-muted-foreground mb-2">{t("cr")}</p>
                   <span className="text-[10px] font-bold text-muted-foreground">{t("daysAgo")}</span>
                 </div>
              </div>
           </div>
           
           <button className="w-full py-3 bg-white/[0.03] hover:bg-white/[0.06] text-xs font-bold text-foreground rounded-xl transition-colors border border-white/[0.05]">
             {t("viewAll")}
           </button>
        </div>

      </div>
    </div>
  )
}
