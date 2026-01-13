"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How do I know if I need therapy?",
    answer: "If you're feeling overwhelmed, stuck, or finding it difficult to cope with daily life, therapy can help. It's also great for personal growth and self-understanding.",
  },
  {
    question: "What happens in the first session?",
    answer: "The first session is an intake session where we discuss your background, current challenges, and goals for therapy. It's a chance for us to get to know each other.",
  },
  {
    question: "Is my information kept confidential?",
    answer: "Absolutely. Confidentiality is a cornerstone of therapy. Your information is safe and will not be shared without your consent, except in cases of immediate harm to self or others.",
  },
  {
    question: "Do you offer online sessions?",
    answer: "Yes, we offer secure online video sessions for your convenience and comfort.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-foreground">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              <div
                className={cn(
                  "bg-accent/5 px-4 text-gray-600 overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-48 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
                )}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
