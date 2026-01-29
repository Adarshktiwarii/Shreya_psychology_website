"use client";

import { LotusLogo } from "@/components/layout/Logo";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden py-16 md:py-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background">
      {/* Background Watermark - Optimized for aesthetic appeal */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
        <LotusLogo className="w-[120vw] h-[120vw] md:w-[800px] md:h-[800px] text-[var(--logo-teal)] opacity-[0.03] rotate-12" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-10 mb-20"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-foreground drop-shadow-sm leading-tight">
            Inner Balance, <br className="hidden md:block" />
            <span className="text-[var(--logo-teal)] relative inline-block">
               Outer Growth
               <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
               </svg>
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-foreground-muted font-light italic font-serif">
            "Because everyone needs a little help sometimes"
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative space-y-8 text-lg md:text-xl leading-relaxed text-foreground max-w-4xl mx-auto text-left md:text-center bg-white/60 backdrop-blur-md p-10 md:p-14 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/80"
        >
            {/* Decorative quotation mark */}
            <div className="absolute -top-6 -left-4 md:-left-8 text-6xl text-secondary/30 font-serif">“</div>
            
          <p className="font-medium text-2xl text-[var(--logo-teal)] mb-6 tracking-wide">
            Hi, I am Shreya Raghuwanshi, a Licensed Clinical Psychologist.
          </p>
          <p className="text-foreground/90">
            You don't need to have a "problem" to seek help. Sometimes, life just feels heavy - and it's okay to reach out. We all go through moments and situations that confuse, overwhelm or exhaust us, often making us question everything around.
          </p>
          <p className="text-foreground/90">
            Each of us carry experience that shapes us - but they don't define who we are. Healing is not about erasing what you've been through, but about learning to live, understand and grow through it.
          </p>
          <p className="text-foreground/90">
            <span className="font-bold text-[var(--logo-teal)]">ManoArohan</span>, as the name says 'Ascent of the Mind' is here to help you make sense of your emotions and raising awareness from within, one step at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
