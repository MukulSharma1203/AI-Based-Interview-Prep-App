import { MainRoutes } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router";

interface NavigationRoutesProps {
    isMobile?: boolean;
}    
const NavigationRoutes = ({isMobile=false} : NavigationRoutesProps) => {
  return (
    <ul className={cn("flex items-center gap-6", isMobile && "items-start flex-col gap-8")}>
        {MainRoutes.map((route) => (
            <NavLink to={route.href} key={route.href} className={({isActive})=>(cn("text-base text-neutral-600" , isActive && "text-neutral-900 font-semibold"))}>
                {route.label}
            </NavLink>
        ))}
    </ul>
  )
}

export default NavigationRoutes