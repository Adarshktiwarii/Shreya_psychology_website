import { Brain, Heart, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function TherapyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">Therapy Services</h1>
      
      <div className="grid gap-12 max-w-4xl mx-auto">
        {/* Individual Therapy */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Brain className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Individual Therapy</h2>
              <p className="text-gray-600 mb-6">
                One-on-one sessions designed to help you navigate personal challenges, anxiety, depression, and self-discovery.
                We use evidence-based approaches tailored to your unique needs.
              </p>
              <h3 className="font-semibold mb-3">Common areas of focus:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                {["Anxiety & Panic", "Depression", "Stress Management", "Self-Esteem", "Trauma Recovery", "Life Transitions"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/book" className="text-primary font-medium hover:underline">
                Book an Individual Session →
              </Link>
            </div>
          </div>
        </div>

        {/* Couples Counselling */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-secondary/20 rounded-lg">
              <Heart className="h-8 w-8 text-secondary-foreground" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Couples Counselling</h2>
              <p className="text-gray-600 mb-6">
                Strengthen your relationship, improve communication, and resolve conflicts.
                Whether you are dating, married, or separating, we provide a neutral ground for constructive dialogue.
              </p>
              <Link href="/book" className="text-primary font-medium hover:underline">
                Book a Couples Session →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
