import Hero from "./components/Hero";
import ServiceTimes from "./components/ServiceTimes";
import WhoWeAre from "./components/WhoWeAre";
import Ministries from "./components/Ministries";
import FeaturedSermon from "./components/FeaturedSermon";
import LivestreamSection from "./components/LivestreamSection";
import Events from "./components/Events";
import Giving from "./components/Giving";
import PastorProfile from "./components/PastorProfile";
import PrayerRequest from "./components/PrayerRequest";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceTimes />
      <WhoWeAre />
      <Ministries />
      <FeaturedSermon />
      <LivestreamSection />
      <Events />
      <Giving />
      <PastorProfile />
      <PrayerRequest />
    </main>
  );
}
