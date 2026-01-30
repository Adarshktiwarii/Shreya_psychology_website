export default function RefundPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold font-serif mb-8 text-foreground">Refund Policy</h1>
      
      <div className="space-y-6 text-foreground-dark">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">1. Cancellations</h2>
          <p>
            We require at least 24 hours notice for cancellations. If you cancel your appointment with more than 24 hours notice, you will receive a full refund if payment has already been made.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">2. Late Cancellations and No-Shows</h2>
          <p>
            Cancellations made with less than 24 hours notice and missed appointments (no-shows) are not eligible for a refund.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">3. Processing Refunds</h2>
          <p>
            Refunds will be processed to the original method of payment within 5-7 business days of the cancellation request being approved.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">4. Contact</h2>
          <p>
            To request a refund or cancellation, please contact us at shreya.mhealth@gmail.com or call us at +91 8982108778.
          </p>
        </section>
      </div>
    </div>
  );
}
