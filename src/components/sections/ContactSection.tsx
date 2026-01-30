"use client";

import { BookingForm } from "@/components/booking/BookingModal";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { LotusLogo } from "@/components/layout/Logo";

export function ContactSection() {
  return (
    <section id="contact" className="relative container mx-auto px-4 py-16 max-w-4xl scroll-mt-20 overflow-hidden">
      {/* Watermark for this section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none opacity-[0.05]">
        <LotusLogo className="w-[800px] h-[800px] text-[var(--logo-teal)]" />
      </div>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground font-serif">
          Contact
        </h2>
      </motion.div>

      <div className="grid gap-8 md:gap-12 md:grid-cols-2 mb-12 md:mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {/* ... existing contact details ... */}
          <section>
            <h3 className="text-2xl font-semibold mb-4 text-foreground font-serif">Get in Touch</h3>
            <p className="text-foreground-muted mb-6">
              If you have any questions or would like to schedule a consultation, please feel free to reach out.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3 text-foreground group">
                <div className="p-2 bg-[var(--logo-teal)]/10 rounded-lg group-hover:bg-[var(--logo-teal)]/20 transition-colors">
                  <Mail className="w-5 h-5 text-[var(--logo-teal)]" />
                </div>
                <a href="mailto:shreya.mhealth@gmail.com" className="hover:text-foreground transition-colors mt-1 font-medium">
                  shreya.mhealth@gmail.com
                </a>
              </div>
              
              <div className="flex items-start gap-3 text-foreground group">
                <div className="p-2 bg-[var(--logo-teal)]/10 rounded-lg group-hover:bg-[var(--logo-teal)]/20 transition-colors">
                  <Phone className="w-5 h-5 text-[var(--logo-teal)]" />
                </div>
                <div className="flex flex-col mt-1">
                  <a href="tel:+918982108778" className="hover:text-foreground transition-colors font-medium">
                    +91 8982108778
                  </a>
                  <span className="text-sm text-foreground-muted">(Available on WhatsApp)</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-foreground group">
                <div className="p-2 bg-[var(--logo-teal)]/10 rounded-lg group-hover:bg-[var(--logo-teal)]/20 transition-colors">
                  <Clock className="w-5 h-5 text-[var(--logo-teal)]" />
                </div>
                <div className="flex flex-col mt-1">
                  <span className="font-medium">Mon - Fri: 10:00 AM - 6:00 PM</span>
                  <span className="font-medium">Sat: 10:00 AM - 2:00 PM</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-4 text-foreground font-serif">Location</h3>
            <div className="flex items-start gap-3 text-foreground group">
              <div className="p-2 bg-[var(--logo-teal)]/10 rounded-lg group-hover:bg-[var(--logo-teal)]/20 transition-colors">
                <MapPin className="w-5 h-5 text-[var(--logo-teal)]" />
              </div>
              <div className="space-y-2 mt-1">
                <p className="text-foreground-muted">Sessions are available in both in-person and online formats.</p>
                <p className="font-medium text-foreground">
                  Near D.E.O Office, A.B Road,<br/>
                  Guna, Madhya Pradesh
                </p>
              </div>
            </div>
          </section>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <BookingForm />
        </motion.div>
      </div>
    </section>
  );
}
