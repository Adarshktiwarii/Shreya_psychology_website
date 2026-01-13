import { ClipboardList } from "lucide-react";
import Link from "next/link";

export default function DiagnosisPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-primary mb-6">Psychological Assessments & Diagnosis</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Comprehensive evaluations to understand cognitive, emotional, and behavioral functioning.
        </p>

        <div className="bg-accent/10 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <ClipboardList className="h-12 w-12 text-primary" />
            </div>
            <div className="flex-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">ADHD Assessment</h2>
                <p className="text-gray-600">
                  A structured evaluation process to diagnose Attention Deficit Hyperactivity Disorder in children and adults.
                  Includes clinical interviews, rating scales, and objective testing.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-2">Diagnostic Clarification</h2>
                <p className="text-gray-600">
                  Assessments for mood disorders, anxiety disorders, and personality patterns to guide effective treatment planning.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">The Process:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 bg-white p-6 rounded-lg">
                  <li>Initial Intake Interview</li>
                  <li>Standardized Testing Sessions</li>
                  <li>Scoring and Analysis</li>
                  <li>Feedback Session & Detailed Report</li>
                </ol>
              </div>

              <div className="pt-4">
                <Link
                  href="/book"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Schedule an Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
