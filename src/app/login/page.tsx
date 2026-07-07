import { signIn } from "@/auth"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-10 shadow-2xl backdrop-blur-md">
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-black tracking-tight text-orange-500">Smart Bharat</h1>
          <p className="text-base font-medium text-muted-foreground">Sign in to access your civic companion</p>
        </div>

        <div className="space-y-5">
          <form
            action={async () => {
              "use server"
              await signIn("guest", { redirectTo: "/dashboard" })
            }}
          >
            <Button className="w-full bg-orange-500 hover:bg-orange-500 text-white text-base font-bold py-6 rounded-xl shadow-lg shadow-orange-900/30 transition-all duration-200 hover:scale-[1.02]" type="submit">
              Continue as Guest
            </Button>
          </form>

          <p className="text-center text-xs text-muted-foreground/60 font-medium pt-2">
            Guest mode provides read-only access to civic features.
          </p>
        </div>
      </div>
    </div>
  )
}
