import { metadata } from './metadata';
export { metadata };
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Terms of Service
        </h1>
        <p className="text-slate-600 mb-12">
          Effective date: January 20, 2026
        </p>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            These Terms of Service govern your use of the Builder Desk website and your requests for information, demos, or services.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Use of website
            </h2>
            <p className="text-slate-700 leading-relaxed">
              You agree to use this website for lawful purposes and not to attempt to disrupt or compromise its security or integrity.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Demo and inquiry requests
            </h2>
            <p className="text-slate-700 leading-relaxed">
              When you submit a form or request a demo, you agree to provide accurate contact information so we can respond.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              SMS messaging terms
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              If you provide your phone number and explicitly opt in (for example, by checking an SMS consent box on a website form), you agree that Builder Desk may send SMS messages related to your request.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>
                <strong>Message types:</strong> confirmations, reminders, missed-call follow-ups, and support responses.
              </li>
              <li>
                <strong>Message frequency:</strong> varies.
              </li>
              <li>
                <strong>Message & data rates:</strong> may apply.
              </li>
              <li>
                <strong>Opt-out:</strong> reply STOP to unsubscribe at any time.
              </li>
              <li>
                <strong>Help:</strong> reply HELP for assistance.
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-4">
              You may opt out of SMS messages at any time. We do not send SMS marketing messages without your express consent.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Third-party services
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We may use third-party providers to operate the website and manage communications. Your use of those services may also be subject to their terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Disclaimer
            </h2>
            <p className="text-slate-700 leading-relaxed">
              This website and its content are provided "as is" without warranties of any kind. We are not liable for indirect or consequential damages.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Contact
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Questions? Email{' '}
              <a 
                href="mailto:info@buildersdeskpro.com" 
                className="text-orange-600 hover:text-orange-700 transition-colors"
              >
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
