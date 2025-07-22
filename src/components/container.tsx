import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Container({children, className}: ContainerProps) {
  return (
    <div className={cn("container mx-auto px-0 md:px-2 py-1 w-full",className)}>{children}</div>
  )
}

export default Container