export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold font-serif mb-8 text-foreground">Privacy Policy</h1>
      
      <div className="space-y-6 text-foreground-dark">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you book an appointment, fill out a form, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to manage your appointments.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">3. Data Security</h2>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">4. Changes to this Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">5. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact us at shreya.mhealth@gmail.com.
          </p>
        </section>
      </div>
    </div>
  );
}
