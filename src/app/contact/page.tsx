import { CalendlyEmbed } from "@/components/booking/CalendlyEmbed";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
        Contact
      </h1>

      <div className="grid gap-12 md:grid-cols-2 mb-16">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-foreground/80 mb-6">
              If you have any questions or would like to schedule a consultation, please feel free to reach out.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-foreground/80">
                <Mail className="w-5 h-5 text-secondary-foreground" />
                <a href="mailto:contact@manoarohan.com" className="hover:text-primary transition-colors">
                  contact@manoarohan.com
                </a>
              </div>
              {/* Add more contact info if provided later */}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Location</h2>
            <div className="flex items-start gap-3 text-foreground/80">
              <MapPin className="w-5 h-5 text-secondary-foreground mt-1" />
              <div>
                <p>Sessions are available in both in-person and online formats.</p>
                {/* Specific address can be added here */}
              </div>
            </div>
          </section>
        </div>

        <div className="bg-secondary/10 p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-6">Schedule a Session</h2>
          <p className="text-foreground/80 mb-6">
            Ready to start your journey? You can book a session directly through the calendar below.
          </p>
          <div className="bg-white rounded-lg overflow-hidden h-[600px] border border-gray-200">
             <CalendlyEmbed />
          </div>
        </div>
      </div>
    </div>
  );
}
