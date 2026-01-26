import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Builders Desk. Learn how we collect, use, and protect information when you visit our site or request a demo.',
  alternates: {
    canonical: 'https://buildersdeskpro.com/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-600">Effective date: January 20, 2026</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-slate-700 leading-relaxed mb-8">
            This Privacy Policy explains how Builders Desk collects, uses, and protects information when you visit our website or request information about our services.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Information we collect</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">•</span>
                <span>Contact information (such as name, email, phone number, company name) when you submit a form or request a demo.</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">•</span>
                <span>Usage data (such as pages visited and device/browser information) to improve website performance and user experience.</span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How we use information</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">•</span>
                <span>To respond to your inquiries and provide requested information.</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">•</span>
                <span>To schedule demos and communicate about your request.</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">•</span>
                <span>To improve our website, content, and services.</span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">SMS messaging (A2P / 10DLC disclosure)</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              If you provide your phone number and explicitly opt in (for example, by checking an SMS consent box on a website form), we may send SMS messages related to your request. Messages may include confirmations, reminders, missed-call follow-ups, and customer support responses.
            </p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="font-semibold mr-2 whitespace-nowrap">Consent:</span>
                <span>You only receive texts if you request information or services and opt in.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2 whitespace-nowrap">Message frequency:</span>
                <span>Varies based on your interaction.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2 whitespace-nowrap">Fees:</span>
                <span>Message & data rates may apply.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2 whitespace-nowrap">Opt-out:</span>
                <span>Reply STOP at any time to unsubscribe.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2 whitespace-nowrap">Help:</span>
                <span>Reply HELP for assistance.</span>
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-4">
              We do not sell your phone number, and we do not send SMS marketing messages without your express consent.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Sharing</h2>
            <p className="text-slate-700 leading-relaxed">
              We may share information with service providers who help us operate our business (for example, web hosting and communications tools). These providers are required to protect your information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Security</h2>
            <p className="text-slate-700 leading-relaxed">
              We take reasonable steps to protect your information. No method of transmission or storage is 100% secure.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact</h2>
            <p className="text-slate-700 leading-relaxed">
              If you have questions about this policy, contact us at{' '}
              <a href="mailto:info@buildersdeskpro.com" className="text-orange-500 hover:text-orange-600 underline">
                info@buildersdeskpro.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link 
            href="/" 
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold transition-colors"
          >
            <i className="ri-arrow-left-line mr-2"></i>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
