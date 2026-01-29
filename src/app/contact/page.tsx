"use client";

import { CalendlyEmbed } from "@/components/booking/CalendlyEmbed";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground"
      >
        Contact
      </motion.h1>

      <div className="grid gap-12 md:grid-cols-2 mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary-foreground">Get in Touch</h2>
            <p className="text-foreground-muted mb-6">
              If you have any questions or would like to schedule a consultation, please feel free to reach out.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3 text-foreground group">
                <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <Mail className="w-5 h-5 text-secondary-foreground" />
                </div>
                <a href="mailto:shreya.mhealth@gmail.com" className="hover:text-[var(--logo-teal)] transition-colors mt-1 font-medium">
                  shreya.mhealth@gmail.com
                </a>
              </div>
              
              <div className="flex items-start gap-3 text-foreground group">
                <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <Phone className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div className="flex flex-col mt-1">
                  <a href="tel:+918982108778" className="hover:text-[var(--logo-teal)] transition-colors font-medium">
                    +91 8982108778
                  </a>
                  <span className="text-sm text-foreground-muted">(Available on WhatsApp)</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-foreground group">
                <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <Clock className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div className="flex flex-col mt-1">
                  <span className="font-medium">Mon - Fri: 10:00 AM - 6:00 PM</span>
                  <span className="font-medium">Sat: 10:00 AM - 2:00 PM</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-secondary-foreground">Location</h2>
            <div className="flex items-start gap-3 text-foreground group">
              <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                <MapPin className="w-5 h-5 text-secondary-foreground" />
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
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-8 rounded-3xl shadow-sm border border-secondary/20"
        >
          <h2 className="text-2xl font-semibold mb-6 text-secondary-foreground">Schedule a Session</h2>
          <p className="text-foreground-muted mb-6">
            Ready to start your journey? You can book a session directly through the calendar below.
          </p>
          <div className="bg-background rounded-xl overflow-hidden h-[600px] border border-gray-100">
             <CalendlyEmbed />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
