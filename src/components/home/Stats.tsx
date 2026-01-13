"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Sessions Completed", value: "500+" },
  { label: "Happy Clients", value: "200+" },
  { label: "Years Experience", value: "5+" },
];

export function Stats() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
              <div className="text-primary-foreground/80 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
