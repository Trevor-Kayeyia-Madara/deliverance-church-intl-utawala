import PrayerRequest from "../components/PrayerRequest";

export default function PrayerPage() {
  return (
    <main>
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Prayer Requests</h1>
          <p className="text-lg">Share your prayer needs with our community</p>
        </div>
      </section>
      <PrayerRequest />
    </main>
  );
}