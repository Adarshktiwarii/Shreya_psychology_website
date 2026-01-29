"use client";

import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      title: "Individual Therapy (Adults & Adolescents)",
      description: "One-to-one sessions focused on understanding your thoughts, emotions, and behaviours. Sessions are collaborative, confidential, and paced according to your comfort."
    },
    {
      title: "Family Therapy",
      description: "Support for families to improve communication, understanding, and emotional connection."
    },
    {
      title: "Couple Therapy",
      description: "Helping couples navigate relationship concerns, strengthen communication, and build healthier dynamics."
    },
    {
      title: "Psychological Assessment & Psychodiagnosis",
      description: "Evidence-based assessments to aid clinical understanding, diagnosis, and treatment planning when required."
    },
    {
      title: "Career Counselling",
      description: "Structured guidance for academic and career decision-making using validated tools and personalised exploration."
    },
    {
      title: "Workshops",
      description: "Psychoeducational and skill-based workshops on mental health, emotional wellbeing, and coping strategies for groups and institutions."
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground"
      >
        Services
      </motion.h1>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            variants={item}
            className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/20 hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
          >
            <h3 className="text-xl font-bold mb-4 text-secondary-foreground group-hover:text-primary-foreground transition-colors">
              {service.title}
            </h3>
            <p className="text-foreground leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-center p-8 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl shadow-inner"
      >
        <p className="text-2xl font-medium text-foreground">
          Sessions are available in both <span className="text-primary-foreground font-bold">in-person</span> and <span className="text-primary-foreground font-bold">online</span> formats
        </p>
      </motion.div>
    </div>
  );
}
