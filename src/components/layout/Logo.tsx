import Image from "next/image";
import { cn } from "@/lib/utils";

export function LotusLogo({ className, variant = "crescent" }: { className?: string; variant?: "vertical" | "crescent" }) {
  if (variant === "vertical") {
    return (
      <Image
        src="/logo-vertical.svg"
        alt="ManoArohan Logo"
        width={40}
        height={40}
        className={cn("w-10 h-10", className)}
        priority
      />
    );
  }

  return (
    <Image
      src="/logo-crescent.svg"
      alt="ManoArohan Logo"
      width={40}
      height={40}
      className={cn("w-10 h-10", className)}
      priority
    />
  );
}
