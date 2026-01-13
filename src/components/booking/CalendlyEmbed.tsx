"use client";

import { InlineWidget } from "react-calendly";
import { config } from "@/lib/config";
import { useEffect, useState } from "react";

export function CalendlyEmbed() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[700px] w-full bg-gray-50 animate-pulse rounded-lg flex items-center justify-center text-gray-400">Loading Calendar...</div>;

  return (
    <div className="w-full h-[700px]">
      <InlineWidget
        url={config.calendlyUrl}
        styles={{ height: "100%", width: "100%" }}
      />
    </div>
  );
}
