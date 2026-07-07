"use client"

import { Mail, Phone, MapPin, ShieldCheck, ShieldAlert } from "lucide-react"
import { useLanguage } from "@/components/providers/LanguageProvider"
import { DemographicsEditor } from "@/components/profile/DemographicsEditor"
import { DataPrivacySettings } from "@/components/profile/DataPrivacySettings"

const pageTranslations: Record<string, Record<string, string>> = {
  English: {
    authenticated: "Authenticated",
    guestMode: "Guest Mode",
    notProvided: "Not Provided",
    profileCompletion: "Profile Completion"
  },
  Tamil: {
    authenticated: "அங்கீகரிக்கப்பட்டது",
    guestMode: "விருந்தினர் பயன்முறை",
    notProvided: "வழங்கப்படவில்லை",
    profileCompletion: "சுயவிவர நிறைவு"
  },
  Hindi: {
    authenticated: "प्रमाणित",
    guestMode: "अतिथि मोड",
    notProvided: "प्रदान नहीं किया गया",
    profileCompletion: "प्रोफ़ाइल पूर्णता"
  }
}

export function ProfileContent({ 
  isGuest, 
  name, 
  email, 
  image 
}: { 
  isGuest: boolean, 
  name: string, 
  email: string, 
  image: string 
}) {
  const { language } = useLanguage()
  const t = (key: string) => pageTranslations[language]?.[key] || pageTranslations["English"][key] || key

  return (
    <div className="w-full mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
      
      {/* Header */}
      <div className="bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl rounded-[2rem] p-10 shadow-xl flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-orange-500/10 to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 w-36 h-36 rounded-full bg-zinc-950 border-[6px] border-zinc-950 shadow-[0_0_30px_rgba(255,87,34,0.2)] flex items-center justify-center overflow-hidden transition-transform hover:scale-105 duration-500">
           <img src={image} alt="Profile" className="w-full h-full object-cover bg-white" />
        </div>
        
        <div className="relative z-10 flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-3">
            <h2 className="text-3xl font-black text-white tracking-wide">{name}</h2>
            {!isGuest ? (
              <>
                <ShieldCheck className="w-7 h-7 text-orange-500" />
                <span className="text-[11px] font-extrabold px-3 py-1.5 bg-orange-500/10 text-orange-500 rounded-lg border border-orange-500/20 uppercase tracking-wider">{t("authenticated")}</span>
              </>
            ) : (
              <>
                <ShieldAlert className="w-7 h-7 text-zinc-500" />
                <span className="text-[11px] font-extrabold px-3 py-1.5 bg-white/[0.05] text-zinc-400 rounded-lg border border-white/[0.1] uppercase tracking-wider">{t("guestMode")}</span>
              </>
            )}
          </div>
          <p className="text-zinc-400 font-medium flex flex-wrap items-center justify-center md:justify-start gap-5 mt-3 text-[15px]">
            <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-zinc-500" /> {email}</span>
            {!isGuest && <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-zinc-500" /> {t("notProvided")}</span>}
            {!isGuest && <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-zinc-500" /> {t("notProvided")}</span>}
          </p>
        </div>
        
        <div className="relative z-10 bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 px-8 flex flex-col items-center">
          <span className="text-[11px] font-extrabold text-zinc-500 uppercase tracking-wider mb-2">{t("profileCompletion")}</span>
          <div className="text-4xl font-black text-orange-500 drop-shadow-[0_0_15px_rgba(255,87,34,0.3)]">{isGuest ? "10%" : "30%"}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Left Column - Demographics */}
        <div className="space-y-10">
          <DemographicsEditor isGuest={isGuest} />
        </div>

        {/* Right Column - Data Privacy */}
        <div className="space-y-10">
          <DataPrivacySettings />
        </div>

      </div>
    </div>
  )
}
