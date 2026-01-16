/* eslint-disable react/no-unescaped-entities */
import Giving from "../components/Giving";

export default function GivePage() {
  return (
    <main>
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Give & Support</h1>
          <p className="text-lg text-gray-600">Your generosity helps us continue God's work in our community</p>
        </div>
      </section>
      <Giving />
    </main>
  );
}