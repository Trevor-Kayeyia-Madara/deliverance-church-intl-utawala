export default function Events() {
  const events = [
    {
      date: "25 Oct",
      title: "Youth Conference",
      description: "A weekend of worship and fellowship for our youth."
    },
    {
      date: "1 Nov",
      title: "Community Outreach",
      description: "Serving our local community with love and care."
    },
    {
      date: "15 Nov",
      title: "Thanksgiving Service",
      description: "Celebrating God's blessings together."
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="bg-gold text-dark px-3 py-1 rounded mb-4 inline-block font-semibold">
                {event.date}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <a href="/events" className="text-gold font-semibold hover:underline">
                View Details →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}