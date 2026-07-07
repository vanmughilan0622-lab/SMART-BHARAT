import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, FileText, Globe } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="flex h-20 items-center justify-between border-b border-white/5 px-8">
        <div className="text-2xl font-extrabold tracking-tight text-orange-500">Smart Bharat</div>
        <Link href="/dashboard">
          <Button variant="outline" className="text-base font-semibold px-6 py-2">Go to Dashboard</Button>
        </Link>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
        <div className="max-w-4xl space-y-10">
          <h1 className="text-6xl font-black tracking-tight sm:text-7xl leading-[1.1] text-foreground">
            Your AI-Powered{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-500">
              Civic Companion
            </span>
          </h1>
          <p className="text-xl font-medium text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Navigate government services, discover eligible schemes, and report civic issues — with confidence and privacy.
          </p>
          <div className="flex justify-center gap-4 pt-6">
            <Link href="/dashboard">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-500 text-white gap-2 text-lg font-bold px-8 py-6 rounded-xl shadow-lg shadow-orange-900/30 transition-all duration-200 hover:scale-[1.03]">
                Get Started <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mt-28">
          <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.06] hover:border-orange-500/20">
            <div className="p-4 bg-orange-500/10 rounded-full text-orange-500">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <h3 className="font-bold text-xl text-foreground">Verified Information</h3>
            <p className="text-muted-foreground text-base font-medium leading-relaxed">
              Every fact and scheme is sourced directly from official government databases. No hallucinations.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.06] hover:border-orange-500/20">
            <div className="p-4 bg-orange-500/10 rounded-full text-orange-500">
              <Globe className="h-7 w-7" />
            </div>
            <h3 className="font-bold text-xl text-foreground">Multilingual Assistant</h3>
            <p className="text-muted-foreground text-base font-medium leading-relaxed">
              Communicate in your preferred language. The AI translates everything seamlessly.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.06] hover:border-orange-500/20">
            <div className="p-4 bg-orange-500/10 rounded-full text-orange-500">
              <FileText className="h-7 w-7" />
            </div>
            <h3 className="font-bold text-xl text-foreground">DPDP Compliant</h3>
            <p className="text-muted-foreground text-base font-medium leading-relaxed">
              Your data is yours. We capture explicit consent for processing and offer easy deletion.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center">
        <p className="text-sm font-medium text-muted-foreground">
          © 2026 Smart Bharat. Built with transparency and privacy in mind.
        </p>
      </footer>
    </div>
  )
}
