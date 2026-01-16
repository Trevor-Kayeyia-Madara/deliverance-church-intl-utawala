import Ministries from "../components/Ministries";

export default function MinistriesPage() {
  return (
    <main>
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Ministries</h1>
          <p className="text-lg">Discover the various ministries that make up our church community</p>
        </div>
      </section>
      <Ministries />
    </main>
  );
}