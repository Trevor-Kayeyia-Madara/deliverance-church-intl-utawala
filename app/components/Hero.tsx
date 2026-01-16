export default function Hero() {
  return (
    <section
      className="h-screen bg-linear-to-br from-primary via-primary/90 to-gold/20 relative"
    >
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Deliverance Church Utawala
        </h1>
        <p className="mt-4 text-lg tracking-wide">
          THE CHURCH OF CHOICE
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a className="border border-gold px-6 py-3 rounded text-center">
            ▶ Watch Live
          </a>
          <a className="bg-gold text-dark px-6 py-3 rounded text-center">
            📍 Visit Us
          </a>
        </div>
      </div>
    </section>
  );
}
