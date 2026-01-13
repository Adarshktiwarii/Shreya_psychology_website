import { Heart, MessageCircle, Home } from "lucide-react";
import Link from "next/link";

export default function CouplesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-primary mb-6">Couples Counselling</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Rediscover the connection. Building stronger, healthier relationships through open communication and understanding.
        </p>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-full mb-4">
              <Heart className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="font-bold text-lg mb-2">Rebuild Trust</h3>
            <p className="text-sm text-gray-600">
              Work through betrayal or breach of trust in a safe environment.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
              <MessageCircle className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="font-bold text-lg mb-2">Effective Communication</h3>
            <p className="text-sm text-gray-600">
              Learn to express needs and listen to your partner without conflict.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
              <Home className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="font-bold text-lg mb-2">Shared Goals</h3>
            <p className="text-sm text-gray-600">
              Align your vision for the future and navigate life transitions together.
            </p>
          </div>
        </div>

        <div className="bg-accent/20 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Is Couples Counselling Right for Us?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            You don't need to be in crisis to benefit from therapy. Whether you want to deepen your bond or resolve specific issues, we are here to help.
          </p>
          <Link
            href="/book"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-colors"
          >
            Book a Couples Session
          </Link>
        </div>
      </div>
    </div>
  );
}
