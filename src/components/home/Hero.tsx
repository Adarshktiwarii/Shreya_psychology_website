import { Flower } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-12 md:py-24">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-5">
         <Flower className="w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] text-foreground" strokeWidth={0.5} />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl">
        <div className="space-y-6 mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Inner Balance, Outer Growth
          </h1>
          <p className="text-xl md:text-2xl text-muted-text font-light italic">
            Because everyone needs a little help sometimes
          </p>
        </div>

        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-foreground/80 max-w-3xl mx-auto text-left md:text-center">
          <p>
            Hi, I am Shreya Raghuwanshi, a Licensed Clinical Psychologist.
          </p>
          <p>
            You don't need to have a "problem" to seek help. Sometimes, life just feels heavy - and it's okay to reach out. We all go through moments and situations that confuse, overwhelm or exhaust us, often making us question everything around.
          </p>
          <p>
            Each of us carry experience that shapes us - but they don't define who we are. Healing is not about erasing what you've been through, but about learning to live, understand and grow through it.
          </p>
          <p>
            ManoArohan, as the name says 'Ascent of the Mind' is here to help you make sense of your emotions and raising awareness from within, one step at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
