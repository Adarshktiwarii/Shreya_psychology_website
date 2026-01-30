"use client";

import { motion } from "framer-motion";
import { User, Users, HeartHandshake, FileText, Compass, GraduationCap } from "lucide-react";

import { LotusLogo } from "@/components/layout/Logo";

export function ServicesSection() {
  const services = [
    {
      title: "Individual Therapy",
      subtitle: "(Adults & Adolescents)",
      description: "One-to-one sessions focused on understanding your thoughts, emotions, and behaviours. Sessions are collaborative, confidential, and paced according to your comfort.",
      icon: User,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Family Therapy",
      description: "Support for families to improve communication, understanding, and emotional connection.",
      icon: Users,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Couple Therapy",
      description: "Helping couples navigate relationship concerns, strengthen communication, and build healthier dynamics.",
      icon: HeartHandshake,
      color: "bg-rose-50 text-rose-600"
    },
    {
      title: "Psychological Assessment",
      subtitle: "& Psychodiagnosis",
      description: "Evidence-based assessments to aid clinical understanding, diagnosis, and treatment planning when required.",
      icon: FileText,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Career Counselling",
      description: "Structured guidance for academic and career decision-making using validated tools and personalised exploration.",
      icon: Compass,
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "Workshops",
      description: "Psychoeducational and skill-based workshops on mental health, emotional wellbeing, and coping strategies for groups and institutions.",
      icon: GraduationCap,
      color: "bg-teal-50 text-teal-600"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="relative container mx-auto px-4 py-16 max-w-7xl scroll-mt-20 overflow-hidden">
      {/* Watermark for this section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none opacity-[0.05]">
        <LotusLogo variant="crescent" className="w-[1000px] h-[1000px] text-[var(--logo-teal)]" />
      </div>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground font-serif">
          Services
        </h2>
        <p className="text-lg text-foreground-muted">
          Comprehensive psychological care tailored to your unique journey.
        </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            variants={item}
            className="group relative bg-white p-8 rounded-[2rem] border border-secondary/20 hover:border-[var(--logo-teal)]/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
            
            <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300`}>
              <service.icon className="w-7 h-7" />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-1 text-foreground font-serif">
                {service.title}
              </h3>
              {service.subtitle && (
                <span className="text-sm font-medium text-foreground uppercase tracking-wider block mb-3">
                  {service.subtitle}
                </span>
              )}
              <div className="w-12 h-1 bg-[var(--logo-teal)]/30 mb-4 rounded-full group-hover:w-20 transition-all duration-300"></div>
              <p className="text-foreground-muted leading-relaxed text-lg">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 text-center"
      >
        <div className="inline-block p-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full">
          <div className="bg-white px-8 py-4 rounded-full border border-white/50 shadow-sm">
            <p className="text-xl font-medium text-foreground">
              Sessions available <span className="text-foreground font-bold">In-Person</span> & <span className="text-foreground font-bold">Online</span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
