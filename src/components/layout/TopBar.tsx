"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { LayoutGrid, Bell, User, FileText, Shield, FileCheck, Settings, Landmark, X } from "lucide-react"
import { LanguageSelector } from "@/components/layout/LanguageSelector"

export function TopBar() {
  const pathname = usePathname()
  
  const [appsOpen, setAppsOpen] = useState(false)
  const [notifsOpen, setNotifsOpen] = useState(false)
  
  const appsRef = useRef<HTMLDivElement>(null)
  const notifsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (appsRef.current && !appsRef.current.contains(event.target as Node)) {
        setAppsOpen(false)
      }
      if (notifsRef.current && !notifsRef.current.contains(event.target as Node)) {
        setNotifsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="sticky top-0 z-40 flex items-center justify-between px-10 py-5 bg-[#1C1C1E] border-b border-[#333333]">
      
      {/* Left: Logo removed - moved to sidebar */}
      <div></div>

      {/* Navigation links removed - handled by sidebar */}

      {/* Right: Controls & Icons */}
      <div className="flex items-center gap-6">
        <LanguageSelector />
        
        <div className="flex items-center gap-3">
          {/* Applications Dropdown */}
          <div className="relative" ref={appsRef}>
            <button 
              onClick={() => { setAppsOpen(!appsOpen); setNotifsOpen(false); }}
              className={`flex items-center justify-center w-10 h-10 rounded-xl bg-[#232325] border transition-colors shadow-inner ${appsOpen ? 'border-[#FF5722] text-white' : 'border-[#3A3A3C] text-zinc-400 hover:text-white hover:border-[#FF5722]'}`}
            >
              <LayoutGrid className="w-[18px] h-[18px]" />
            </button>
            
            {appsOpen && (
              <div className="absolute right-0 mt-3 w-[320px] bg-[#1C1C1E] border border-white/[0.1] rounded-2xl shadow-2xl p-5 animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[14px] font-bold text-white tracking-wider uppercase">Applications</h3>
                  <button onClick={() => setAppsOpen(false)} className="text-zinc-500 hover:text-white"><X className="w-4 h-4" /></button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Link href="/dashboard" className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-orange-500/30 transition-all group">
                    <div className="p-2.5 bg-orange-500/10 rounded-lg group-hover:scale-110 transition-transform"><LayoutGrid className="w-5 h-5 text-orange-500" /></div>
                    <span className="text-[12px] font-bold text-zinc-300">Dashboard</span>
                  </Link>
                  <Link href="/dashboard/public-services" className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-blue-500/30 transition-all group">
                    <div className="p-2.5 bg-blue-500/10 rounded-lg group-hover:scale-110 transition-transform"><Landmark className="w-5 h-5 text-blue-400" /></div>
                    <span className="text-[12px] font-bold text-zinc-300">Services</span>
                  </Link>
                  <Link href="/dashboard/report-issue" className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-red-500/30 transition-all group">
                    <div className="p-2.5 bg-red-500/10 rounded-lg group-hover:scale-110 transition-transform"><Shield className="w-5 h-5 text-red-400" /></div>
                    <span className="text-[12px] font-bold text-zinc-300">Complaints</span>
                  </Link>
                  <Link href="/dashboard/schemes" className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-green-500/30 transition-all group">
                    <div className="p-2.5 bg-green-500/10 rounded-lg group-hover:scale-110 transition-transform"><FileCheck className="w-5 h-5 text-green-400" /></div>
                    <span className="text-[12px] font-bold text-zinc-300">Schemes</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          {/* Notifications Dropdown */}
          <div className="relative" ref={notifsRef}>
            <button 
              onClick={() => { setNotifsOpen(!notifsOpen); setAppsOpen(false); }}
              className={`relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#232325] border transition-colors shadow-inner ${notifsOpen ? 'border-[#FF5722] text-white' : 'border-[#3A3A3C] text-zinc-400 hover:text-white hover:border-[#FF5722]'}`}
            >
              <Bell className="w-[18px] h-[18px]" />
              <span className="absolute top-[8px] right-[8px] w-2.5 h-2.5 bg-[#FF5722] rounded-full border-2 border-[#232325]"></span>
            </button>
            
            {notifsOpen && (
              <div className="absolute right-0 mt-3 w-[350px] bg-[#1C1C1E] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between p-5 border-b border-white/[0.05] bg-white/[0.01]">
                  <h3 className="text-[14px] font-bold text-white tracking-wider uppercase">Notifications</h3>
                  <span className="text-[11px] font-bold bg-orange-500/20 text-orange-500 px-2 py-0.5 rounded-full">3 New</span>
                </div>
                <div className="max-h-[300px] overflow-y-auto">
                  <div className="p-4 border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors cursor-pointer relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>
                    <h4 className="text-[13px] font-bold text-white mb-1">New Scheme Match Found!</h4>
                    <p className="text-[12px] text-zinc-400 mb-2 leading-relaxed">Based on your recent profile update, you are eligible for the PM Kisan Samman Nidhi.</p>
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Just now</span>
                  </div>
                  <div className="p-4 border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors cursor-pointer relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>
                    <h4 className="text-[13px] font-bold text-white mb-1">Complaint Updated</h4>
                    <p className="text-[12px] text-zinc-400 mb-2 leading-relaxed">Your report regarding water supply in Pune has been assigned to a local engineer.</p>
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">2 hours ago</span>
                  </div>
                  <div className="p-4 hover:bg-white/[0.02] transition-colors cursor-pointer relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>
                    <h4 className="text-[13px] font-bold text-white mb-1">Document Verified</h4>
                    <p className="text-[12px] text-zinc-400 mb-2 leading-relaxed">Your Aadhar card upload has been successfully verified via DigiLocker.</p>
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Yesterday</span>
                  </div>
                </div>
                <div className="p-3 border-t border-white/[0.05] bg-white/[0.01] text-center">
                  <button className="text-[12px] font-bold text-orange-500 hover:text-orange-400">View All Notifications</button>
                </div>
              </div>
            )}
          </div>

          <Link href="/dashboard/profile" className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#FF5722]/10 border border-[#FF5722]/30 text-[#FF5722] hover:bg-[#FF5722]/20 transition-colors shadow-[0_0_15px_rgba(255,87,34,0.15)] ml-2">
            <User className="w-[18px] h-[18px]" />
          </Link>
        </div>
      </div>
      
    </div>
  )
}
