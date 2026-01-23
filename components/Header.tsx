
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Builders Desk Logo" 
              width={330} 
              height={110} 
              className="w-auto"
              style={{height: '88px'}}
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-slate-300 hover:text-orange-500 font-medium transition-colors">
              Home
            </Link>
            <Link href="/roofing-crm" className="text-slate-300 hover:text-orange-500 font-medium transition-colors">
              Roofing CRM
            </Link>
            <Link href="/product" className="text-slate-300 hover:text-orange-500 font-medium transition-colors">
              How It Works
            </Link>
            <Link href="/pricing" className="text-slate-300 hover:text-orange-500 font-medium transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-orange-500 font-medium transition-colors">
              About
            </Link>
            <a href="tel:8774785356" className="text-slate-300 hover:text-orange-500 font-medium transition-colors">
              (877) 478-5356
            </a>
            <Link href="/book-demo" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap">
              Book Demo
            </Link>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-slate-300 hover:text-orange-500 cursor-pointer"
            aria-label="Toggle menu"
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-slate-800">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-slate-300 hover:text-orange-500 font-medium transition-colors py-2">
                Home
              </Link>
              <Link href="/roofing-crm" className="text-slate-300 hover:text-orange-500 font-medium transition-colors py-2">
                Roofing CRM
              </Link>
              <Link href="/product" className="text-slate-300 hover:text-orange-500 font-medium transition-colors py-2">
                How It Works
              </Link>
              <Link href="/pricing" className="text-slate-300 hover:text-orange-500 font-medium transition-colors py-2">
                Pricing
              </Link>
              <Link href="/about" className="text-slate-300 hover:text-orange-500 font-medium transition-colors py-2">
                About
              </Link>
              <a href="tel:8774785356" className="text-slate-300 hover:text-orange-500 font-medium transition-colors py-2">
                (877) 478-5356
              </a>
              <Link href="/book-demo" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-center whitespace-nowrap">
                Book Demo
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
