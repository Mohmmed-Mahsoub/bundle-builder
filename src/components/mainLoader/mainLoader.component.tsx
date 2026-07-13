import { Loader2 } from "lucide-react"

export default function MainLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Loader2 className="size-10 animate-spin text-primary" />
    </div>
  )
}
