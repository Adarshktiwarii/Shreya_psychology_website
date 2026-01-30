import { cn } from "@/lib/utils";

export function LotusLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-10 h-10", className)}
    >
      {/* Outer Crescent Moon Circle - Left side opening */}
      <path
        d="M 160 100 A 75 75 0 1 1 50 65" 
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Sun/Rays at top */}
      <g transform="translate(100, 55) scale(0.6)">
        <path d="M-20 0 A 20 20 0 0 1 20 0" stroke="currentColor" strokeWidth="2" fill="none" />
        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
           <line x1="0" y1="-5" x2="0" y2="-15" />
           <line x1="10" y1="-2" x2="18" y2="-10" />
           <line x1="-10" y1="-2" x2="-18" y2="-10" />
           <line x1="18" y1="5" x2="28" y2="2" />
           <line x1="-18" y1="5" x2="-28" y2="2" />
        </g>
      </g>

      {/* Lotus Flower - Centered in the crescent opening */}
      <g transform="translate(100, 115) scale(0.8)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
         {/* Center Petal */}
         <path d="M0 15 C0 15 -10 -20 0 -45 C10 -20 0 15 0 15" />
         
         {/* Inner Side Petals */}
         <path d="M0 15 C0 15 -20 0 -25 -25 C-15 -15 0 0 0 15" />
         <path d="M0 15 C0 15 20 0 25 -25 C15 -15 0 0 0 15" />
         
         {/* Middle Side Petals */}
         <path d="M0 15 C0 15 -35 5 -40 -15 C-25 -5 0 5 0 15" />
         <path d="M0 15 C0 15 35 5 40 -15 C25 -5 0 5 0 15" />
         
         {/* Bottom/Outer Leaves */}
         <path d="M0 15 C0 15 -45 20 -50 5 C-30 10 0 15 0 15" />
         <path d="M0 15 C0 15 45 20 50 5 C30 10 0 15 0 15" />
      </g>

      {/* Three Dots below */}
      <g fill="currentColor">
        <circle cx="100" cy="140" r="2" />
        <circle cx="100" cy="150" r="2" />
        <circle cx="100" cy="160" r="2" />
      </g>
    </svg>
  );
}
