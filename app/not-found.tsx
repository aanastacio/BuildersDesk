import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | Builders Desk',
  description: 'The page you are looking for could not be found. Explore our roofing contractor software solutions.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-8xl font-bold text-orange-500 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Page Not Found
        </h2>
        <p className="text-xl text-slate-300 mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 font-semibold text-slate-900 hover:bg-orange-400 transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            href="/book-demo"
            className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white hover:border-slate-500 transition-colors"
          >
            Book a Demo
          </Link>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <p className="text-slate-400 mb-4">Popular Pages</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/product" className="text-orange-500 hover:text-orange-400 transition-colors">
              Product
            </Link>
            <Link href="/pricing" className="text-orange-500 hover:text-orange-400 transition-colors">
              Pricing
            </Link>
            <Link href="/roofing-crm" className="text-orange-500 hover:text-orange-400 transition-colors">
              Roofing CRM
            </Link>
            <Link href="/about" className="text-orange-500 hover:text-orange-400 transition-colors">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}