"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { BookingModal } from "@/components/booking/BookingModal";

import { LotusLogo } from "@/components/layout/Logo";

export function ForYouSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="for-you" className="relative container mx-auto px-4 py-16 max-w-5xl scroll-mt-20 overflow-hidden">
      {/* Watermark for this section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none opacity-[0.05]">
        <LotusLogo className="w-[800px] h-[800px] text-[var(--logo-teal)]" />
      </div>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-6xl font-bold mb-6 text-[var(--logo-blush)] font-serif">
          Who This Space Is For
        </h2>
      </motion.div>

      <div className="space-y-16">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-primary/10 via-transparent to-accent/10 blur-3xl rounded-full -z-10"></div>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            <p className="text-2xl md:text-4xl text-foreground font-serif leading-relaxed">
              If life has been feeling a little heavy —
              <br />
              <span className="italic">even if you can’t fully explain why</span> —
              <br />
              <span className="text-[var(--logo-blush)]">this space is for you.</span>
            </p>
          </div>

          <p className="text-base md:text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed pt-4">
            You don’t need to be in crisis to seek support, and you don’t need to arrive with everything clearly defined. Sometimes emotions feel overwhelming, confusing, or simply difficult to carry alone. That, in itself, is reason enough to reach out.
          </p>
        </motion.div>

        {/* Reassurance Card - REMOVED as per user request */}
        
        {/* Checklist */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-12 text-center text-[var(--logo-blush)] font-serif"
          >
            This space may be helpful for you if…
          </motion.h3>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "You experience persistent anxiety, low mood, stress, or emotional exhaustion",
              "You feel stuck in patterns of overthinking, avoidance, or self-doubt",
              "You struggle with confidence, emotional regulation, or feeling understood",
              "Relationships feel challenging, overwhelming, or unsatisfying",
              "You are navigating life transitions, loss, or periods of uncertainty",
              "You sense that something isn’t quite right, even if you can’t name it yet"
            ].map((item, i) => (
              <motion.li 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="flex flex-col p-6 bg-white rounded-2xl border border-gray-100 hover:border-[var(--logo-blush)]/30 hover:shadow-lg transition-all duration-300 group h-full"
              >
                <div className="mb-4 p-3 bg-background rounded-full w-fit group-hover:bg-[var(--logo-blush)]/10 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-[var(--logo-blush)]" />
                </div>
                <span className="text-foreground font-medium leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Philosophy */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--logo-blush)] font-serif">
              Therapy, at your pace
            </h3>
            <div className="space-y-6 text-lg text-foreground-dark leading-relaxed">
              <p>
                Therapy here is not about rushing to conclusions or fitting you into a box. It is a collaborative process of understanding your experiences - gently and thoughtfully.
              </p>
              <p>
                If a clincial concern is present, it can be explored ethically and carefully, with the aim of clarity, self-awareness and appropriate care.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-10 md:p-12 rounded-[2rem] text-center flex flex-col justify-center items-center relative">
             <div className="absolute top-4 left-4 text-6xl text-white/40 font-serif">“</div>
             <h4 className="text-xl md:text-2xl font-serif text-foreground font-medium mb-4 italic relative z-10">
              Beginning doesn’t require certainty.
             </h4>
             <p className="text-lg text-foreground-muted mb-8 relative z-10">
               You don’t need to have all the answers before you begin. We’ll take it one step at a time — together.
             </p>
             <button 
               onClick={() => setIsModalOpen(true)}
               className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full text-[var(--logo-teal)] font-medium hover:bg-[var(--logo-blush)] hover:text-white transition-all shadow-sm hover:shadow-md"
             >
               Start Your Journey <ArrowRight className="w-4 h-4" />
             </button>
          </div>
        </motion.div>
      </div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
