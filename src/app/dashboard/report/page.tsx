"use client"

import { useState } from "react"
import { AlertTriangle, MapPin, Camera, Upload, ChevronDown, CheckCircle2 } from "lucide-react"

export default function ReportIssuePage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-orange-500" />
        </div>
        <h2 className="text-3xl font-black text-foreground mb-4">Issue Reported Successfully</h2>
        <p className="text-muted-foreground text-center max-w-md mb-8">
          Your civic issue has been logged. We've notified the local municipal authorities. You can track its progress in the Complaint Tracker.
        </p>
        <button 
          onClick={() => window.location.href = '/dashboard/complaints'}
          className="bg-orange-500 hover:bg-orange-500 text-zinc-950 font-bold py-3 px-8 rounded-xl transition-colors shadow-[0_0_20px_rgba(255,87,34,0.3)]"
        >
          Track Complaint
        </button>
      </div>
    )
  }

  return (
    <div className="w-full mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-orange-500" />
        </div>
        <h1 className="text-4xl font-black tracking-tight text-foreground mb-3">Report a Civic Issue</h1>
        <p className="text-muted-foreground font-medium text-lg max-w-xl mx-auto">
          Help us keep our city clean and safe. Report potholes, broken streetlights, or garbage dumping.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white/[0.02] border border-white/[0.06] backdrop-blur-md rounded-3xl p-8 shadow-lg">
        
        <div className="space-y-6">
          
          <div className="space-y-2">
            <label className="text-sm font-bold text-foreground">Issue Category</label>
            <div className="relative">
              <select className="w-full appearance-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-sm font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-orange-500/50 cursor-pointer">
                <option className="bg-zinc-950">Select a category...</option>
                <option className="bg-zinc-950">Roads & Potholes</option>
                <option className="bg-zinc-950">Streetlights & Electricity</option>
                <option className="bg-zinc-950">Garbage & Sanitation</option>
                <option className="bg-zinc-950">Water Supply & Leakage</option>
                <option className="bg-zinc-950">Public Nuisance</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-foreground">Location</label>
            <div className="relative flex items-center">
              <MapPin className="absolute left-4 w-5 h-5 text-orange-500" />
              <input 
                type="text" 
                placeholder="E.g., 12th Main Road, Indiranagar" 
                className="w-full bg-white/[0.03] border border-white/[0.08] text-foreground font-semibold rounded-xl py-3.5 pl-12 pr-32 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
              />
              <button type="button" className="absolute right-2 text-xs font-bold bg-white/[0.05] hover:bg-white/[0.1] px-3 py-1.5 rounded-lg border border-white/[0.1] transition-colors">
                Use GPS
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-foreground">Description</label>
            <textarea 
              rows={4}
              placeholder="Provide more details about the issue..." 
              className="w-full bg-white/[0.03] border border-white/[0.08] text-foreground font-semibold rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50 resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-foreground">Photo Evidence</label>
            <div className="border-2 border-dashed border-white/[0.1] rounded-2xl p-8 flex flex-col items-center justify-center bg-white/[0.01] hover:bg-white/[0.02] transition-colors cursor-pointer group">
               <div className="w-12 h-12 bg-white/[0.05] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Camera className="w-6 h-6 text-muted-foreground group-hover:text-orange-500 transition-colors" />
               </div>
               <p className="text-sm font-bold text-foreground mb-1">Click to upload or drag & drop</p>
               <p className="text-xs font-medium text-muted-foreground">PNG, JPG or JPEG (Max 5MB)</p>
            </div>
          </div>

          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-500 text-zinc-950 font-bold py-4 rounded-xl transition-colors text-lg shadow-[0_0_20px_rgba(255,87,34,0.2)] mt-8">
            Submit Report
          </button>

        </div>
      </form>
    </div>
  )
}

