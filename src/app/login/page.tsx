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
              await signIn("google", { redirectTo: "/dashboard" })
            }}
          >
            <Button className="w-full text-base font-semibold py-6 rounded-xl border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.08] text-foreground transition-all duration-200 hover:scale-[1.02]" variant="outline" type="submit">
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Sign in with Google
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/[0.06]" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-3 text-muted-foreground font-semibold">Or</span>
            </div>
          </div>

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
            Guest mode is read-only. Sign in with Google for full access.
          </p>
        </div>
      </div>
    </div>
  )
}
