import { cn } from "@/lib/utils";

export function LotusLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-10 h-10", className)}
    >
      {/* Sun rays */}
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M100 20 V35" />
        <path d="M100 20" transform="rotate(30 100 65)" />
        <path d="M100 20" transform="rotate(-30 100 65)" />
        <path d="M100 20" transform="rotate(60 100 65)" />
        <path d="M100 20" transform="rotate(-60 100 65)" />
      </g>
      
      {/* Sun arc */}
      <path 
        d="M80 65 A 20 20 0 0 1 120 65" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
      />

      {/* Lotus Petals */}
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Center Petal */}
        <path d="M100 130 C100 130 85 100 100 65 C115 100 100 130 100 130" />
        
        {/* Inner Side Petals */}
        <path d="M100 130 C100 130 75 110 80 80 C80 80 100 100 100 130" />
        <path d="M100 130 C100 130 125 110 120 80 C120 80 100 100 100 130" />

        {/* Middle Side Petals */}
        <path d="M100 130 C100 130 60 115 65 90 C65 90 90 110 100 130" />
        <path d="M100 130 C100 130 140 115 135 90 C135 90 110 110 100 130" />

        {/* Outer Side Petals */}
        <path d="M100 130 C100 130 40 125 45 105 C45 105 80 120 100 130" />
        <path d="M100 130 C100 130 160 125 155 105 C155 105 120 120 100 130" />
        
        {/* Bottom Petals (Horizontal) */}
        <path d="M100 130 C100 130 50 140 45 125 C45 125 70 135 100 130" />
        <path d="M100 130 C100 130 150 140 155 125 C155 125 130 135 100 130" />
      </g>

      {/* Dots below */}
      <g fill="currentColor">
        <circle cx="100" cy="145" r="3" />
        <circle cx="100" cy="155" r="2" />
        <circle cx="100" cy="162" r="1.5" />
      </g>
    </svg>
  );
}
