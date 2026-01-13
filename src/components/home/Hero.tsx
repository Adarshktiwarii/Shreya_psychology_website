import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-accent/20 py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Ascent of the Mind: <br />
            <span className="text-primary">Journey to Inner Peace</span>
          </h1>
          <p className="text-xl text-muted-foreground md:max-w-2xl">
            Professional clinical psychology services to help you navigate life's challenges. 
            Find clarity, growth, and mental well-being with Mano Arohan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/therapy"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-foreground bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-10 pointer-events-none hidden lg:block">
        <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#8BA888" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.2,22.9,71.3,34.3C60.4,45.7,49.9,54.9,38.3,62.8C26.7,70.7,14,77.3,0.7,76.1C-12.6,74.9,-26.4,65.9,-39.3,57.1C-52.2,48.3,-64.2,39.7,-72.6,28.3C-81,16.9,-85.8,2.7,-83.4,-10.3C-81,-23.3,-71.4,-35.1,-60.4,-44.6C-49.4,-54.1,-37,-61.3,-24.3,-69.3C-11.6,-77.3,1.4,-86.1,14.7,-85.6C28,-85.1,41.6,-75.3,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
}
