import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import NavigationRoutes from "./navigation-routes"
import { useAuth } from "@clerk/clerk-react"
import { cn } from "@/lib/utils"
import { NavLink } from "react-router"

export const ToggleContainer = () => {
    const { userId } = useAuth();

  return (
    <Sheet>
  <SheetTrigger className=" mr-2 block md:hidden"><Menu/></SheetTrigger>
  <SheetContent className="bg-white text-black shadow-lg">
    <SheetHeader>
      <SheetTitle/>
    </SheetHeader>
    
    <nav className="gap-6 flex flex-col items-start ml-2">
  <NavigationRoutes isMobile />
  {userId && (
    <NavLink
      to="/generate"
      className={({ isActive }) =>
        cn(
          "text-base text-neutral-600 ",
          isActive && "text-neutral-900 font-semibold"
        )
      }
    >
      Take An Interview
    </NavLink>
  )}
</nav>

  </SheetContent>
</Sheet>
  )
}
