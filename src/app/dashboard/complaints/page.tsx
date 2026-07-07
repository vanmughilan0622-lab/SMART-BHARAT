import { Activity, Clock, CheckCircle2, AlertTriangle, ChevronRight, FileWarning } from "lucide-react"

const COMPLAINTS = [
  {
    id: "COMP-29381",
    title: "Large Pothole on 12th Main Road",
    category: "Roads & Potholes",
    date: "Oct 12, 2023",
    status: "In Progress",
    updates: "Assigned to PWD team for repair.",
  },
  {
    id: "COMP-29304",
    title: "Streetlight not working",
    category: "Streetlights",
    date: "Oct 05, 2023",
    status: "Resolved",
    updates: "Bulb replaced by BESCOM maintenance team.",
  },
  {
    id: "COMP-29402",
    title: "Garbage pile up near park",
    category: "Garbage & Sanitation",
    date: "Oct 24, 2023",
    status: "Pending",
    updates: "Under review by local municipal office.",
  }
]

export default function ComplaintsPage() {
  return (
    <div className="w-full mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
      {/* Header moved to TopBar */}
        <button 
          className="bg-orange-500 hover:bg-orange-500 text-zinc-950 font-bold py-2.5 px-6 rounded-xl transition-colors shadow-lg self-start md:self-auto"
        >
          New Complaint
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white/[0.02] border border-white/[0.06] backdrop-blur-md rounded-2xl p-6 flex items-center gap-4">
          <div className="p-4 bg-orange-500/10 rounded-xl">
             <Clock className="w-6 h-6 text-orange-500" />
          </div>
          <div>
            <p className="text-sm font-bold text-muted-foreground">Pending</p>
            <p className="text-2xl font-black text-foreground">1</p>
          </div>
        </div>
        <div className="bg-white/[0.02] border border-white/[0.06] backdrop-blur-md rounded-2xl p-6 flex items-center gap-4">
          <div className="p-4 bg-blue-500/10 rounded-xl">
             <AlertTriangle className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <p className="text-sm font-bold text-muted-foreground">In Progress</p>
            <p className="text-2xl font-black text-foreground">1</p>
          </div>
        </div>
        <div className="bg-white/[0.02] border border-white/[0.06] backdrop-blur-md rounded-2xl p-6 flex items-center gap-4">
          <div className="p-4 bg-orange-500/10 rounded-xl">
             <CheckCircle2 className="w-6 h-6 text-orange-500" />
          </div>
          <div>
            <p className="text-sm font-bold text-muted-foreground">Resolved</p>
            <p className="text-2xl font-black text-foreground">1</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground mb-4">Your Recent Complaints</h2>
        
        {COMPLAINTS.map((complaint) => (
          <div key={complaint.id} className="bg-white/[0.02] border border-white/[0.06] backdrop-blur-md rounded-2xl p-6 hover:bg-white/[0.04] transition-all cursor-pointer group flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="flex items-start gap-4 flex-1">
              <div className="p-3 bg-zinc-950 rounded-xl border border-white/[0.08] mt-1">
                <FileWarning className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                   <h3 className="text-lg font-bold text-foreground">{complaint.title}</h3>
                   <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-white/[0.05] text-muted-foreground border border-white/[0.05]">
                     {complaint.id}
                   </span>
                </div>
                <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground mb-3">
                  <span>{complaint.category}</span>
                  <span className="w-1 h-1 rounded-full bg-white/[0.2]"></span>
                  <span>{complaint.date}</span>
                </div>
                <p className="text-sm font-medium text-foreground bg-white/[0.03] p-3 rounded-xl border border-white/[0.05]">
                  <span className="font-bold text-orange-500 mr-2">Latest Update:</span>
                  {complaint.updates}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-6 md:w-48">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${
                  complaint.status === 'Resolved' ? 'bg-orange-500 shadow-[0_0_10px_rgba(255,87,34,0.8)]' : 
                  complaint.status === 'In Progress' ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]' : 
                  'bg-orange-500 shadow-[0_0_10px_rgba(255,87,34,0.8)]'
                }`}></div>
                <span className="text-sm font-bold text-foreground">{complaint.status}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-orange-500 transition-colors" />
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

