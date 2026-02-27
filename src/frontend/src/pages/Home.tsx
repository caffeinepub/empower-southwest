export default function Home() {
  return (
    <section
      className="relative bg-navy min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/assets/generated/hero-bg.dim_1440x600.png')" }}
        aria-hidden="true"
      />
      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-navy opacity-60" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <div className="h-0.5 w-8 bg-gold" />
            <span className="text-gold font-sans font-semibold text-sm uppercase tracking-widest">
              Chicago's Southwest Suburbs
            </span>
            <div className="h-0.5 w-8 bg-gold" />
          </div>

          {/* Headline */}
          <h1 className="font-heading font-bold text-cream text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
            Empower <span className="text-gold">Southwest</span>
          </h1>

          {/* Mission Statement */}
          <p className="font-sans text-cream-muted text-lg md:text-xl leading-relaxed max-w-2xl">
            We are committed to building a people-powered movement in Chicago's Southwest suburbs to make government
            accountable and responsive to the needs of working &amp; middle class families.
          </p>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" aria-hidden="true" />
    </section>
  );
}
