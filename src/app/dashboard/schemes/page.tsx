"use client"

import { useState } from "react"
import { Search, ChevronDown, Check, Building2, User, ChevronRight } from "lucide-react"
import { useLanguage } from "@/components/providers/LanguageProvider"

const pageTranslations: Record<string, Record<string, string>> = {
  English: {
    title: "Personalized profile-driven",
    subtitle: "Your profile is 85% complete. These schemes are potentially a good fit.",
    location: "Location",
    sector: "Sector",
    keywords: "Key-words",
    search: "Search Schemes",
    results: "Results",
    compare: "Compare Selected",
    match: "Match:",
    apply: "Apply Now",
    details: "View Details",
    filter: "Filter",
    state: "State",
    eligibility: "Eligibility"
  },
  Hindi: {
    title: "व्यक्तिगत प्रोफ़ाइल-संचालित",
    subtitle: "आपकी प्रोफ़ाइल 85% पूर्ण है। ये योजनाएं आपके लिए उपयुक्त हो सकती हैं।",
    location: "स्थान",
    sector: "क्षेत्र",
    keywords: "मुख्य शब्द",
    search: "योजनाएं खोजें",
    results: "परिणाम",
    compare: "चयनित की तुलना करें",
    match: "मिलान:",
    apply: "अभी आवेदन करें",
    details: "विवरण देखें",
    filter: "फ़िल्टर",
    state: "राज्य",
    eligibility: "पात्रता"
  },
  Tamil: {
    title: "தனிப்பயனாக்கப்பட்ட சுயவிவரம்",
    subtitle: "உங்கள் சுயவிவரம் 85% முடிந்தது. இந்த திட்டங்கள் உங்களுக்கு பொருத்தமாக இருக்கலாம்.",
    location: "இடம்",
    sector: "துறை",
    keywords: "முக்கிய வார்த்தைகள்",
    search: "திட்டங்களை தேடு",
    results: "முடிவுகள்",
    compare: "தேர்ந்தெடுத்ததை ஒப்பிடு",
    match: "பொருத்தம்:",
    apply: "விண்ணப்பிக்கவும்",
    details: "விவரங்களை பார்",
    filter: "வடிகட்டி",
    state: "மாநிலம்",
    eligibility: "தகுதி"
  }
}

const MOCK_SCHEMES = [
  {
    id: "1",
    name: "PM-Kisan Samman Nidhi (PM-KISAN)",
    description: "Direct income support of ₹6,000 per year to all landholding farmer families, provided in three equal installments to help with agricultural expenses.",
    match: 98,
    sector: "Agriculture",
  },
  {
    id: "2",
    name: "Ayushman Bharat (PM-JAY)",
    description: "World's largest health insurance scheme providing a cover of up to ₹5 lakhs per family per year for secondary and tertiary care hospitalization.",
    match: 95,
    sector: "Healthcare",
  },
  {
    id: "3",
    name: "PM SVANidhi",
    description: "A special micro-credit facility providing affordable working capital loans of up to ₹10,000 to street vendors to resume their livelihoods.",
    match: 88,
    sector: "Business & Entrepreneurship",
  },
  {
    id: "4",
    name: "Pradhan Mantri Awas Yojana (PMAY)",
    description: "Financial assistance and subsidized interest rates on home loans for constructing affordable housing for the urban and rural poor.",
    match: 85,
    sector: "Housing & Infrastructure",
  },
  {
    id: "5",
    name: "Sukanya Samriddhi Yojana (SSY)",
    description: "A government-backed small deposit scheme for the girl child to encourage parents to build a fund for their female child's future education and marriage.",
    match: 82,
    sector: "Women & Child Development",
  },
  {
    id: "6",
    name: "Stand-Up India Scheme",
    description: "Facilitates bank loans between ₹10 lakh and ₹1 Crore to at least one SC/ST borrower and at least one woman borrower for setting up a greenfield enterprise.",
    match: 75,
    sector: "Business & Entrepreneurship",
  },
]

export default function SchemeFinderPage() {
  const { language } = useLanguage()
  const t = (key: string) => pageTranslations[language]?.[key] || pageTranslations["English"][key]

  const [keywords, setKeywords] = useState(["startup", "education loan"])
  const [keywordInput, setKeywordInput] = useState("")
  const [hasSearched, setHasSearched] = useState(false)
  const [selectedState, setSelectedState] = useState("")
  const [stateError, setStateError] = useState(false)

  const handleSearchClick = () => {
    if (!selectedState || selectedState === "e.g. State/District") {
      setStateError(true)
      setHasSearched(false)
    } else {
      setStateError(false)
      setHasSearched(true)
    }
  }

  const handleKeywordKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && keywordInput.trim()) {
      e.preventDefault()
      if (!keywords.includes(keywordInput.trim())) {
        setKeywords([...keywords, keywordInput.trim()])
      }
      setKeywordInput("")
    }
  }

  const removeKeyword = (kw: string) => {
    setKeywords(keywords.filter(k => k !== kw))
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Compact Search & Filter Section */}
      <div className="bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl rounded-[2rem] p-8 shadow-xl mt-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="mb-8 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight">{t("title")}</h2>
            <p className="text-[14px] font-medium text-orange-500/90 mt-2">{t("subtitle")}</p>
          </div>
          
          <button 
            onClick={handleSearchClick}
            className="bg-orange-500 hover:bg-orange-600 text-zinc-950 font-extrabold px-10 py-3.5 rounded-xl transition-all text-[14px] shadow-[0_0_20px_rgba(255,87,34,0.15)] hover:shadow-[0_0_30px_rgba(255,87,34,0.3)] relative z-10 whitespace-nowrap">
            {t("search")}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          <div className="space-y-2">
            <label className={`text-[11px] font-bold uppercase tracking-wider flex justify-between ${stateError ? "text-red-400" : "text-zinc-400"}`}>
              <span>{t("location")} <span className="text-red-400">*</span></span>
              {stateError && <span className="text-red-400">Required</span>}
            </label>
            <div className="relative group">
              <select 
                value={selectedState} 
                onChange={(e) => { setSelectedState(e.target.value); setStateError(false); }}
                className={`w-full appearance-none rounded-xl border ${stateError ? "border-red-500/50 ring-1 ring-red-500/50" : "border-white/[0.08]"} bg-white/[0.03] px-4 py-3 text-[13px] font-semibold text-white focus:outline-none focus:ring-1 focus:ring-orange-500/50 cursor-pointer transition-all hover:bg-white/[0.05]`}>
                <option className="bg-zinc-950">e.g. State/District</option>
                <option className="bg-zinc-950">Andhra Pradesh</option>
                <option className="bg-zinc-950">Bihar</option>
                <option className="bg-zinc-950">Delhi</option>
                <option className="bg-zinc-950">Gujarat</option>
                <option className="bg-zinc-950">Karnataka</option>
                <option className="bg-zinc-950">Kerala</option>
                <option className="bg-zinc-950">Maharashtra</option>
                <option className="bg-zinc-950">Punjab</option>
                <option className="bg-zinc-950">Rajasthan</option>
                <option className="bg-zinc-950">Tamil Nadu</option>
                <option className="bg-zinc-950">Uttar Pradesh</option>
                <option className="bg-zinc-950">West Bengal</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 pointer-events-none group-hover:text-orange-500 transition-colors" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">{t("sector")} <span className="text-red-400">*</span></label>
            <div className="relative group">
              <select className="w-full appearance-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-[13px] font-semibold text-white focus:outline-none focus:ring-1 focus:ring-orange-500/50 cursor-pointer transition-all hover:bg-white/[0.05]">
                <option className="bg-zinc-950">Select Sector...</option>
                <option className="bg-zinc-950">Agriculture</option>
                <option className="bg-zinc-950">Business & Entrepreneurship</option>
                <option className="bg-zinc-950">Education & Skill Development</option>
                <option className="bg-zinc-950">Healthcare & Wellness</option>
                <option className="bg-zinc-950">Housing & Infrastructure</option>
                <option className="bg-zinc-950">Social Welfare</option>
                <option className="bg-zinc-950">Technology & Innovation</option>
                <option className="bg-zinc-950">Women & Child Development</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 pointer-events-none group-hover:text-orange-500 transition-colors" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">{t("eligibility")}</label>
            <div className="relative group">
              <select className="w-full appearance-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-[13px] font-semibold text-white focus:outline-none focus:ring-1 focus:ring-orange-500/50 cursor-pointer transition-all hover:bg-white/[0.05]">
                <option className="bg-zinc-950">All Eligibility</option>
                <option className="bg-zinc-950">Below Poverty Line (BPL)</option>
                <option className="bg-zinc-950">Student</option>
                <option className="bg-zinc-950">Farmer</option>
                <option className="bg-zinc-950">Senior Citizen</option>
                <option className="bg-zinc-950">Women</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 pointer-events-none group-hover:text-orange-500 transition-colors" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">{t("keywords")}</label>
            <div className="flex flex-wrap items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2 min-h-[46px] transition-all hover:bg-white/[0.05] focus-within:ring-1 focus-within:ring-orange-500/50 focus-within:bg-white/[0.05]">
              {keywords.map(kw => (
                <span key={kw} className="bg-white/[0.08] border border-white/[0.1] text-white text-[11px] font-semibold px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                  {kw}
                  <button onClick={() => removeKeyword(kw)} className="hover:text-red-400 focus:outline-none transition-colors">&times;</button>
                </span>
              ))}
              <input 
                type="text" 
                value={keywordInput}
                onChange={e => setKeywordInput(e.target.value)}
                onKeyDown={handleKeywordKeyDown}
                className="bg-transparent border-none focus:outline-none text-[12px] font-semibold text-white flex-1 min-w-[80px] placeholder:text-zinc-600"
                placeholder={keywords.length === 0 ? "Add keyword..." : ""}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {hasSearched && (
        <div className="space-y-8 mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center justify-between mb-2">
             <h2 className="text-3xl font-black text-white tracking-tight">{t("results")}</h2>
          </div>
          
          {/* Expanded Grid (since sidebar is gone) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_SCHEMES.map(scheme => (
              <div key={scheme.id} className="bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl rounded-[2rem] p-8 hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(255,87,34,0.15)] hover:border-orange-500/30 hover:bg-white/[0.04] transition-all duration-500 flex flex-col group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 transition-opacity group-hover:opacity-100 opacity-0"></div>
                
                <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-orange-500 transition-colors line-clamp-1 relative z-10">{scheme.name}</h3>
                <p className="text-[14px] font-medium text-zinc-400 mb-8 line-clamp-3 leading-relaxed flex-1 relative z-10">{scheme.description}</p>
                
                <div className="space-y-4 mb-8 relative z-10 bg-white/[0.02] rounded-2xl p-5 border border-white/[0.03]">
                  <div className="flex items-center text-[13px] font-bold justify-between">
                    <span className="text-zinc-500 uppercase tracking-wider text-[11px]">{t("match")}</span>
                    <span className="text-orange-500 bg-orange-500/10 px-3 py-1 rounded-lg border border-orange-500/20">{scheme.match}%</span>
                  </div>
                  <div className="flex items-center text-[13px] font-bold justify-between">
                    <span className="text-zinc-500 uppercase tracking-wider text-[11px]">{t("sector")}</span>
                    <span className="text-white truncate max-w-[140px] text-right">{scheme.sector}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-auto relative z-10">
                  <button className="flex-1 bg-orange-500 hover:bg-orange-500 text-zinc-950 text-[13px] font-extrabold py-2.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,87,34,0.2)]">
                    {t("apply")}
                  </button>
                  <button className="flex-1 border border-white/[0.1] hover:border-orange-500/50 hover:bg-orange-500/10 text-white text-[13px] font-bold py-2.5 rounded-xl transition-all">
                    {t("details")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
