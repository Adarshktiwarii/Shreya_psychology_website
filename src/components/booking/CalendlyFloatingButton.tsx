"use client";

import { PopupWidget } from "react-calendly";
import { config } from "@/lib/config";
import { useEffect, useState } from "react";

export function CalendlyFloatingButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <PopupWidget
      url={config.calendlyUrl}
      rootElement={document.getElementById("root") || document.body}
      text="Book Now"
      textColor="#ffffff"
      color="#8BA888"
    />
  );
}
