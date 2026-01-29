export default function ServicesPage() {
  const services = [
    {
      title: "Individual Therapy (Adults & Adolescents)",
      description: "One-to-one sessions focused on understanding your thoughts, emotions, and behaviours. Sessions are collaborative, confidential, and paced according to your comfort."
    },
    {
      title: "Family Therapy",
      description: "Support for families to improve communication, understanding, and emotional connection."
    },
    {
      title: "Couple Therapy",
      description: "Helping couples navigate relationship concerns, strengthen communication, and build healthier dynamics."
    },
    {
      title: "Psychological Assessment & Psychodiagnosis",
      description: "Evidence-based assessments to aid clinical understanding, diagnosis, and treatment planning when required."
    },
    {
      title: "Career Counselling",
      description: "Structured guidance for academic and career decision-making using validated tools and personalised exploration."
    },
    {
      title: "Workshops",
      description: "Psychoeducational and skill-based workshops on mental health, emotional wellbeing, and coping strategies for groups and institutions."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
        Services
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-secondary-foreground">
              {service.title}
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center p-6 bg-accent/30 rounded-xl">
        <p className="text-xl font-medium text-foreground">
          Sessions are available in both in-person and online formats
        </p>
      </div>
    </div>
  );
}
