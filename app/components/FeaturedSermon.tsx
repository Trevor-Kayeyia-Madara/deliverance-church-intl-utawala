export default function FeaturedSermon() {
  return (
    <section className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Featured Sermon"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Featured Sermon</h2>
          <h3 className="text-xl font-semibold mb-2">The Power of Faith</h3>
          <p className="text-gold mb-2">Preacher: Pastor John Doe</p>
          <p className="text-gold mb-4">Date: October 15, 2023</p>
          <p className="mb-6">Explore the transformative power of faith in this inspiring message from our recent service.</p>
          <a href="/sermons" className="bg-gold text-dark px-6 py-3 rounded font-semibold hover:bg-opacity-80">
            View Sermon Library →
          </a>
        </div>
      </div>
    </section>
  );
}