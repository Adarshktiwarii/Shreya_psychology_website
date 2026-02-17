import Image from "next/image";
import { cn } from "@/lib/utils";

interface LotusLogoProps {
  className?: string;
  variant?: "vertical" | "crescent";
  asImage?: boolean;
}

export function LotusLogo({ className }: LotusLogoProps) {
  return (
    <Image
      src="/logo-transparent.png"
      alt="ManoArohan Logo"
      width={800}
      height={800}
      className={cn("w-10 h-10 object-contain", className)}
      priority
    />
  );
}
