import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-['Pacifico'] text-white">Builders Desk</span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              The complete workflow platform for roofing contractors.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/product" className="text-slate-400 hover:text-orange-500 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-400 hover:text-orange-500 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/roofing-crm" className="text-slate-400 hover:text-orange-500 transition-colors">
                  Roofing CRM
                </Link>
              </li>
              <li>
                <Link href="/book-demo" className="text-slate-400 hover:text-orange-500 transition-colors">
                  Book a Demo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-orange-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-orange-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="mailto:info@buildersdeskpro.com" className="text-slate-400 hover:text-orange-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:8774785356" className="text-slate-400 hover:text-orange-500 transition-colors">
                  (877) 478-5356
                </a>
              </li>
              <li>
                <a href="mailto:info@buildersdeskpro.com" className="text-slate-400 hover:text-orange-500 transition-colors">
                  info@buildersdeskpro.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2024 Builders Desk. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="text-slate-400 hover:text-orange-500 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-orange-500 transition-colors text-sm">
              Terms of Service
            </Link>
            <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-orange-500 transition-colors text-sm">
              Made with Readdy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
