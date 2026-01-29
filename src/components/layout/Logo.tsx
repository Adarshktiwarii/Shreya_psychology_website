import { cn } from "@/lib/utils";

export function LotusLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-10 h-10", className)}
    >
      <path
        d="M50 20C50 20 60 35 75 40C85 43 90 50 90 50C90 50 80 55 65 52C55 50 50 45 50 45C50 45 45 50 35 52C20 55 10 50 10 50C10 50 15 43 25 40C40 35 50 20 50 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 45C50 45 55 60 70 65C80 68 85 75 85 75C85 75 75 80 60 77C50 75 50 70 50 70C50 70 50 75 40 77C25 80 15 75 15 75C15 75 20 68 30 65C45 60 50 45 50 45Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 10V20M25 30L35 40M75 30L65 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="50" cy="85" r="2" fill="currentColor" />
      <circle cx="50" cy="92" r="2" fill="currentColor" />
    </svg>
  );
}
