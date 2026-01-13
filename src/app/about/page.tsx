export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-primary">About Mano Arohan</h1>
        
        <div className="prose prose-lg text-gray-700">
          <p className="text-xl font-medium text-foreground">
            Mano Arohan means "Ascent of the Mind". We believe that every individual has the potential for mental growth and well-being.
          </p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Our Philosophy</h2>
          <p>
            Our practice is built on the foundation of empathy, scientific understanding, and a non-judgmental approach. 
            We strive to create a safe space where you can explore your thoughts and feelings openly.
          </p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Meet the Founder</h2>
          <div className="bg-accent/20 p-6 rounded-xl flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-1/3 aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
              {/* Placeholder for Founder Image */}
              <span>Founder Image</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">Shreya Raghuvanshi</h3>
              <p className="text-sm text-primary font-medium mb-4">Clinical Psychologist</p>
              <p>
                With years of experience in clinical psychology, Shreya specializes in cognitive behavioral therapy, 
                trauma-informed care, and relationship counselling. Her goal is to empower clients to lead fulfilling lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
