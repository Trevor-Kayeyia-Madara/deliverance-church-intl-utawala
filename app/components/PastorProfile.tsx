import Image from "next/image";

export default function PastorProfile() {
  return (
    <section className="bg-yellow-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <Image src="/images/pastor.jpg" alt="Pastor" width={400} height={400} className="rounded-lg shadow-lg" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">Meet Our Pastor</h2>
          <h3 className="text-xl font-semibold mb-2">Pastor John Doe</h3>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to Deliverance Church Utawala. It is our joy to serve this community and share the love of Christ with all who come through our doors.
          </p>
          <a href="/pastor" className="bg-gold text-dark px-6 py-3 rounded font-semibold hover:bg-opacity-80">
            Read More →
          </a>
        </div>
      </div>
    </section>
  );
}