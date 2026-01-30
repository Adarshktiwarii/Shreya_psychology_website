"use client";

import { Award, Heart } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-24 max-w-5xl scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-[var(--logo-teal)] font-medium text-lg uppercase tracking-wider mb-2 block">Licensed Clinical Psychologist</span>
        <h2 className="text-4xl md:text-6xl font-bold text-foreground font-serif">
          About Me
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-12 gap-12 items-start">
        {/* Intro Column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-7 space-y-8"
        >
          <div className="relative">
             <div className="absolute -left-6 -top-6 w-20 h-20 bg-primary/20 rounded-full blur-2xl -z-10"></div>
             <p className="text-3xl font-serif text-secondary-foreground leading-tight">
              Hi, I'm <span className="text-[var(--logo-teal)]">Shreya Raghuwanshi</span>.
             </p>
          </div>
          
          <div className="prose prose-lg text-foreground/90 leading-relaxed space-y-6">
            <p>
              With training in evidence-based psychological interventions, I work with diverse populations using a client-centered, non-judgemental, and collaborative approach.
            </p>
            <p>
              My work integrates clinical expertise with a deep respect for each person’s lived experience. Therapy at <span className="font-semibold text-[var(--logo-teal)]">ManoArohan</span> is approached with confidentiality, autonomy, and clinical responsibility.
            </p>
            <div className="bg-gradient-to-br from-white to-background p-6 rounded-2xl border-l-4 border-[var(--logo-teal)] shadow-sm my-8">
              <p className="italic text-foreground-muted m-0">
                "While labels are never imposed, assessment and diagnosis are used thoughtfully when they help bring clarity, understanding, and direction to the therapeutic process. Mental health concerns are addressed with both sensitivity and evidence-based care."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Certifications Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="md:col-span-5 relative"
        >
          <div className="sticky top-24">
            <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-secondary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-10 -mt-10 blur-xl"></div>
              
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="p-3 bg-secondary/10 rounded-2xl text-secondary-foreground">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Credentials</h3>
              </div>
              
              <ul className="space-y-6 relative z-10">
                {[
                  "M.Phil. in Clinical Psychology",
                  "Licensed Clinical Psychologist (RCI Registered)",
                  "LGBTQIA+ Affirmative Listening & Mental Health Practice",
                  { text: "Green Belt Certification in Career Counselling", sub: "Univariety with UCLA Extension" },
                  "Training in School Counselling"
                ].map((cert, i) => (
                  <li key={i} className="flex gap-4 group">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[var(--logo-teal)] shrink-0 group-hover:scale-125 transition-transform" />
                    <div className="flex flex-col">
                      <span className="font-medium text-foreground text-sm md:text-base">
                        {typeof cert === 'string' ? cert : cert.text}
                      </span>
                      {typeof cert !== 'string' && (
                        <span className="text-xs text-foreground-muted mt-0.5">{cert.sub}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Areas of Expertise - Full Width */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mt-24 md:mt-32"
      >
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl text-[var(--logo-teal)] mb-4">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold font-serif text-foreground">Areas of Expertise</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Emotional Well-being",
              icon: "🌱",
              items: ["Stress & Anxiety", "Emotional Regulation", "Resilience Building"]
            },
            {
              title: "Relationships",
              icon: "🤝",
              items: ["Relationship Dynamics", "Communication Skills", "Interpersonal Growth"]
            },
            {
              title: "Therapeutic Approaches",
              icon: "🧠",
              items: ["CBT", "Mindfulness", "DBT-informed skills"]
            },
            {
              title: "Assessment",
              icon: "📊",
              items: ["Psychometric Tools", "Clinical Evaluation", "Psychodiagnosis"]
            }
          ].map((area, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col items-center text-center h-full"
            >
              <span className="text-4xl mb-6 bg-background p-4 rounded-2xl">{area.icon}</span>
              <h4 className="font-bold text-lg mb-4 text-foreground">{area.title}</h4>
              <ul className="space-y-2 text-sm text-foreground-muted">
                {area.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
