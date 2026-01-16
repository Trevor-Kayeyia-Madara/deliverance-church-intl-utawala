export default function Ministries() {
  const ministries = [
    "Children Church",
    "Youth Ministry",
    "Men Fellowship",
    "Women Fellowship",
    "Worship Team",
    "Missions & Outreach"
  ];

  return (
    <section className="bg-yellow-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Ministries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg hover:border-2 hover:border-gold transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary text-center">{ministry}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}