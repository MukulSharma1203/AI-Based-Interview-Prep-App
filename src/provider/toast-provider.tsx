import { Toaster } from "@/components/ui/sonner";

export const ToasterProvider = () => {
  return (
    <Toaster
      theme="dark"
      richColors
      position="top-right"
      className="bg-neutral-100 shadow-lg"
    />
  );
};
