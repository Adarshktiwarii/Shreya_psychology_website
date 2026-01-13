import Link from "next/link";
import { Sunrise, Mail, MapPin, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sunrise className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Mano Arohan</span>
            </div>
            <p className="text-sm text-gray-600">
              Ascent of the Mind. Guiding you towards mental growth and well-being.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/therapy" className="hover:text-primary">Therapy Services</Link></li>
              <li><Link href="/diagnosis" className="hover:text-primary">Diagnosis</Link></li>
              <li><Link href="/pricing" className="hover:text-primary">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Individual Therapy</li>
              <li>Couples Counselling</li>
              <li>ADHD Assessment</li>
              <li>Anxiety & Depression</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@manoarohan.com" className="hover:text-primary">contact@manoarohan.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Delhi, India</span>
              </li>
              <li className="flex items-center gap-4 mt-4">
                <a href="#" className="hover:text-primary"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="hover:text-primary"><Linkedin className="h-5 w-5" /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Mano Arohan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
