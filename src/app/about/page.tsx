"use client";

import { Award, BookOpen, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground"
      >
        About Me
      </motion.h1>

      <div className="space-y-16">
        {/* Intro */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 text-lg leading-relaxed text-foreground"
        >
          <p className="text-2xl font-semibold text-primary-foreground mb-6">
            I'm Shreya Raghuwanshi, Licensed Clinical Psychologist.
          </p>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-secondary/20 space-y-4">
            <p>
              With training in evidence-based psychological interventions, I work with diverse populations using a client-centered, non-judgemental, and collaborative approach.
            </p>
            <p>
              My work integrates clinical expertise with a deep respect for each person’s lived experience.
            </p>
            <p>
              Therapy at ManoArohan is approached with confidentiality, autonomy, and clinical responsibility.
            </p>
            <p>
              While labels are never imposed, assessment and diagnosis are used thoughtfully when they help bring clarity, understanding, and direction to the therapeutic process. Mental health concerns are addressed with both sensitivity and evidence-based care.
            </p>
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-secondary/10 p-8 md:p-10 rounded-3xl border border-secondary/30"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-secondary/20 rounded-xl">
               <Award className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-secondary-foreground">Certifications & Professional Training</h2>
          </div>
          <ul className="space-y-4 ml-2">
            {[
              "M.Phil. in Clinical Psychology",
              "Licensed Clinical Psychologist (RCI Registered)",
              "LGBTQIA+ Affirmative Listening & Mental Health Practice",
              { text: "Green Belt Certification in Career Counselling", sub: "(Univariety in collaboration with UCLA Extension)" },
              "Training in School Counselling"
            ].map((cert, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-2.5 w-2 h-2 rounded-full bg-secondary-foreground/60 shrink-0" />
                <span className="text-lg">
                  {typeof cert === 'string' ? cert : (
                    <>
                      {cert.text}
                      <br/>
                      <span className="text-sm text-foreground-muted">{cert.sub}</span>
                    </>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Expertise */}
        <section>
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Heart className="w-6 h-6 text-primary-foreground" />
            <h2 className="text-3xl font-bold text-center">Areas of Expertise</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Emotional Well-being",
                items: [
                  "Managing stress and anxiety associated with everyday life challenges",
                  "Supporting emotional regulation, resilience, and healthier coping styles"
                ]
              },
              {
                title: "Relationships",
                items: [
                  "Strengthening relationships, communication patterns, and interpersonal skills"
                ]
              },
              {
                title: "Therapeutic Approaches",
                desc: "Use of evidence-based therapeutic approaches, including:",
                items: [
                  "Cognitive Behaviour Therapy (CBT)",
                  "Mindfulness-based interventions",
                  "DBT-informed skills"
                ]
              },
              {
                title: "Assessment",
                text: "Administration and interpretation of psychometric tools and psychological assessments for clinical evaluation and psychodiagnosis, when required."
              }
            ].map((area, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 h-full hover:border-primary/30 group">
                  <h3 className="font-bold mb-4 text-xl group-hover:text-primary-foreground transition-colors">{area.title}</h3>
                  {area.desc && <p className="text-foreground-muted mb-2">{area.desc}</p>}
                  {area.items ? (
                    <ul className="space-y-3 text-foreground">
                      {area.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary-foreground/60">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-foreground">
                      {area.text}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
