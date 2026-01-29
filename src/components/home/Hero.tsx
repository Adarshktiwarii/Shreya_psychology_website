"use client";

import { LotusLogo } from "@/components/layout/Logo";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden py-12 md:py-24 bg-gradient-to-b from-background to-secondary/10">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.03]">
        <LotusLogo className="w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] text-foreground animate-pulse duration-[10s]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 mb-16"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground drop-shadow-sm">
            Inner Balance, <br className="hidden md:block" />
            <span className="text-primary-foreground bg-clip-text">Outer Growth</span>
          </h1>
          <p className="text-2xl md:text-3xl text-foreground-muted font-light italic">
            "Because everyone needs a little help sometimes"
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-8 text-lg md:text-xl leading-relaxed text-foreground max-w-3xl mx-auto text-left md:text-center bg-white/40 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-white/50"
        >
          <p className="font-semibold text-2xl text-primary-foreground mb-4">
            Hi, I am Shreya Raghuwanshi, a Licensed Clinical Psychologist.
          </p>
          <p>
            You don't need to have a "problem" to seek help. Sometimes, life just feels heavy - and it's okay to reach out. We all go through moments and situations that confuse, overwhelm or exhaust us, often making us question everything around.
          </p>
          <p>
            Each of us carry experience that shapes us - but they don't define who we are. Healing is not about erasing what you've been through, but about learning to live, understand and grow through it.
          </p>
          <p>
            <span className="font-semibold text-primary-foreground">ManoArohan</span>, as the name says 'Ascent of the Mind' is here to help you make sense of your emotions and raising awareness from within, one step at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
