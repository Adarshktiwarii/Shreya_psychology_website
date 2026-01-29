import { CalendlyEmbed } from "@/components/booking/CalendlyEmbed";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

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
            
            <div className="space-y-6">
              <div className="flex items-start gap-3 text-foreground/80">
                <Mail className="w-5 h-5 text-secondary-foreground mt-1" />
                <a href="mailto:shreya.mhealth@gmail.com" className="hover:text-[#7da2a9] transition-colors">
                  shreya.mhealth@gmail.com
                </a>
              </div>
              
              <div className="flex items-start gap-3 text-foreground/80">
                <Phone className="w-5 h-5 text-secondary-foreground mt-1" />
                <div className="flex flex-col">
                  <a href="tel:+918982108778" className="hover:text-[#7da2a9] transition-colors">
                    +91 8982108778
                  </a>
                  <span className="text-sm text-muted-text">(Available on WhatsApp)</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-foreground/80">
                <Clock className="w-5 h-5 text-secondary-foreground mt-1" />
                <div className="flex flex-col">
                  <span>Mon - Fri: 10:00 AM - 6:00 PM</span>
                  <span>Sat: 10:00 AM - 2:00 PM</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Location</h2>
            <div className="flex items-start gap-3 text-foreground/80">
              <MapPin className="w-5 h-5 text-secondary-foreground mt-1" />
              <div className="space-y-2">
                <p>Sessions are available in both in-person and online formats.</p>
                <p className="font-medium text-foreground">
                  Near D.E.O Office, A.B Road,<br/>
                  Guna, Madhya Pradesh
                </p>
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
