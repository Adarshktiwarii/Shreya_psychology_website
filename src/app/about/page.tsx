import { Award, BookOpen, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
        About Me
      </h1>

      <div className="space-y-12">
        {/* Intro */}
        <section className="space-y-6 text-lg leading-relaxed text-foreground/80">
          <p className="text-xl font-medium text-foreground">
            I'm Shreya Raghuwanshi, Licensed Clinical Psychologist.
          </p>
          <p>
            With training in evidence-based psychological interventions, I work with diverse populations using a client-centered, non-judgemental, and collaborative approach.
          </p>
          <p>
            My work integrates clinical expertise with a deep respect for each person’s lived experience.
          </p>
          <p>
            Therapy at ManoArohan is approached with confidentiality, autonomy, and clinical responsibility.
          </p>
          <p>
            While labels are never imposed, assessment and diagnosis are used thoughtfully when they help bring clarity, understanding, and direction to the therapeutic process. Mental health concerns are addressed with both sensitivity and evidence-based care.
          </p>
        </section>

        {/* Certifications */}
        <section className="bg-primary/10 p-8 rounded-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-primary-foreground" />
            <h2 className="text-2xl font-bold">Certifications & Professional Training</h2>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-foreground shrink-0" />
              <span>M.Phil. in Clinical Psychology</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-foreground shrink-0" />
              <span>Licensed Clinical Psychologist (RCI Registered)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-foreground shrink-0" />
              <span>LGBTQIA+ Affirmative Listening & Mental Health Practice</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-foreground shrink-0" />
              <span>Green Belt Certification in Career Counselling<br/><span className="text-sm text-muted-text">(Univariety in collaboration with UCLA Extension)</span></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-foreground shrink-0" />
              <span>Training in School Counselling</span>
            </li>
          </ul>
        </section>

        {/* Expertise */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-6 h-6 text-secondary-foreground" />
            <h2 className="text-2xl font-bold">Areas of Expertise</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm h-full">
                <h3 className="font-semibold mb-3 text-lg">Emotional Well-being</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Managing stress and anxiety associated with everyday life challenges</li>
                  <li>• Supporting emotional regulation, resilience, and healthier coping styles</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm h-full">
                <h3 className="font-semibold mb-3 text-lg">Relationships</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Strengthening relationships, communication patterns, and interpersonal skills</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm h-full">
                <h3 className="font-semibold mb-3 text-lg">Therapeutic Approaches</h3>
                <p className="text-foreground/80 mb-2">Use of evidence-based therapeutic approaches, including:</p>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Cognitive Behaviour Therapy (CBT)</li>
                  <li>• Mindfulness-based interventions</li>
                  <li>• DBT-informed skills</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm h-full">
                <h3 className="font-semibold mb-3 text-lg">Assessment</h3>
                <p className="text-foreground/80">
                  Administration and interpretation of psychometric tools and psychological assessments for clinical evaluation and psychodiagnosis, when required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
