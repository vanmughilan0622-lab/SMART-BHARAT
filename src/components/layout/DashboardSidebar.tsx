"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"
import { 
  Home, 
  Bot, 
  Landmark, 
  FileSearch, 
  Megaphone,
  ListTodo,
  User,
  LogOut,
  ChevronLeft,
  Menu,
  BarChart3,
  ShieldCheck,
  Zap
} from "lucide-react"
import { useLanguage } from "@/components/providers/LanguageProvider"
import { t, TranslationKeys } from "@/lib/translations"

const navGroups: { titleKey: string, items: { nameKey: string, href: string, icon: any }[] }[] = [
  {
    titleKey: "OVERVIEW",
    items: [
      { nameKey: "Dashboard", href: "/dashboard", icon: Home },
      { nameKey: "COMMUNITY RADAR", href: "/dashboard/transparency", icon: BarChart3 },
      { nameKey: "AI Assistant", href: "/dashboard/assistant", icon: Bot },
    ]
  },
  {
    titleKey: "SERVICES",
    items: [
      { nameKey: "Government Services", href: "/dashboard/public-services", icon: Landmark },
      { nameKey: "Scheme Finder", href: "/dashboard/schemes", icon: FileSearch },
      { nameKey: "Document Vault", href: "/dashboard/vault", icon: ShieldCheck },
    ]
  },
  {
    titleKey: "SUPPORT",
    items: [
      { nameKey: "Report Issue", href: "/dashboard/report-issue", icon: Megaphone },
      { nameKey: "Complaint Tracker", href: "/dashboard/tracking", icon: Zap },
    ]
  },
  {
    titleKey: "SETTINGS",
    items: [
      { nameKey: "Profile", href: "/dashboard/profile", icon: User },
    ]
  }
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const { language } = useLanguage()
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className={`shrink-0 flex h-screen flex-col border-r border-white/[0.06] bg-white/[0.02] backdrop-blur-md transition-all duration-300 overflow-hidden ${isOpen ? 'w-72' : 'w-20'}`}>
      <div className="w-72 flex flex-col h-full">
        <div className="flex h-20 items-center overflow-hidden whitespace-nowrap border-b border-white/[0.06] shrink-0">
          <div className="w-20 flex items-center justify-center shrink-0">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-zinc-400 hover:bg-white/[0.04] hover:text-white transition-colors"
            >
              {isOpen ? <ChevronLeft className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          <div className={`flex items-center gap-3 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-9 h-9 flex items-center justify-center bg-[#FF5722]/10 border border-[#FF5722]/30 rounded-lg shrink-0">
              <Zap className="h-5 w-5 text-[#FF5722]" />
            </div>
            <h1 className="text-base font-bold tracking-widest text-white uppercase whitespace-nowrap">
              Smart Bharat
            </h1>
          </div>
        </div>
        
        <nav className="flex-1 py-6 overflow-y-auto overflow-x-hidden scrollbar-hide">
          <div className="space-y-6">
            {navGroups.map((group, index) => (
              <div key={index} className="space-y-2">
                <div className={`px-6 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 whitespace-nowrap">
                    {t(language, group.titleKey)}
                  </h4>
                </div>
                <div className="flex flex-col">
                  {group.items.map((item, itemIndex) => {
                    const isActive = pathname === item.href || (item.href === "/dashboard/public-services" && pathname === "/dashboard/services")
                    const Icon = item.icon
                    return (
                      <div key={item.nameKey} className="flex flex-col relative">
                        <Link
                          href={item.href}
                          className={`flex items-center transition-all duration-300 relative ${
                            isActive 
                              ? "bg-white/[0.03] border-y border-l border-white/[0.08] shadow-[-5px_0_20px_-5px_rgba(255,87,34,0.15)] rounded-l-2xl ml-3 mr-0 z-20 text-orange-500 py-1.5" 
                              : "mx-3 rounded-xl text-zinc-400 hover:bg-white/[0.04] hover:text-white py-1.5"
                          }`}
                          title={!isOpen ? t(language, item.nameKey) as string : undefined}
                        >
                          <div className={`w-14 h-[44px] flex items-center justify-center shrink-0 relative z-30 ${isActive ? 'text-orange-500' : 'text-zinc-400'}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className={`text-[15px] font-bold whitespace-nowrap transition-opacity duration-300 relative z-30 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                            {t(language, item.nameKey)}
                          </span>
                        </Link>
                        {itemIndex < group.items.length - 1 && (
                          <div className="h-[1px] bg-white/[0.03] mx-6 my-1.5" />
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </nav>
        
        <div className="border-t border-white/[0.05] p-4 shrink-0">
          <button 
            className="flex items-center w-full rounded-xl transition-all duration-300 text-zinc-400 hover:bg-red-500/10 hover:text-red-400 py-1.5"
            title={!isOpen ? t(language, "Sign Out") as string : undefined}
            onClick={() => signOut({ callbackUrl: '/' })}
          >
            <div className="w-12 h-[44px] flex items-center justify-center shrink-0">
              <LogOut className="h-5 w-5" />
            </div>
            <span className={`text-[15px] font-bold whitespace-nowrap transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
              {t(language, "Sign Out")}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
