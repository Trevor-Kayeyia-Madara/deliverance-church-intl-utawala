export default function Giving() {
  return (
    <section className="bg-primary text-white py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Giving</h2>
        <p className="text-lg mb-8">Your generosity fuels the work of God.</p>
        <div className="space-y-4 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">M-Pesa Paybill</h3>
            <p>Business No: 123456</p>
            <p>Account: Tithe</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Bank Details</h3>
            <p>Bank: ABC Bank</p>
            <p>Account: 1234567890</p>
            <p>Name: Deliverance Church Utawala</p>
          </div>
        </div>
        <a href="/give" className="bg-gold text-dark px-8 py-4 rounded font-semibold text-lg hover:bg-opacity-80">
          Give Online
        </a>
      </div>
    </section>
  );
}