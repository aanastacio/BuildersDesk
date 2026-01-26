import type { Metadata } from 'next';
import BookDemoForm from './BookDemoForm';

export const metadata: Metadata = {
  title: 'Book a Demo',
  description:
    'Book a free 30-minute demo of Builders Desk. See how AI phone answering, SMS follow-up, scheduling, and payments can streamline your roofing business.',
  alternates: {
    canonical: 'https://buildersdeskpro.com/book-demo',
  },
};

export default function BookDemo() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Book Your Free Demo</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            See how Builders Desk can transform your roofing business. Schedule a personalized demo with our team.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">What you&apos;ll get in the demo</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <i className="ri-phone-line text-2xl text-orange-500 mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">AI Phone Answering</h3>
                    <p className="text-slate-600">Never miss a lead. Capture every call and book jobs automatically.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-message-2-line text-2xl text-orange-500 mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">SMS Follow-Up</h3>
                    <p className="text-slate-600">Automated texts that keep your pipeline moving and customers informed.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-calendar-check-line text-2xl text-orange-500 mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Scheduling &amp; Job Management</h3>
                    <p className="text-slate-600">See how crews, appointments, and jobs stay organized end-to-end.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-bank-card-line text-2xl text-orange-500 mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Payments &amp; Invoicing</h3>
                    <p className="text-slate-600">Get paid faster with simple invoicing and payment links.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-time-line text-2xl text-orange-500 mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">30-Minute Demo</h3>
                    <p className="text-slate-600">Quick, focused, and tailored to your business.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form (client component) */}
            <BookDemoForm />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Built for Roofing Contractors</h2>
            <p className="text-xl text-slate-600">A simple system to take you from lead to payment—without dropped calls.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
