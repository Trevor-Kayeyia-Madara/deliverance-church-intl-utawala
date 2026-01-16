import FeaturedSermon from "../components/FeaturedSermon";
import LivestreamSection from "../components/LivestreamSection";

export default function SermonsPage() {
  return (
    <main>
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sermons & Messages</h1>
          <p className="text-lg">Watch and listen to our latest sermons and teachings</p>
        </div>
      </section>
      <FeaturedSermon />
      <LivestreamSection />
    </main>
  );
}