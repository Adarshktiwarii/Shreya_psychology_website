import { CheckCircle2 } from "lucide-react";

export default function ForYouPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
        Who This Space Is For
      </h1>

      <div className="space-y-16">
        <section className="text-center space-y-6">
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
            If life has been feeling a little heavy — even if you can’t fully explain why — this space is for you.
          </p>
          <p className="text-lg text-foreground/70">
            You don’t need to be in crisis to seek support, and you don’t need to arrive with everything clearly defined. Sometimes emotions feel overwhelming, confusing, or simply difficult to carry alone. That, in itself, is reason enough to reach out.
          </p>
        </section>

        <section className="bg-secondary/20 p-8 md:p-12 rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            You don’t have to have it all figured out
          </h2>
          <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
            <p>
              It’s also okay if you feel that something more specific might be going on. Wanting clarity, understanding, or even a diagnosis does not mean you are weak or “labelling” yourself. Often, it can be an important step toward making sense of your experience and receiving the right kind of support.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            This space may be helpful for you if…
          </h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {[
              "You experience persistent anxiety, low mood, stress, or emotional exhaustion",
              "You feel stuck in patterns of overthinking, avoidance, or self-doubt",
              "You struggle with confidence, emotional regulation, or feeling understood",
              "Relationships feel challenging, overwhelming, or unsatisfying",
              "You are navigating life transitions, loss, or periods of uncertainty",
              "You sense that something isn’t quite right, even if you can’t name it yet"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 bg-white/50 rounded-lg border border-secondary/20">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Therapy, at your pace
          </h2>
          <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
            <p>
              Therapy here is not about rushing to conclusions or fitting you into a box. It is a collaborative process of understanding your experiences — gently and thoughtfully. If a clinical concern is present, it can be explored ethically and carefully, with the aim of clarity, self-awareness, and appropriate care.
            </p>
            <p>
              You are not defined by a diagnosis. However, having language for what you’re experiencing can sometimes bring relief, direction, and validation. Whether you are seeking reflection, emotional support, or clinical understanding, this space is here to meet you where you are.
            </p>
          </div>
        </section>

        <section className="text-center bg-primary/20 p-8 md:p-12 rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Beginning doesn’t require certainty
          </h2>
          <p className="text-xl text-foreground/80 italic">
            You don’t need to have all the answers before you begin.
            <br />
            We’ll take it one step at a time — together.
          </p>
        </section>
      </div>
    </div>
  );
}
