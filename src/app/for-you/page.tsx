"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ForYouPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground"
      >
        Who This Space Is For
      </motion.h1>

      <div className="space-y-20">
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <p className="text-xl md:text-3xl text-foreground font-medium leading-relaxed">
            If life has been feeling a little heavy — even if you can’t fully explain why — this space is for you.
          </p>
          <p className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto">
            You don’t need to be in crisis to seek support, and you don’t need to arrive with everything clearly defined. Sometimes emotions feel overwhelming, confusing, or simply difficult to carry alone. That, in itself, is reason enough to reach out.
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-secondary/20 p-8 md:p-12 rounded-3xl border border-secondary/30 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/30 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-secondary-foreground relative z-10">
            You don’t have to have it all figured out
          </h2>
          <div className="space-y-4 text-lg text-foreground leading-relaxed relative z-10">
            <p>
              It’s also okay if you feel that something more specific might be going on. Wanting clarity, understanding, or even a diagnosis does not mean you are weak or “labelling” yourself. Often, it can be an important step toward making sense of your experience and receiving the right kind of support.
            </p>
          </div>
        </motion.section>

        <section>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold mb-10 text-center"
          >
            This space may be helpful for you if…
          </motion.h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {[
              "You experience persistent anxiety, low mood, stress, or emotional exhaustion",
              "You feel stuck in patterns of overthinking, avoidance, or self-doubt",
              "You struggle with confidence, emotional regulation, or feeling understood",
              "Relationships feel challenging, overwhelming, or unsatisfying",
              "You are navigating life transitions, loss, or periods of uncertainty",
              "You sense that something isn’t quite right, even if you can’t name it yet"
            ].map((item, i) => (
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle2 className="w-6 h-6 text-[var(--logo-teal)] shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Therapy, at your pace
          </h2>
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              Therapy here is not about rushing to conclusions or fitting you into a box. It is a collaborative process of understanding your experiences — gently and thoughtfully. If a clinical concern is present, it can be explored ethically and carefully, with the aim of clarity, self-awareness, and appropriate care.
            </p>
            <p>
              You are not defined by a diagnosis. However, having language for what you’re experiencing can sometimes bring relief, direction, and validation. Whether you are seeking reflection, emotional support, or clinical understanding, this space is here to meet you where you are.
            </p>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-primary/20 to-accent/20 p-10 md:p-16 rounded-3xl"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Beginning doesn’t require certainty
          </h2>
          <p className="text-xl md:text-2xl text-foreground italic font-light">
            "You don’t need to have all the answers before you begin.
            <br className="my-2" />
            We’ll take it one step at a time — together."
          </p>
        </motion.section>
      </div>
    </div>
  );
}
