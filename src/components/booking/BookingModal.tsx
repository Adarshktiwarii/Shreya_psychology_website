"use client";

import { useState } from "react";
import { X, Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-transparent max-w-lg w-full relative"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white hover:text-[var(--logo-blush)] rounded-full transition-colors z-20 shadow-sm"
              >
                <X className="w-6 h-6 text-foreground-muted" />
              </button>
              <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden">
                <BookingForm />
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 bg-white rounded-[2rem] p-8 shadow-sm border border-secondary/20 h-full">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <Send className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-foreground">Request Sent!</h3>
        <p className="text-foreground-muted">We'll get back to you shortly to confirm your session.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-secondary/20 h-full">
      <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
        Begin Your Journey
      </h3>
      <p className="text-foreground-muted mb-8">
        Please fill out this form to request a counselling session.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="form-name" className="text-sm font-medium text-foreground">Name</label>
            <input
              type="text"
              id="form-name"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--logo-teal)] focus:ring-2 focus:ring-[var(--logo-teal)]/20 outline-none transition-all"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="form-phone" className="text-sm font-medium text-foreground">Phone</label>
            <input
              type="tel"
              id="form-phone"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--logo-teal)] focus:ring-2 focus:ring-[var(--logo-teal)]/20 outline-none transition-all"
              placeholder="+91..."
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="form-email" className="text-sm font-medium text-foreground">Email</label>
          <input
            type="email"
            id="form-email"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--logo-teal)] focus:ring-2 focus:ring-[var(--logo-teal)]/20 outline-none transition-all"
            placeholder="your@email.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="form-concern" className="text-sm font-medium text-foreground">Primary Concern (Optional)</label>
          <textarea
            id="form-concern"
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--logo-teal)] focus:ring-2 focus:ring-[var(--logo-teal)]/20 outline-none transition-all resize-none"
            placeholder="Briefly describe what you'd like to discuss..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[var(--logo-teal)] text-white font-medium py-4 rounded-xl hover:bg-[var(--logo-blush)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            "Request Session"
          )}
        </button>
      </form>
    </div>
  );
}
