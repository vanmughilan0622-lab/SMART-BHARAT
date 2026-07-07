"use client"

import { useLanguage, Language } from "@/components/providers/LanguageProvider"
import { ChevronDown } from "lucide-react"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="relative">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        className="appearance-none rounded-xl border border-white/[0.08] bg-white/[0.04] pl-3 pr-8 py-2 text-[13px] font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-orange-500/50 backdrop-blur-md cursor-pointer hover:bg-white/[0.06] transition-all"
      >
        <option className="bg-zinc-950 text-orange-500" value="English">English</option>
        <option className="bg-zinc-950 text-orange-500" value="Tamil">தமிழ்</option>
        <option className="bg-zinc-950 text-orange-500" value="Kannada">ಕನ್ನಡ</option>
        <option className="bg-zinc-950 text-orange-500" value="Telugu">తెలుగు</option>
        <option className="bg-zinc-950 text-orange-500" value="Hindi">हिन्दी</option>
        <option className="bg-zinc-950 text-orange-500" value="Assamese">অসমীয়া</option>
        <option className="bg-zinc-950 text-orange-500" value="Bengali">বাংলা</option>
        <option className="bg-zinc-950 text-orange-500" value="Bodo">बड़ो</option>
        <option className="bg-zinc-950 text-orange-500" value="Dogri">डोगरी</option>
        <option className="bg-zinc-950 text-orange-500" value="Gujarati">ગુજરાતી</option>
        <option className="bg-zinc-950 text-orange-500" value="Kashmiri">کأشُر</option>
        <option className="bg-zinc-950 text-orange-500" value="Konkani">कोंकणी</option>
        <option className="bg-zinc-950 text-orange-500" value="Maithili">मैथिली</option>
        <option className="bg-zinc-950 text-orange-500" value="Malayalam">മലയാളം</option>
        <option className="bg-zinc-950 text-orange-500" value="Manipuri">মৈতৈলোন্</option>
        <option className="bg-zinc-950 text-orange-500" value="Marathi">मराठी</option>
        <option className="bg-zinc-950 text-orange-500" value="Nepali">नेपाली</option>
        <option className="bg-zinc-950 text-orange-500" value="Odia">ଓଡ଼ିଆ</option>
        <option className="bg-zinc-950 text-orange-500" value="Punjabi">ਪੰਜਾਬੀ</option>
        <option className="bg-zinc-950 text-orange-500" value="Sanskrit">संस्कृतम्</option>
        <option className="bg-zinc-950 text-orange-500" value="Santali">ᱥᱟᱱᱛᱟᱲᱤ</option>
        <option className="bg-zinc-950 text-orange-500" value="Sindhi">سنڌي</option>
        <option className="bg-zinc-950 text-orange-500" value="Urdu">اردو</option>
      </select>
      <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
        <ChevronDown className="h-3 w-3 text-muted-foreground" />
      </div>
    </div>
  )
}
