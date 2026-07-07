"use client"

import { useState } from "react"
import { useLanguage } from "@/components/providers/LanguageProvider"
import { t } from "@/lib/translations"
import { indiaStatesAndDistricts } from "@/lib/india-data"
import { 
  ChevronDown, 
  Search, 
  MapPin, 
  Calendar, 
  Clock,
  Shield, 
  Zap, 
  Droplet, 
  Landmark, 
  Laptop, 
  Wheat,
  Activity,
  Brain,
  CheckCircle2,
  X
} from "lucide-react"

export default function ReportIssue() {
  const { language } = useLanguage()
  const [complaintText, setComplaintText] = useState("")
  const [activeDepartment, setActiveDepartment] = useState("Police")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [selectedState, setSelectedState] = useState("Maharashtra")
  const [selectedDistrict, setSelectedDistrict] = useState("Pune")
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)

  const handleAIMatch = async () => {
    if (!complaintText.trim()) {
      alert("Please enter a complaint description first.")
      return
    }
    
    setIsAnalyzing(true)
    try {
      // Using Hugging Face zero-shot classification API
      const response = await fetch("https://api-inference.huggingface.co/models/facebook/bart-large-mnli", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: complaintText,
          parameters: {
            candidate_labels: ["Police", "Electricity", "Water", "Profilis", "General Gov", "IT & e-Gov", "Ration"]
          }
        })
      })
      
      if (!response.ok) {
        throw new Error("Failed to fetch from Hugging Face API")
      }
      
      const data = await response.json()
      if (data && data.labels && data.labels.length > 0) {
        setActiveDepartment(data.labels[0])
      }
    } catch (error) {
      console.error("Error matching department:", error)
      alert("AI matching failed. Please try again or select manually.")
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="flex flex-col h-full w-full mx-auto space-y-12 animate-in fade-in duration-700 pb-12">
      
      {/* Header Section */}
      {/* Header moved to TopBar */}
        
      {/* Profile Chip Removed as it is now in the top bar */}

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10">
        {/* Left Column */}
        <div className="p-10 bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl rounded-[2rem] shadow-xl relative overflow-hidden transition-all duration-500 hover:bg-white/[0.03] hover:border-orange-500/20">
          {/* Faint Parliament background placeholder */}
          <div className="absolute -bottom-20 -left-10 opacity-[0.03] pointer-events-none">
            <Landmark className="w-[400px] h-[400px]" />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-lg font-bold text-white mb-5 tracking-wide">{t(language, "Complaint Description")} </h3>
            <div className="mb-10">
              <textarea 
                value={complaintText}
                onChange={(e) => setComplaintText(e.target.value)}
                placeholder={t(language, "Type your complaint in detail here...")} 
                className="w-full h-40 bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 text-[15px] text-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#fb923c]/50 focus:border-transparent transition-all placeholder:text-zinc-600 resize-none hover:bg-white/[0.05]"
              />
            </div>

            <h3 className="text-lg font-bold text-white mb-5 tracking-wide">{t(language, "Target Department")} </h3>
            
            <div className="grid grid-cols-4 gap-4 mb-10">
              {/* Dept 1 */}
              <button 
                onClick={() => setActiveDepartment("Police")}
                className={`flex flex-col items-center justify-center py-5 px-2 rounded-2xl border transition-all hover:-translate-y-1 ${activeDepartment === "Police" ? "border-[#fb923c]/50 bg-[#fb923c]/10 text-[#fb923c] shadow-[0_0_20px_rgba(255,106,51,0.15)]" : "border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.04] text-zinc-400"}`}>
                <Shield className="h-7 w-7 mb-3 stroke-[1.5]" />
                <span className="text-[14px] font-semibold">{t(language, "Police")}</span>
                
              </button>
              
              {/* Dept 2 */}
              <button 
                onClick={() => setActiveDepartment("Electricity")}
                className={`flex flex-col items-center justify-center py-5 px-2 rounded-2xl border transition-all hover:-translate-y-1 ${activeDepartment === "Electricity" ? "border-[#fb923c]/50 bg-[#fb923c]/10 text-[#fb923c] shadow-[0_0_20px_rgba(255,106,51,0.15)]" : "border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.04] text-zinc-400"}`}>
                <Zap className="h-7 w-7 mb-3 stroke-[1.5]" />
                <span className="text-[14px] font-semibold">{t(language, "Electricity")}</span>
                
              </button>
              
              {/* Dept 3 */}
              <button 
                onClick={() => setActiveDepartment("Water")}
                className={`flex flex-col items-center justify-center py-5 px-2 rounded-2xl border transition-all hover:-translate-y-1 ${activeDepartment === "Water" ? "border-[#fb923c]/50 bg-[#fb923c]/10 text-[#fb923c] shadow-[0_0_20px_rgba(255,106,51,0.15)]" : "border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.04] text-zinc-400"}`}>
                <Droplet className="h-7 w-7 mb-3 stroke-[1.5]" />
                <span className="text-[14px] font-semibold">{t(language, "Water")}</span>
                
              </button>
              
              {/* Dept 4 */}
              <button 
                onClick={() => setActiveDepartment("Profilis")}
                className={`flex flex-col items-center justify-center py-5 px-2 rounded-2xl border transition-all hover:-translate-y-1 ${activeDepartment === "Profilis" ? "border-[#fb923c]/50 bg-[#fb923c]/10 text-[#fb923c] shadow-[0_0_20px_rgba(255,106,51,0.15)]" : "border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.04] text-zinc-400"}`}>
                <Activity className="h-7 w-7 mb-3 stroke-[1.5]" />
                <span className="text-[14px] font-semibold">Profilis</span>
                
              </button>
              
              {/* Dept 5 */}
              <button 
                onClick={() => setActiveDepartment("General Gov")}
                className={`flex flex-col items-center justify-center py-5 px-2 rounded-2xl border transition-all hover:-translate-y-1 ${activeDepartment === "General Gov" ? "border-[#fb923c]/50 bg-[#fb923c]/10 text-[#fb923c] shadow-[0_0_20px_rgba(255,106,51,0.15)]" : "border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.04] text-zinc-400"}`}>
                <Landmark className="h-7 w-7 mb-3 stroke-[1.5]" />
                <span className="text-[14px] font-semibold text-center leading-tight">{t(language, "General Gov")}</span>
                
              </button>
              
              {/* Dept 6 */}
              <button 
                onClick={() => setActiveDepartment("IT & e-Gov")}
                className={`flex flex-col items-center justify-center py-5 px-2 rounded-2xl border transition-all hover:-translate-y-1 ${activeDepartment === "IT & e-Gov" ? "border-[#fb923c]/50 bg-[#fb923c]/10 text-[#fb923c] shadow-[0_0_20px_rgba(255,106,51,0.15)]" : "border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.04] text-zinc-400"}`}>
                <Laptop className="h-7 w-7 mb-3 stroke-[1.5]" />
                <span className="text-[14px] font-semibold text-center leading-tight">{t(language, "IT & e-Gov")}</span>
                
              </button>
              
              {/* Dept 7 */}
              <button 
                onClick={() => setActiveDepartment("Ration")}
                className={`flex flex-col items-center justify-center py-5 px-2 rounded-2xl border transition-all hover:-translate-y-1 ${activeDepartment === "Ration" ? "border-[#fb923c]/50 bg-[#fb923c]/10 text-[#fb923c] shadow-[0_0_20px_rgba(255,106,51,0.15)]" : "border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.04] text-zinc-400"}`}>
                <Wheat className="h-7 w-7 mb-3 stroke-[1.5]" />
                <span className="text-[14px] font-semibold">{t(language, "Ration")}</span>
                
              </button>
              
              {/* AI Match Button */}
              <button 
                onClick={handleAIMatch}
                disabled={isAnalyzing}
                className="flex flex-col items-center justify-center py-5 px-2 rounded-2xl bg-[#fb923c]/20 border border-[#fb923c]/40 text-[#fb923c] hover:bg-[#fb923c]/30 transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(255,106,51,0.1)] disabled:opacity-50 disabled:cursor-not-allowed group">
                <span className="text-[14px] font-extrabold text-center mb-1 flex flex-col items-center gap-1">
                  Let AI Match 
                  <Brain className={`h-6 w-6 mt-1 ${isAnalyzing ? 'animate-pulse' : 'group-hover:scale-110 transition-transform'}`} />
                </span>
              </button>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-5 mt-10 tracking-wide">{t(language, "Incident Location")} </h3>
            <div className="grid grid-cols-2 gap-x-5 gap-y-6 mb-8">
              <div className="space-y-2">
                <label className="text-[13px] text-zinc-400 font-bold uppercase tracking-wider ml-1">State </label>
                <div className="relative">
                  <select 
                    value={selectedState}
                    onChange={(e) => {
                      setSelectedState(e.target.value)
                      setSelectedDistrict(indiaStatesAndDistricts[e.target.value]?.[0] || "")
                    }}
                    className="w-full appearance-none bg-white/[0.03] border border-white/[0.08] rounded-2xl py-4 pl-5 pr-10 text-[15px] font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#fb923c]/50 transition-all cursor-pointer hover:bg-white/[0.05]">
                    {Object.keys(indiaStatesAndDistricts).map((state) => (
                      <option key={state} value={state} className="bg-[#121212]">{state}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[13px] text-zinc-400 font-bold uppercase tracking-wider ml-1">District </label>
                <div className="relative">
                  <select 
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    className="w-full appearance-none bg-white/[0.03] border border-white/[0.08] rounded-2xl py-4 pl-5 pr-10 text-[15px] font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#fb923c]/50 transition-all cursor-pointer hover:bg-white/[0.05]">
                    {indiaStatesAndDistricts[selectedState]?.map((district) => (
                      <option key={district} value={district} className="bg-[#121212]">{district}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[13px] text-zinc-400 font-bold uppercase tracking-wider ml-1">City/Village </label>
                <div className="relative">
                  <input type="text" placeholder={t(language, "Enter City or Village")} className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl py-4 pl-5 pr-10 text-[15px] font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#fb923c]/50 transition-all placeholder:text-zinc-600 hover:bg-white/[0.05]" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[13px] text-zinc-400 font-bold uppercase tracking-wider ml-1">{t(language, "Precise Address or Landmark")} </label>
                <div className="relative">
                  <input type="text" placeholder={t(language, "Precise Address...")} className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl py-4 pl-5 pr-10 text-[15px] font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#fb923c]/50 transition-all placeholder:text-zinc-600 hover:bg-white/[0.05]" />
                  <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
                </div>
              </div>
            </div>

            <h3 className="text-lg font-bold text-white mb-5 mt-10 tracking-wide">{t(language, "Date & Time of Incident")} </h3>
            <div className="grid grid-cols-2 gap-5">
              <div className="relative">
                <input type="text" placeholder={t(language, "Date")} className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl py-4 pl-5 pr-10 text-[15px] font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#fb923c]/50 transition-all placeholder:text-zinc-600 hover:bg-white/[0.05]" />
                <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
              </div>
              <div className="relative">
                <input type="text" placeholder={t(language, "Time")} className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl py-4 pl-5 pr-10 text-[15px] font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#fb923c]/50 transition-all placeholder:text-zinc-600 hover:bg-white/[0.05]" />
                <Clock className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
              </div>
            </div>

          </div>
        </div>

        {/* Right Column */}
        <div className="p-10 bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl rounded-[2rem] shadow-xl relative overflow-hidden flex flex-col h-full transition-all duration-500 hover:bg-white/[0.03] hover:border-orange-500/20">
          
          <h3 className="text-lg font-bold text-white mb-6 tracking-wide">{t(language, "Supporting Information")} </h3>
          
          <div className="mb-8">
            <label className="text-[13px] text-zinc-400 font-bold uppercase tracking-wider mb-2 block ml-1">Complaint Category </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
              <input type="text" placeholder={t(language, "Public Utilities, Corruption, etc...")} className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl py-4 pl-12 pr-10 text-[15px] font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#fb923c]/50 transition-all placeholder:text-zinc-600 hover:bg-white/[0.05]" />
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500 pointer-events-none" />
            </div>
          </div>

          <div className="mb-8 p-6 rounded-[1.5rem] border border-[#fb923c]/30 bg-white/[0.01] relative transition-all hover:bg-white/[0.02]">
            <div className="absolute -top-3.5 left-5 bg-[#1a201c] px-3 rounded-full border border-[#fb923c]/30">
              <h4 className="text-[13px] font-bold text-white py-0.5">{t(language, "Attach Evidence")} </h4>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-5 mt-4">
              <button className="flex-1 min-w-[120px] py-3 px-4 bg-[#fb923c] rounded-xl text-[14px] font-bold text-zinc-900 hover:bg-[#f97316] transition-all hover:-translate-y-0.5 text-center shadow-lg shadow-[#fb923c]/20">
                <span className="block">{t(language, "Upload Photos")}</span>
                
              </button>
              <button className="flex-1 min-w-[120px] py-3 px-4 bg-transparent border-2 border-[#fb923c] rounded-xl text-[14px] font-bold text-[#fb923c] hover:bg-[#fb923c]/10 transition-all text-center">
                <span className="block">{t(language, "Upload Videos")}</span>
                
              </button>
              <button className="flex-1 min-w-[120px] py-3 px-4 bg-[#fb923c] rounded-xl text-[14px] font-bold text-zinc-900 hover:bg-[#f97316] transition-all hover:-translate-y-0.5 text-center shadow-lg shadow-[#fb923c]/20">
                <span className="block">{t(language, "Attach Documents")}</span>
                
              </button>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl py-3 px-4 mb-3">
              <span className="text-[14px] font-medium text-zinc-400">{t(language, "File(s) attached")} : <strong className="text-white">0</strong></span>
            </div>
            <p className="text-[13px] font-medium text-zinc-500 ml-1">{t(language, "Supported files")} : JPG, PNG, MP4, PDF (max 10MB)</p>
          </div>

          <div className="mb-8">
            <h4 className="text-[15px] font-bold text-white mb-4 tracking-wide">{t(language, "Contact Preferences")} </h4>
            <div className="grid grid-cols-2 gap-5 mb-5">
              <div className="space-y-2">
                <label className="text-[13px] text-zinc-400 font-bold uppercase tracking-wider ml-1">Name (detail) </label>
                <input type="text" defaultValue="+91495245776" className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl py-3.5 px-5 text-[15px] font-semibold text-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#fb923c]/50 transition-all hover:bg-white/[0.05]" />
              </div>
              <div className="space-y-2">
                <label className="text-[13px] text-zinc-400 font-bold uppercase tracking-wider ml-1">Email </label>
                <input type="email" defaultValue="example@email.com" className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl py-3.5 px-5 text-[15px] font-semibold text-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#fb923c]/50 transition-all hover:bg-white/[0.05]" />
              </div>
            </div>
            
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer group w-max">
                <div className="relative flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full border-2 border-[#fb923c] group-hover:border-[#f97316] transition-colors"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#fb923c] absolute"></div>
                </div>
                <span className="text-[15px] font-medium text-zinc-200">{t(language, "Receive updates via AI Assistant")} </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group w-max">
                <div className="relative flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full border-2 border-zinc-600 group-hover:border-zinc-400 transition-colors"></div>
                </div>
                <span className="text-[15px] font-medium text-zinc-400">{t(language, "Send progress updates via email")} </span>
              </label>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-white/[0.05]">
            <h4 className="text-[15px] font-bold text-white mb-4">{t(language, "Privacy Option")} </h4>
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="mt-0.5 w-5 h-5 rounded border-2 border-zinc-600 group-hover:border-zinc-400 transition-colors flex items-center justify-center shrink-0">
              </div>
              <span className="text-[15px] text-zinc-200 font-medium">
                {t(language, "Submit anonymously")}  <span className="text-zinc-500 font-normal ml-1 block mt-1">{t(language, "(Note: Anonymous complaints may have limited tracking)")}</span>
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-center items-center gap-5 pt-8">
        <button 
          onClick={() => setShowSuccessPopup(true)}
          className="py-4 px-10 bg-[#fb923c] hover:bg-[#5cd4a6] text-black font-extrabold text-[16px] rounded-2xl transition-all shadow-[0_0_30px_rgba(255,106,51,0.3)] hover:-translate-y-1">
          <span className="block">{t(language, "Submit Complaint")}</span>
          
        </button>
        <button className="py-4 px-10 bg-transparent border-2 border-white/[0.1] text-zinc-300 font-bold text-[16px] rounded-2xl hover:bg-white/[0.05] transition-all hover:border-white/[0.2]">
          <span className="block">{t(language, "Clear Form")}</span>
          
        </button>
      </div>

      {/* Success Popup Modal */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-[#1C1C1E] border border-white/[0.1] rounded-[2rem] p-8 max-w-sm w-full shadow-2xl relative animate-in zoom-in-95 fade-in duration-300 flex flex-col items-center text-center">
            <button 
              onClick={() => setShowSuccessPopup(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            
            <h3 className="text-2xl font-black text-white tracking-wide mb-2">{t(language, "Complaint Submitted")} </h3>
            <p className="text-sm font-medium text-zinc-400 mb-8">
              {t(language, "Your issue has been successfully reported...")}
              <br/><span className="block mt-2 text-zinc-400">{t(language, "Your issue has been successfully reported...")}</span>
            </p>
            
            <button 
              onClick={() => setShowSuccessPopup(false)}
              className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 text-zinc-950 font-extrabold text-sm rounded-xl transition-all shadow-[0_0_20px_rgba(255,87,34,0.2)]"
            >
              <span className="block">Back to Dashboard</span>
              
            </button>
          </div>
        </div>
      )}

    </div>
  )
}

