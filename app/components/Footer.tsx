import Link from 'next/link';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gold mb-4">British Nanny Co.</h3>
            <p className="text-sm text-gray-300">
              Highland Park's premier British nanny placement service. Thoroughly vetted, professionally trained nannies for discerning families.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/nannies" className="text-sm text-gray-300 hover:text-gold transition-colors">Our Nannies</Link></li>
              <li><Link href="/about" className="text-sm text-gray-300 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-300 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Highland Park, Dallas, TX</li>
              <li>Email: info@britishnanny.co</li>
              <li>Phone: (214) 555-NANNY</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} British Nanny Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
