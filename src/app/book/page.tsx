import { CalendlyEmbed } from "@/components/booking/CalendlyEmbed";

export default function BookPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-4">Book a Session</h1>
        <p className="text-gray-600">
          Select a time that works for you. We look forward to speaking with you.
        </p>
      </div>
      
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 min-h-[750px]">
        <CalendlyEmbed />
      </div>
    </div>
  );
}
