import { Brain, Heart, Users, Sparkles, MessageCircle, CloudSun } from "lucide-react";

const services = [
  {
    title: "Individual Therapy",
    description: "One-on-one sessions to address anxiety, depression, and personal growth.",
    icon: Brain,
  },
  {
    title: "Couples Counselling",
    description: "Navigate relationship challenges and build stronger connections.",
    icon: Users,
  },
  {
    title: "ADHD & Diagnosis",
    description: "Professional assessments and diagnosis for ADHD and other conditions.",
    icon: Sparkles,
  },
  {
    title: "Anxiety & Stress",
    description: "Learn coping strategies and tools to manage stress and anxiety.",
    icon: CloudSun,
  },
  {
    title: "Depression Support",
    description: "Compassionate care to help you move through difficult times.",
    icon: Heart,
  },
  {
    title: "Trauma Recovery",
    description: "Safe space to process and heal from past traumatic experiences.",
    icon: MessageCircle,
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive psychological services tailored to your unique needs and journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-100 bg-background hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
