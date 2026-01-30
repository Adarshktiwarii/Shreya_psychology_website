import { cn } from "@/lib/utils";

export function LotusLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-10 h-10", className)}
    >
      {/* Sun at top - Updated to match reference */}
      <g transform="translate(100, 45) scale(0.8)">
        <path d="M-20 0 A 20 20 0 0 1 20 0" stroke="currentColor" strokeWidth="2" fill="none" />
        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
           <line x1="0" y1="-8" x2="0" y2="-22" />
           <line x1="12" y1="-5" x2="22" y2="-15" />
           <line x1="-12" y1="-5" x2="-22" y2="-15" />
           <line x1="20" y1="5" x2="32" y2="2" />
           <line x1="-20" y1="5" x2="-32" y2="2" />
        </g>
      </g>

      {/* Lotus Flower - Centered */}
      <g transform="translate(100, 110) scale(0.9)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
         {/* Center Petal */}
         <path d="M0 15 C0 15 -12 -25 0 -50 C12 -25 0 15 0 15" />
         
         {/* Inner Side Petals */}
         <path d="M0 15 C0 15 -25 0 -30 -30 C-18 -18 0 0 0 15" />
         <path d="M0 15 C0 15 25 0 30 -30 C18 -18 0 0 0 15" />
         
         {/* Middle Side Petals */}
         <path d="M0 15 C0 15 -40 5 -45 -20 C-28 -8 0 5 0 15" />
         <path d="M0 15 C0 15 40 5 45 -20 C28 -8 0 5 0 15" />
         
         {/* Outer Leaves */}
         <path d="M0 15 C0 15 -55 20 -60 5 C-35 10 0 15 0 15" />
         <path d="M0 15 C0 15 55 20 60 5 C35 10 0 15 0 15" />
      </g>

      {/* Vertical Dots */}
      <g fill="currentColor">
        <circle cx="100" cy="140" r="2.5" />
        <circle cx="100" cy="152" r="2" />
        <circle cx="100" cy="162" r="1.5" />
      </g>
    </svg>
  );
}
