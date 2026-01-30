"use client";

import { LotusLogo } from "@/components/layout/Logo";
import { motion } from "framer-motion";
import { useState } from "react";
import { BookingModal } from "@/components/booking/BookingModal";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden py-16 md:py-28 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background">
      {/* Background Watermark - Optimized for aesthetic appeal */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
        <LotusLogo className="w-[120vw] h-[120vw] md:w-[900px] md:h-[900px] text-[var(--logo-teal)] opacity-[0.1]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-10 mb-20"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-foreground drop-shadow-sm leading-tight whitespace-nowrap">
            Inner Balance, <span className="text-[var(--logo-teal)]">Outer Growth</span>
          </h1>
          <p className="text-2xl md:text-3xl text-foreground-muted font-light italic font-serif whitespace-nowrap overflow-hidden text-ellipsis">
            "Because everyone needs a little help sometimes"
          </p>
          
          <div className="pt-8">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-[var(--logo-teal)] px-8 py-4 rounded-full text-white text-lg font-medium hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              Begin Your Journey <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative space-y-6 text-lg leading-relaxed text-foreground max-w-4xl mx-auto text-left bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/80"
        >
          <p className="font-bold text-[var(--logo-teal)] text-2xl mb-4">
            Hi, I’m Shreya Raghuwanshi, a Licensed Clinical Psychologist.
          </p>
          <div className="space-y-6 text-foreground/90">
            <p>
              You don’t need to have answers or explanations to begin.
            </p>
            <p>
              Sometimes life simply feels heavy or hard to carry alone — and that is reason enough to reach out.
            </p>
            <p>
              <span className="font-bold text-[var(--logo-teal)]">ManoArohan</span> is a space to help you make sense of your emotions and find steadiness again, at your own pace.
            </p>
          </div>
        </motion.div>
      </div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
