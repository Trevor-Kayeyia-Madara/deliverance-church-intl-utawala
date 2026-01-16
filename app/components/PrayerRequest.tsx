export default function PrayerRequest() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">Prayer Request</h2>
        <p className="text-lg text-gray-600 mb-8">
          We are here to pray with you. Your requests are kept confidential.
        </p>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Prayer Request"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gold text-dark px-8 py-3 rounded font-semibold hover:bg-opacity-80"
          >
            Submit Prayer Request
          </button>
        </form>
      </div>
    </section>
  );
}