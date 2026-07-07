import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4 text-center">
      <h2 className="text-4xl font-black tracking-tight text-orange-500 mb-4">404 - Page Not Found</h2>
      <p className="text-lg text-muted-foreground mb-8">
        We couldn't find the requested resource or page.
      </p>
      <Link href="/">
        <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-xl">
          Return to Home
        </Button>
      </Link>
    </div>
  )
}
