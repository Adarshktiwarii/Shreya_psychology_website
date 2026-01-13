import { PricingSnippet } from "@/components/home/PricingSnippet";

export default function PricingPage() {
  return (
    <div className="pt-12">
      <div className="container mx-auto px-4 text-center mb-8">
        <h1 className="text-4xl font-bold text-primary">Fees & Insurance</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We believe in transparent pricing. Payment is required at the time of booking or before the session begins.
        </p>
      </div>
      
      {/* Reusing the Pricing Component */}
      <PricingSnippet />

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">Payment Policies</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>Accepted Payment Methods:</strong> UPI, Credit/Debit Cards, Net Banking.
          </p>
          <p>
            <strong>Cancellation Policy:</strong> Please provide at least 24 hours notice for cancellations to avoid being charged the full session fee.
          </p>
          <p>
            <strong>Insurance:</strong> We do not directly bill insurance, but we can provide a receipt (Superbill) for you to submit for reimbursement.
          </p>
        </div>
      </div>
    </div>
  );
}
