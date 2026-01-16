import Events from "../components/Events";

export default function EventsPage() {
  return (
    <main>
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-lg">Join us for special services, conferences, and community events</p>
        </div>
      </section>
      <Events />
    </main>
  );
}