import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Image src="/images/logo.png" alt="DC Utawala" width={50} height={50} />
          <p className="mt-2">The Church of Choice</p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/events">Events</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Services & Ministries</h3>
          <ul className="space-y-2">
            <li><Link href="/ministries">Ministries</Link></li>
            <li><Link href="/youth">Youth</Link></li>
            <li><Link href="/children">Children</Link></li>
            <li><Link href="/missions">Missions</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p>Utawala, Nairobi</p>
          <p>📞 Phone: +254 123 456 789</p>
          <p>💬 WhatsApp: +254 123 456 789</p>
        </div>
      </div>
      <div className="border-t border-white/20 mt-8 pt-8 text-center">
        <p>© Deliverance Church Utawala</p>
      </div>
    </footer>
  );
}