import Link from "next/link";
import { Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import { LotusLogo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <LotusLogo className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl font-bold text-foreground">ManoArohan</span>
            </Link>
            <p className="text-sm text-foreground-muted">
              Ascent of the Mind. Guiding you towards mental growth and well-being.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm text-foreground-muted">
              <li><Link href="/" className="hover:text-[var(--logo-teal)] transition-colors">Home</Link></li>
              <li><Link href="#for-you" className="hover:text-[var(--logo-teal)] transition-colors">For You</Link></li>
              <li><Link href="#services" className="hover:text-[var(--logo-teal)] transition-colors">Services</Link></li>
              <li><Link href="#about" className="hover:text-[var(--logo-teal)] transition-colors">About</Link></li>
              <li><Link href="#contact" className="hover:text-[var(--logo-teal)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2 text-sm text-foreground-muted">
              <li>Individual Therapy</li>
              <li>Family & Couple Therapy</li>
              <li>Psychological Assessment</li>
              <li>Career Counselling</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-2 text-sm text-foreground-muted">
              <li className="flex items-center gap-2 group">
                <Mail className="h-4 w-4 group-hover:text-[var(--logo-teal)] transition-colors" />
                <a href="mailto:shreya.mhealth@gmail.com" className="hover:text-[var(--logo-teal)] transition-colors">shreya.mhealth@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 group">
                <MapPin className="h-4 w-4 group-hover:text-[var(--logo-teal)] transition-colors" />
                <span>Guna, Madhya Pradesh</span>
              </li>
              <li className="flex items-center gap-4 mt-4">
                <a href="#" className="hover:text-[var(--logo-teal)] transition-colors"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="hover:text-[var(--logo-teal)] transition-colors"><Linkedin className="h-5 w-5" /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-foreground-muted gap-4">
          <div className="flex flex-col gap-1 md:text-left text-center">
            <span>© {new Date().getFullYear()} ManoArohan. All rights reserved.</span>
            <span className="text-xs opacity-70">Designed and developed by Adarsh & Consultants</span>
            <span className="text-xs opacity-70">Made in Bangalore, India</span>
          </div>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-[var(--logo-teal)] transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-[var(--logo-teal)] transition-colors">Privacy Policy</Link>
            <Link href="/refund" className="hover:text-[var(--logo-teal)] transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
