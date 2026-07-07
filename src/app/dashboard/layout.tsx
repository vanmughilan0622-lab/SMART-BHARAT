import { DashboardSidebar } from "@/components/layout/DashboardSidebar"
import { LanguageProvider } from "@/components/providers/LanguageProvider"
import { FloatingAIButton } from "@/components/layout/FloatingAIButton"
import { TopBar } from "@/components/layout/TopBar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageProvider>
      <div className="flex h-screen bg-background relative overflow-hidden">
        
        <DashboardSidebar />
        
        <div className="flex-1 flex flex-col relative z-10 overflow-hidden">
          <TopBar />
          <main className="flex-1 overflow-y-auto p-10">
            <div className="h-full w-full max-w-full mx-6">
              {children}
            </div>
          </main>
        </div>
        
        {/* Global Floating AI Button */}
        <FloatingAIButton />
      </div>
    </LanguageProvider>
  )
}
