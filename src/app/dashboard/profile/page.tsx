import { auth } from "@/auth"
import { ProfileContent } from "./ProfileContent"

export default async function ProfilePage() {
  const session = await auth()
  
  const isGuest = session?.user?.email === "guest@smartbharat.local" || session?.user?.id === "guest" || !session
  const name = session?.user?.name || "Guest User"
  const email = session?.user?.email || "guest@smartbharat.local"
  const image = session?.user?.image || "https://api.dicebear.com/9.x/notionists/svg?seed=" + encodeURIComponent(name)

  return (
    <ProfileContent 
      isGuest={isGuest}
      name={name}
      email={email}
      image={image}
    />
  )
}

