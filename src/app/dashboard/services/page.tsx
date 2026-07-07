import { Landmark, FileText, CreditCard, Bus, GraduationCap, Home as HomeIcon, ChevronRight } from "lucide-react"

const SERVICE_CATEGORIES = [
  {
    title: "Identity & Documents",
    icon: <FileText className="w-6 h-6 text-orange-500" />,
    services: [
      { name: "Aadhaar Card Update", duration: "10-15 Days", fee: "₹50" },
      { name: "PAN Card Application", duration: "15-20 Days", fee: "₹107" },
      { name: "Voter ID Registration", duration: "30 Days", fee: "Free" },
      { name: "Passport Renewal", duration: "30-45 Days", fee: "₹1500" },
    ]
  },
  {
    title: "Transport & Driving",
    icon: <Bus className="w-6 h-6 text-orange-500" />,
    services: [
      { name: "Learner's License", duration: "Same Day", fee: "₹150" },
      { name: "Driving License Renewal", duration: "10 Days", fee: "₹200" },
      { name: "Vehicle Registration (RC)", duration: "15 Days", fee: "Varies" },
      { name: "PUC Certificate", duration: "Instant", fee: "₹100" },
    ]
  },
  {
    title: "Housing & Utilities",
    icon: <HomeIcon className="w-6 h-6 text-orange-500" />,
    services: [
      { name: "New Electricity Connection", duration: "7 Days", fee: "Varies" },
      { name: "Water Bill Payment", duration: "Instant", fee: "N/A" },
      { name: "Property Tax Payment", duration: "Instant", fee: "N/A" },
      { name: "Ration Card Application", duration: "30 Days", fee: "₹10" },
    ]
  },
  {
    title: "Education & Skilling",
    icon: <GraduationCap className="w-6 h-6 text-orange-500" />,
    services: [
      { name: "Scholarship Application", duration: "Seasonal", fee: "Free" },
      { name: "Skill India Registration", duration: "Instant", fee: "Free" },
      { name: "Education Loan Subsidy", duration: "30 Days", fee: "Free" },
      { name: "Degree Verification", duration: "15 Days", fee: "₹500" },
    ]
  }
]

export default function GovernmentServicesPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 w-full mx-auto">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-foreground flex items-center gap-3">
            <Landmark className="w-8 h-8 text-orange-500" />
            Government Services Catalog
          </h1>
          <p className="text-muted-foreground font-medium mt-2">
            Access and apply for essential government services, certificates, and licenses online.
          </p>
        </div>
        
        <div className="bg-white/[0.02] border border-white/[0.06] backdrop-blur-md rounded-2xl p-4 shadow-lg flex items-center gap-4">
          <div className="p-3 bg-orange-500/10 rounded-xl">
             <CreditCard className="w-6 h-6 text-orange-500" />
          </div>
          <div>
            <p className="text-xs font-bold text-muted-foreground">e-Wallet Balance</p>
            <p className="text-lg font-black text-foreground">₹2,450.00</p>
          </div>
          <button className="ml-4 text-xs font-bold bg-white/[0.05] hover:bg-white/[0.1] text-foreground px-3 py-1.5 rounded-lg transition-colors border border-white/[0.1]">
            Add Funds
          </button>
        </div>
      </div>

      {/* Quick Search */}
      <div className="bg-white/[0.02] border border-white/[0.06] backdrop-blur-md rounded-3xl p-6 shadow-sm">
         <div className="relative">
            <input 
              type="text" 
              placeholder="Search for any service (e.g., 'Birth Certificate', 'Driving License')..." 
              className="w-full bg-white/[0.03] border border-white/[0.08] text-foreground font-semibold rounded-2xl py-4 pl-6 pr-12 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-orange-500 rounded-xl text-zinc-950 hover:bg-orange-500 transition-colors shadow-[0_0_15px_rgba(255,87,34,0.3)]">
               <ChevronRight className="w-5 h-5 font-bold" />
            </button>
         </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {SERVICE_CATEGORIES.map((category, idx) => (
          <div key={idx} className="bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm rounded-3xl p-6 hover:border-orange-500/30 transition-colors group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-zinc-950 border border-white/[0.08] rounded-2xl group-hover:scale-110 transition-transform shadow-md">
                {category.icon}
              </div>
              <h2 className="text-xl font-bold text-foreground">{category.title}</h2>
            </div>
            
            <div className="space-y-3">
              {category.services.map((service, sIdx) => (
                <div key={sIdx} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-transparent hover:border-white/[0.1] cursor-pointer transition-all">
                  <div>
                    <h3 className="font-bold text-foreground">{service.name}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        {service.duration}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                        Fee: {service.fee}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-orange-500 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

