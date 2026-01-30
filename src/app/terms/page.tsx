export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold font-serif mb-8 text-foreground">Terms of Service</h1>
      
      <div className="space-y-6 text-foreground-dark">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">1. Introduction</h2>
          <p>
            Welcome to ManoArohan. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">2. Services</h2>
          <p>
            ManoArohan provides psychological counselling, therapy, and assessment services. These services are not a substitute for emergency medical care. If you are in a crisis, please contact your nearest emergency services immediately.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">3. Appointments and Cancellations</h2>
          <p>
            Appointments can be booked via our website or by contacting us directly. Please provide at least 24 hours notice for cancellations to avoid being charged for the session.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">4. Confidentiality</h2>
          <p>
            We adhere to strict confidentiality guidelines in accordance with professional ethical standards. Information shared during sessions will not be disclosed to third parties without your consent, except where required by law or to prevent harm.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">5. Contact</h2>
          <p>
            For any questions regarding these terms, please contact us at shreya.mhealth@gmail.com.
          </p>
        </section>
      </div>
    </div>
  );
}
