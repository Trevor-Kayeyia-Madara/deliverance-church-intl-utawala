/* eslint-disable react/no-unescaped-entities */
import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import PastorProfile from "../components/PastorProfile";

export default function About() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <PastorProfile />
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Our History</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Founded in Faith</h3>
              <p className="text-gray-600 mb-6">
                Deliverance Church Utawala was established with a vision to create a community where faith,
                fellowship, and service come together to transform lives. Our journey began with a small group
                of believers committed to spreading God's word in Utawala and beyond.
              </p>
              <p className="text-gray-600">
                Over the years, we've grown into a vibrant congregation that welcomes all, nurtures spiritual
                growth, and serves our community with compassion and dedication.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Our Values</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Faith in God's word as our foundation
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Love and compassion for all people
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Community service and outreach
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Spiritual growth and discipleship
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Excellence in worship and ministry
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}