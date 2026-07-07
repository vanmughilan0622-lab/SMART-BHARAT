"use client"

import Link from "next/link"
import { Tractor, Flame, Building2, MapPin, CheckCircle2, ChevronRight, ChevronDown, FileText, AlertTriangle, AlertCircle, FileDigit, Landmark, Zap, CloudRain, CreditCard, Stethoscope, Car, Megaphone } from "lucide-react"
import { useLanguage } from "@/components/providers/LanguageProvider"
import { t } from "@/lib/translations"

export default function DashboardPage() {
  const { language } = useLanguage()
  
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 h-full pb-10">
      <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-min gap-6 w-full">
        
        {/* COLUMN 1: RECOMMENDED SCHEMES */}
        <div className="md:col-span-6 flex flex-col gap-6">
          <div className="neo-card p-6 flex flex-col relative overflow-hidden">
             {/* Title */}
             <div className="mb-6">
               <h2 className="text-orange-500 font-serif font-black text-xl uppercase tracking-widest">{t(language, "RECOMMENDED SCHEMES")}</h2>
               <p className="text-zinc-500 text-[15px] font-bold uppercase tracking-wider">{t(language, "PERSONALIZED CIVIC BENEFITS")}</p>
             </div>
             
             {/* Schemes */}
             <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
               {/* PM-KISAN */}
               <Link href="/dashboard/schemes" className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-4 min-w-[200px] hover:border-orange-500/50 hover:bg-orange-500/5 transition-all cursor-pointer group block">
                 <div className="flex items-center gap-3 mb-3">
                   <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                     <Tractor className="w-5 h-5 text-orange-500" />
                   </div>
                   <div>
                     <h3 className="text-white font-bold text-[15px] tracking-wide">PM-KISAN</h3>
                     <p className="text-orange-500 text-[15px] font-bold">{t(language, "95% Match")}</p>
                   </div>
                 </div>
                 <p className="text-zinc-400 text-[15px] leading-relaxed line-clamp-3">{t(language, "Localized tractors and scheme for PM-KISAN.")}</p>
               </Link>
               
               {/* PM-UJJWALA */}
               <Link href="/dashboard/schemes" className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-4 min-w-[200px] hover:border-orange-500/50 hover:bg-orange-500/5 transition-all cursor-pointer group block">
                 <div className="flex items-center gap-3 mb-3">
                   <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                     <Flame className="w-5 h-5 text-orange-500" />
                   </div>
                   <div>
                     <h3 className="text-white font-bold text-[15px] tracking-wide">PM-UJJWALA</h3>
                     <p className="text-orange-500 text-[15px] font-bold">{t(language, "95% Match")}</p>
                   </div>
                 </div>
                 <p className="text-zinc-400 text-[15px] leading-relaxed line-clamp-3">{t(language, "Affordable Housing and scheme to community health in India.")}</p>
               </Link>
             </div>
             
             {/* STAND UP INDIA */}
             <Link href="/dashboard/schemes" className="mt-2 bg-white/[0.03] border border-white/[0.08] rounded-2xl p-4 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all cursor-pointer group block">
                <div className="flex items-center gap-3 mb-3">
                   <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden border border-white/[0.08]">
                     {/* Mock Logo */}
                     <span className="text-orange-500 font-black text-[10px] text-center leading-tight">STAND UP<br/>INDIA</span>
                   </div>
                   <div>
                     <h3 className="text-white font-bold text-[15px] tracking-wide">STAND UP INDIA</h3>
                     <p className="text-orange-500 text-[15px] font-bold">{t(language, "75% Match")}</p>
                   </div>
                 </div>
                 <p className="text-zinc-400 text-[15px] leading-relaxed">{t(language, "Stand Up Housing scheme, scheme, and unknown government to send.")}</p>
             </Link>
          </div>
          
          <div className="neo-card p-6 flex flex-col relative overflow-hidden">
             <div className="flex items-center justify-between mb-4">
               <h2 className="text-white font-bold text-lg">{t(language, "Digital Identity")}</h2>
               <div className="bg-white/[0.05] border border-white/[0.1] px-2 py-0.5 rounded text-[10px] text-zinc-400 uppercase font-bold tracking-wider">{t(language, "Status")}</div>
             </div>
             
             <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
               {/* Aadhaar mock */}
               <div className="flex flex-col items-center gap-2 min-w-[70px]">
                 <div className="w-16 h-12 rounded bg-white flex items-center justify-center shadow-lg">
                   <div className="w-8 h-8 rounded-full border-2 border-red-500 flex items-center justify-center opacity-50">
                     <span className="text-red-500 text-[8px] font-black">AADHAAR</span>
                   </div>
                 </div>
                 <span className="text-[10px] text-zinc-300 font-medium">{t(language, "Aadhaar")}</span>
               </div>
               {/* PAN mock */}
               <div className="flex flex-col items-center gap-2 min-w-[70px]">
                 <div className="w-16 h-12 rounded bg-blue-50 flex items-center justify-center shadow-lg relative overflow-hidden">
                    <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-blue-200"></div>
                    <span className="text-blue-900 text-[8px] font-black">INCOME TAX</span>
                 </div>
                 <span className="text-[10px] text-zinc-300 font-medium">{t(language, "PAN")}</span>
               </div>
               {/* PAN Preview mock */}
               <div className="flex flex-col items-center gap-2 min-w-[70px]">
                 <div className="w-16 h-12 rounded bg-blue-100/80 flex flex-col items-center justify-center shadow-lg">
                    <span className="text-blue-800 text-[6px] font-black text-center px-1">INCOME TAX DEPT</span>
                    <div className="w-6 h-6 bg-blue-200 mt-0.5 rounded-sm"></div>
                 </div>
                 <span className="text-[10px] text-zinc-300 font-medium">PAN Preview..</span>
               </div>
               {/* Voter ID mock */}
               <div className="flex flex-col items-center gap-2 min-w-[70px]">
                 <div className="w-16 h-12 rounded bg-green-50 flex items-center justify-center shadow-lg">
                    <span className="text-green-800 text-[8px] font-black text-center">ELECTION<br/>COMMISSION</span>
                 </div>
                 <span className="text-[10px] text-zinc-300 font-medium">{t(language, "Voter ID")}</span>
               </div>
             </div>
             
             <Link href="/dashboard/public-services" className="w-full mt-2 py-3 rounded-xl border border-orange-500/30 text-zinc-300 font-bold text-[11px] tracking-widest uppercase hover:bg-orange-500/10 hover:text-orange-500 transition-colors flex items-center justify-center gap-2">{t(language, "LINK YOUR SERVICES")}<ChevronRight className="w-4 h-4" />
             </Link>
          </div>
          
          <div className="neo-card p-6 flex flex-col relative overflow-hidden">
            <h2 className="text-white font-bold text-lg mb-2">{t(language, "Tailored For You")}</h2>
            <p className="text-zinc-400 text-[15px] leading-relaxed mb-6">
              Complete Government benefits in it complete Profile | (Required for specific details)
            </p>
            <Link href="/dashboard/profile" className="w-full py-3 rounded-xl border border-orange-500/30 text-zinc-300 font-bold text-[11px] tracking-widest uppercase hover:bg-orange-500/10 hover:text-orange-500 transition-colors flex items-center justify-center gap-2">{t(language, "COMPLETE PROFILE")}<ChevronRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
        
        {/* COLUMN 2 (removed): MY SERVICE HUB removed to reduce congestion */}

        {/* COLUMN 3: CIVIC ENGAGEMENT PORTAL */}
        <div className="md:col-span-6 flex flex-col gap-6">
          <div className="neo-card p-6 flex flex-col relative overflow-hidden h-full">
            <div className="mb-6">
               <h2 className="text-orange-500 font-serif font-black text-xl uppercase tracking-widest">{t(language, "CIVIC ENGAGEMENT PORTAL")}</h2>
               <p className="text-zinc-500 text-[15px] font-bold uppercase tracking-wider">{t(language, "COMMUNITY RADAR")}</p>
            </div>
            
            {/* Map Mock */}
            <div className="w-full h-40 bg-zinc-900 rounded-xl border border-white/[0.08] relative overflow-hidden mb-6">
               {/* Grid lines */}
               <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.2 }}></div>
               
               {/* Pins */}
               <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
                 <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center shadow-[0_0_10px_#f97316]">
                   <MapPin className="w-3 h-3 text-zinc-900" />
                 </div>
                 <div className="bg-black/80 backdrop-blur text-white text-[10px] px-2 py-1 rounded border border-white/10 whitespace-nowrap">{t(language, "Road Construction")}<span className="text-orange-400">[Active]</span><br/>
                   <span className="text-zinc-400">{t(language, "- MG Road")}</span>
                 </div>
               </div>
               
               <div className="absolute bottom-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 flex-row-reverse">
                 <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_10px_#22c55e]">
                   <MapPin className="w-3 h-3 text-zinc-900" />
                 </div>
                 <div className="bg-black/80 backdrop-blur text-white text-[10px] px-2 py-1 rounded border border-white/10 whitespace-nowrap text-right">{t(language, "Pothole")}<span className="text-green-400">[Resolved]</span><br/>
                   <span className="text-zinc-400">{t(language, "- College Rd.")}</span>
                 </div>
               </div>
               
               {/* Map overlay elements */}
               <div className="absolute bottom-2 left-2 text-[10px] text-white font-bold opacity-70">Google</div>
               <div className="absolute bottom-2 right-2 text-[8px] text-zinc-500 flex gap-2">
                 <span>Map data ©2026 Google</span>
                 <span>Terms of Use</span>
               </div>
               <div className="absolute top-4 right-4 w-6 h-6 bg-black/60 rounded border border-white/10 flex items-center justify-center">
                 <div className="w-3 h-3 border border-white/50 rounded-sm"></div>
               </div>
            </div>
            
            {/* Split bottom: 3 Equal Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
              {/* Reports Widget */}
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-4 flex flex-col">
                <h3 className="text-white font-bold text-[15px] mb-4">{t(language, "REPORTS")}</h3>

                {/* Gauge removed */}

                <div className="mb-4">
                  <span className="text-[11px] text-zinc-400 font-bold tracking-wider">{t(language, "REPUNT")} <ChevronDown className="w-3 h-3 inline" /></span>
                </div>

                <div className="flex justify-between text-[10px] font-bold uppercase text-zinc-500 mb-2 px-1">
                  <span>{t(language, "IN.ACTIVE")}</span>
                  <span className="text-green-500">{t(language, "110% RESOLVED")}</span>
                </div>

                <div className="space-y-3 mt-2 flex-1">
                     <div className="flex items-center justify-between text-[15px]">
                        <div className="flex items-center gap-1.5 text-zinc-300">
                           <AlertTriangle className="w-3 h-3 text-red-500" />
                           <span className="truncate w-20">{t(language, "Pothole, MG...")}</span>
                        </div>
                        <span className="text-red-500 text-[10px] font-bold flex items-center gap-1">{t(language, "Active")}<div className="w-1.5 h-1.5 rounded-full bg-red-500"></div></span>
                     </div>
                     <div className="flex items-center justify-between text-[15px]">
                        <div className="flex items-center gap-1.5 text-zinc-300">
                           <CheckCircle2 className="w-3 h-3 text-green-500" />
                           <span className="truncate w-20">{t(language, "Pothole, MG...")}</span>
                        </div>
                        <span className="text-green-500 text-[10px] font-bold flex items-center gap-1">{t(language, "Resolved")}<CheckCircle2 className="w-3 h-3" /></span>
                     </div>
                     <div className="flex items-center justify-between text-[15px]">
                        <div className="flex items-center gap-1.5 text-zinc-300">
                           <CheckCircle2 className="w-3 h-3 text-green-500" />
                           <span className="truncate w-20">{t(language, "Water Leak, Ol...")}</span>
                        </div>
                        <span className="text-green-500 text-[10px] font-bold flex items-center gap-1">{t(language, "Resolved")}<CheckCircle2 className="w-3 h-3" /></span>
                     </div>
                     <div className="flex items-center justify-between text-[15px]">
                        <div className="flex items-center gap-1.5 text-zinc-300">
                           <AlertCircle className="w-3 h-3 text-orange-500" />
                           <span className="truncate w-20">{t(language, "Traffic Light...")}</span>
                        </div>
                        <span className="text-orange-500 text-[10px] font-bold flex items-center gap-1">{t(language, "In Review")} <AlertCircle className="w-3 h-3" /></span>
                     </div>
                  </div>
                  
                  <Link href="/dashboard/transparency" className="mt-4 w-full text-center text-[10px] font-bold text-zinc-400 hover:text-orange-500 uppercase tracking-widest flex items-center justify-center gap-1 transition-colors">
                     {t(language, "VIEW ALL REPORTS")} <ChevronRight className="w-3 h-3" />
                  </Link>
               </div>
               
                  {/* LOCALIZED CIVIC ALERTS & NEWS */}
                  <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-4 flex flex-col">
                     <h3 className="text-white font-bold text-[15px] uppercase tracking-wider mb-4">{t(language, "LOCALIZED CIVIC ALERTS & NEWS")}</h3>
                     <div className="space-y-4">                         <div className="flex gap-2">
                           <div className="w-2 h-2 rounded-full bg-red-500 mt-1 flex-shrink-0"></div>
                           <p className="text-zinc-300 text-[11px] leading-tight font-medium">{t(language, "Scheduled Power Cut [1 PM - 4 PM] - Central Tiruppur")}</p>
                        </div>
                        <div className="flex gap-2">
                           <div className="w-2 h-2 rounded-full bg-green-500 mt-1 flex-shrink-0"></div>
                           <p className="text-zinc-300 text-[11px] leading-tight font-medium">{t(language, "New Subsidy for B.Tech Students Announced")}</p>
                        </div>
                        <div className="flex gap-2">
                           <AlertTriangle className="w-3 h-3 text-orange-500 mt-0.5 flex-shrink-0" />
                           <p className="text-zinc-300 text-[11px] leading-tight font-medium">{t(language, "Heavy Rain Alert: Use Caution")}</p>
                        </div>
                        <div className="flex gap-2">
                           <Megaphone className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                           <p className="text-zinc-300 text-[11px] leading-tight font-medium">{t(language, "Real-time Localized Unread")}</p>
                        </div>
                     </div>
                  </div>
                  
                  {/* Quick Action Shortcuts */}
                  <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-4 flex flex-col">
                     <h3 className="text-white font-bold text-[15px] mb-3">{t(language, "Quick Action Shortcuts")}</h3>
                     <div className="grid grid-cols-2 gap-2">
                        <Link href="/dashboard/public-services" className="bg-white/[0.05] border border-white/[0.1] hover:border-orange-500/50 hover:bg-orange-500/10 rounded-xl py-2 px-1 flex flex-col items-center justify-center gap-1 transition-all">
                           <FileText className="w-4 h-4 text-orange-500" />
                           <span className="text-[10px] font-bold text-zinc-300">{t(language, "e-Aadhaar")}</span>
                        </Link>
                        <Link href="/dashboard/public-services" className="bg-white/[0.05] border border-white/[0.1] hover:border-orange-500/50 hover:bg-orange-500/10 rounded-xl py-2 px-1 flex flex-col items-center justify-center gap-1 transition-all">
                           <CreditCard className="w-4 h-4 text-orange-500" />
                           <span className="text-[10px] font-bold text-zinc-300">{t(language, "Pay Bills")}</span>
                        </Link>
                        <Link href="/dashboard/public-services" className="bg-white/[0.05] border border-white/[0.1] hover:border-orange-500/50 hover:bg-orange-500/10 rounded-xl py-2 px-1 flex flex-col items-center justify-center gap-1 transition-all">
                           <Car className="w-4 h-4 text-orange-500" />
                           <span className="text-[10px] font-bold text-zinc-300">{t(language, "Book RTO")}</span>
                        </Link>
                        <Link href="/dashboard/public-services" className="bg-white/[0.05] border border-white/[0.1] hover:border-orange-500/50 hover:bg-orange-500/10 rounded-xl py-2 px-1 flex flex-col items-center justify-center gap-1 transition-all">
                           <Stethoscope className="w-4 h-4 text-orange-500" />
                           <span className="text-[10px] font-bold text-zinc-300">{t(language, "Find Hospitals")}</span>
                        </Link>
                     </div>
                  </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
