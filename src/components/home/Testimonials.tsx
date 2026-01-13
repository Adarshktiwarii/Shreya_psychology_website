export function Testimonials() {
  const testimonials = [
    {
      quote: "Mano Arohan has been a safe haven for me. The therapy sessions have helped me understand myself better and navigate my anxiety with confidence.",
      author: "Priya S.",
      role: "Client",
    },
    {
      quote: "I was hesitant about therapy, but the approach here is so warm and non-judgmental. It truly feels like a partnership in my mental health journey.",
      author: "Rahul M.",
      role: "Client",
    },
    {
      quote: "The couples counselling saved our relationship. We learned how to communicate effectively and support each other.",
      author: "Anjali & Vikram",
      role: "Couple",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-accent/10 p-8 rounded-xl relative">
              <div className="text-4xl text-primary absolute top-4 left-4 opacity-30">"</div>
              <p className="text-gray-700 italic mb-6 relative z-10">{t.quote}</p>
              <div>
                <div className="font-bold text-foreground">{t.author}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
