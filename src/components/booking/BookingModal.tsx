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
                className="absolute top-3 right-3 p-1.5 bg-white/80 hover:bg-white hover:text-foreground rounded-full transition-colors z-20 shadow-sm"
              >
                <X className="w-5 h-5 text-foreground-muted" />
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

const inputClass = "w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[var(--logo-teal)] focus:ring-2 focus:ring-[var(--logo-teal)]/20 outline-none transition-all text-sm";
const labelClass = "text-xs font-medium text-foreground";
const selectClass = "w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[var(--logo-teal)] focus:ring-2 focus:ring-[var(--logo-teal)]/20 outline-none transition-all text-sm appearance-none bg-white";

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xpqjrvvw", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again or contact us directly.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center space-y-5 bg-white rounded-[2rem] p-6 shadow-sm border border-secondary/20 h-full">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-serif font-bold text-foreground">Request Sent Successfully!</h3>
        <p className="text-foreground-muted max-w-sm leading-relaxed text-sm">
          Thank you for reaching out. I will review your details and get back to you within <span className="font-semibold text-foreground">24–48 hours</span>.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-sm text-[var(--logo-teal)] hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2rem] p-5 md:p-6 shadow-sm border border-secondary/20 h-full">
      <h3 className="text-xl font-serif font-bold text-foreground mb-0.5">
        Begin Your Journey
      </h3>
      <p className="text-foreground-muted mb-4 text-xs">
        Fill out this form to request a counselling session.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Row 1: Name, Age, Gender */}
        <div className="grid grid-cols-2 md:grid-cols-[1fr_80px_1fr] gap-3">
          <div className="space-y-1 col-span-2 md:col-span-1">
            <label htmlFor="form-name" className={labelClass}>Full Name <span className="text-red-400">*</span></label>
            <input type="text" id="form-name" name="Full Name" required className={inputClass} placeholder="Your full name" />
          </div>
          <div className="space-y-1">
            <label htmlFor="form-age" className={labelClass}>Age <span className="text-red-400">*</span></label>
            <input type="number" id="form-age" name="Age" required min="5" max="120" className={inputClass} placeholder="Age" />
          </div>
          <div className="space-y-1">
            <label htmlFor="form-gender" className={labelClass}>Gender <span className="text-red-400">*</span></label>
            <select id="form-gender" name="Gender" required className={selectClass}>
              <option value="">Select</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Prefer not to say">Prefer not to say</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Row 2: Occupation, Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-1">
            <label htmlFor="form-occupation" className={labelClass}>Occupation / Education <span className="text-red-400">*</span></label>
            <input type="text" id="form-occupation" name="Occupation / Educational Status" required className={inputClass} placeholder="e.g. Student, Professional" />
          </div>
          <div className="space-y-1">
            <label htmlFor="form-phone" className={labelClass}>Contact Number <span className="text-red-400">*</span></label>
            <input type="tel" id="form-phone" name="Contact Number" required className={inputClass} placeholder="+91..." />
          </div>
        </div>

        {/* Row 3: Email, Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-1">
            <label htmlFor="form-email" className={labelClass}>Email <span className="text-red-400">*</span></label>
            <input type="email" id="form-email" name="Email" required className={inputClass} placeholder="your@email.com" />
          </div>
          <div className="space-y-1">
            <label htmlFor="form-address" className={labelClass}>Address <span className="text-foreground-muted text-[10px]">(optional)</span></label>
            <input type="text" id="form-address" name="Address" className={inputClass} placeholder="City, State" />
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* Row 4: Presenting Concerns */}
        <div className="space-y-1">
          <label htmlFor="form-concern" className={labelClass}>Presenting Concerns <span className="text-red-400">*</span></label>
          <textarea
            id="form-concern"
            name="Presenting Concerns"
            rows={2}
            required
            className={`${inputClass} resize-none`}
            placeholder="Briefly describe what you'd like to discuss..."
          />
        </div>

        {/* Row 5: Prior therapy, Medical treatment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-1">
            <label htmlFor="form-prior-therapy" className={labelClass}>Sought therapy before? <span className="text-red-400">*</span></label>
            <select id="form-prior-therapy" name="Prior Therapy/Counselling" required className={selectClass}>
              <option value="">Select</option>
              <option value="No, first time">No, first time</option>
              <option value="Yes, in the past">Yes, in the past</option>
              <option value="Yes, currently in therapy">Yes, currently</option>
            </select>
          </div>
          <div className="space-y-1">
            <label htmlFor="form-medical" className={labelClass}>Under psychiatric/medical treatment? <span className="text-red-400">*</span></label>
            <select id="form-medical" name="Psychiatric/Medical Treatment" required className={selectClass}>
              <option value="">Select</option>
              <option value="No">No</option>
              <option value="Yes, psychiatric">Yes, psychiatric</option>
              <option value="Yes, medical">Yes, medical</option>
              <option value="Yes, both">Yes, both</option>
            </select>
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* Row 6: Session mode, Time preference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-1">
            <label htmlFor="form-session-mode" className={labelClass}>Session Mode <span className="text-red-400">*</span></label>
            <select id="form-session-mode" name="Session Mode" required className={selectClass}>
              <option value="">Select</option>
              <option value="Online">Online</option>
              <option value="Offline (In-person)">Offline (In-person)</option>
              <option value="No preference">No preference</option>
            </select>
          </div>
          <div className="space-y-1">
            <label htmlFor="form-time" className={labelClass}>Time Preference <span className="text-red-400">*</span></label>
            <select id="form-time" name="Time Preference" required className={selectClass}>
              <option value="">Select</option>
              <option value="Morning (10–12 PM)">Morning (10–12 PM)</option>
              <option value="Afternoon (12–3 PM)">Afternoon (12–3 PM)</option>
              <option value="Evening (3–6 PM)">Evening (3–6 PM)</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <p className="text-xs text-red-500 text-center bg-red-50 py-2 rounded-lg">{error}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[var(--logo-teal)] text-white font-medium py-3 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-3.5 h-3.5" />
              Request Session
            </>
          )}
        </button>

        <p className="text-[10px] text-center text-foreground-muted">
          Your information is kept strictly confidential.
        </p>
      </form>
    </div>
  );
}
