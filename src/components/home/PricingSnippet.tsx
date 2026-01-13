import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Individual Therapy",
    price: "₹1,500",
    duration: "per session (50 mins)",
    features: ["One-on-one attention", "Personalized treatment plan", "Safe & confidential space", "Online or In-person"],
  },
  {
    name: "Couples Counselling",
    price: "₹2,500",
    duration: "per session (60 mins)",
    features: ["Conflict resolution", "Communication skills", "Relationship rebuilding", "Joint sessions"],
  },
  {
    name: "ADHD Assessment",
    price: "₹5,000",
    duration: "comprehensive package",
    features: ["Standardized testing", "Detailed report", "Diagnosis & Feedback", "Treatment recommendations"],
  },
];

export function PricingSnippet() {
  return (
    <section className="py-20 bg-accent/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground">Invest in your mental health with clear and affordable rates.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 flex flex-col">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-primary">{plan.price}</span>
                <span className="text-sm text-gray-500 block">{plan.duration}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className="block w-full text-center bg-primary/10 text-primary font-semibold py-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Book this Slot
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/pricing" className="text-primary font-medium hover:underline">
            View full pricing details →
          </Link>
        </div>
      </div>
    </section>
  );
}
