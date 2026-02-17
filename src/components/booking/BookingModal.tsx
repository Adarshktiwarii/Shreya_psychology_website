"use client";

import { useState } from "react";
import { X, Send, Loader2, CheckCircle } from "lucide-react";
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
              className="bg-transparent max-w-2xl w-full relative max-h-[90vh] overflow-y-auto rounded-[2rem]"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white hover:text-foreground rounded-full transition-colors z-20 shadow-sm sticky"
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

const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--logo-teal)] focus:ring-2 focus:ring-[var(--logo-teal)]/20 outline-none transition-all text-sm";
const labelClass = "text-sm font-medium text-foreground";
const selectClass = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--logo-teal)] focus:ring-2 focus:ring-[var(--logo-teal)]/20 outline-none transition-all text-sm appearance-none bg-white";

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-6 bg-white rounded-[2rem] p-8 shadow-sm border border-secondary/20 h-full">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-foreground">Request Sent Successfully!</h3>
        <p className="text-foreground-muted max-w-sm leading-relaxed">
          Thank you for reaching out. I will review your details and get back to you within <span className="font-semibold text-foreground">24–48 hours</span>.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-4 text-sm text-[var(--logo-teal)] hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-secondary/20 h-full">
      <h3 className="text-2xl font-serif font-bold text-foreground mb-1">
        Begin Your Journey
      </h3>
      <p className="text-foreground-muted mb-6 text-sm">
        Please fill out this form to request a counselling session.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Personal Details */}
        <fieldset className="space-y-4">
          <legend className="text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-3">Personal Details</legend>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="form-name" className={labelClass}>Full Name <span className="text-red-400">*</span></label>
              <input
                type="text"
                id="form-name"
                required
                className={inputClass}
                placeholder="Your full name"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="form-age" className={labelClass}>Age <span className="text-red-400">*</span></label>
              <input
                type="number"
                id="form-age"
                required
                min="5"
                max="120"
                className={inputClass}
                placeholder="Your age"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="form-gender" className={labelClass}>Gender <span className="text-red-400">*</span></label>
              <select id="form-gender" required className={selectClass}>
                <option value="">Select gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="non-binary">Non-binary</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="form-occupation" className={labelClass}>Occupation / Educational Status <span className="text-red-400">*</span></label>
              <input
                type="text"
                id="form-occupation"
                required
                className={inputClass}
                placeholder="e.g. Student, Working Professional"
              />
            </div>
          </div>
        </fieldset>

        {/* Contact Info */}
        <fieldset className="space-y-4">
          <legend className="text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-3">Contact Information</legend>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="form-phone" className={labelClass}>Contact Number <span className="text-red-400">*</span></label>
              <input
                type="tel"
                id="form-phone"
                required
                className={inputClass}
                placeholder="+91..."
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="form-email" className={labelClass}>Email <span className="text-red-400">*</span></label>
              <input
                type="email"
                id="form-email"
                required
                className={inputClass}
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="form-address" className={labelClass}>Address <span className="text-foreground-muted text-xs">(optional)</span></label>
            <input
              type="text"
              id="form-address"
              className={inputClass}
              placeholder="City, State"
            />
          </div>
        </fieldset>

        {/* Clinical Information */}
        <fieldset className="space-y-4">
          <legend className="text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-3">Clinical Information</legend>
          
          <div className="space-y-1.5">
            <label htmlFor="form-concern" className={labelClass}>Presenting Concerns <span className="text-red-400">*</span></label>
            <textarea
              id="form-concern"
              rows={3}
              required
              className={`${inputClass} resize-none`}
              placeholder="Briefly describe what you'd like to discuss or what brought you here..."
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="form-prior-therapy" className={labelClass}>Have you ever sought therapy/counselling before? <span className="text-red-400">*</span></label>
            <select id="form-prior-therapy" required className={selectClass}>
              <option value="">Select</option>
              <option value="no">No, this is my first time</option>
              <option value="yes-past">Yes, in the past</option>
              <option value="yes-current">Yes, I am currently in therapy</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="form-medical" className={labelClass}>Are you currently under psychiatric or medical treatment? <span className="text-red-400">*</span></label>
            <select id="form-medical" required className={selectClass}>
              <option value="">Select</option>
              <option value="no">No</option>
              <option value="yes-psychiatric">Yes, psychiatric treatment</option>
              <option value="yes-medical">Yes, medical treatment</option>
              <option value="yes-both">Yes, both</option>
            </select>
          </div>
        </fieldset>

        {/* Session Preferences */}
        <fieldset className="space-y-4">
          <legend className="text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-3">Session Preferences</legend>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="form-session-mode" className={labelClass}>Session Mode <span className="text-red-400">*</span></label>
              <select id="form-session-mode" required className={selectClass}>
                <option value="">Select mode</option>
                <option value="online">Online</option>
                <option value="offline">Offline (In-person)</option>
                <option value="no-preference">No preference</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="form-time" className={labelClass}>Time Preference <span className="text-red-400">*</span></label>
              <select id="form-time" required className={selectClass}>
                <option value="">Select time</option>
                <option value="morning">Morning (10 AM – 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM – 3 PM)</option>
                <option value="evening">Evening (3 PM – 6 PM)</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>
        </fieldset>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[var(--logo-teal)] text-white font-medium py-4 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Request Session
            </>
          )}
        </button>

        <p className="text-xs text-center text-foreground-muted mt-2">
          Your information is kept strictly confidential.
        </p>
      </form>
    </div>
  );
}
