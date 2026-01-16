export default function WhoWeAre() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8">Who We Are</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary border-b-2 border-gold pb-2">Vision</h3>
              <p className="mt-2 text-gray-600">To be a church that impacts lives and transforms communities through the power of God&apos;s word.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary border-b-2 border-gold pb-2">Mission</h3>
              <p className="mt-2 text-gray-600">Spreading the gospel, nurturing faith, and serving our community with love and compassion.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary border-b-2 border-gold pb-2">Core Belief</h3>
              <p className="mt-2 text-gray-600">We believe in the Bible as God&apos;s inspired word and Jesus Christ as our savior.</p>
            </div>
          </div>
          <a href="/about" className="inline-block mt-8 bg-gold text-dark px-6 py-3 rounded font-semibold hover:bg-opacity-80">
            Learn More →
          </a>
        </div>
        <div className="bg-linear-to-br from-gold/20 to-primary/20 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-primary mb-4">Join Our Community</h3>
          <p className="text-gray-600">Experience the warmth of our congregation and the power of faith in action.</p>
        </div>
      </div>
    </section>
  );
}