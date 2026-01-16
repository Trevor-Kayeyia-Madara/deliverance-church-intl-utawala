export default function LivestreamSection() {
  const isLive = false; // Set to true when live

  return (
    <section className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {isLive ? (
          <div>
            <div className="bg-red-600 text-white px-4 py-2 rounded mb-8 inline-block">
              🔴 LIVE NOW
            </div>
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/live_stream?channel=UC..."
              title="Live Stream"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-bold mb-4">Join Us Live</h2>
            <p className="text-xl mb-8">Next service in: 2 days 14 hours 30 minutes</p>
            <p className="text-lg">Join us live wherever you are.</p>
          </div>
        )}
      </div>
    </section>
  );
}