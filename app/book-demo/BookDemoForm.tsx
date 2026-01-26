'use client';

import { useState } from 'react';

export default function BookDemoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://readdy.ai/api/form/d5p5ricue1sdfststgug', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Schedule Your Demo</h2>

        <form id="demo-form" onSubmit={handleSubmit} data-readdy-form>
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-slate-900"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-slate-900"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-slate-900"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                Company Name *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-slate-900"
                placeholder="ABC Roofing"
              />
            </div>

            <div>
              <label htmlFor="team-size" className="block text-sm font-semibold text-slate-700 mb-2">
                Team Size *
              </label>
              <div className="relative">
                <select
                  id="team-size"
                  name="team-size"
                  required
                  className="w-full px-4 py-3 pr-8 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-slate-900 appearance-none cursor-pointer"
                >
                  <option value="">Select team size</option>
                  <option value="1-5">1-5 employees</option>
                  <option value="6-10">6-10 employees</option>
                  <option value="11-25">11-25 employees</option>
                  <option value="26-50">26-50 employees</option>
                  <option value="51+">51+ employees</option>
                </select>
                <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none w-5 h-5 flex items-center justify-center"></i>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                What are you looking to improve? (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                maxLength={500}
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-slate-900 resize-none"
                placeholder="Tell us about your current challenges..."
              ></textarea>
              <p className="text-xs text-slate-500 mt-1">Maximum 500 characters</p>
            </div>

            <div className="space-y-3 pt-2">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  name="sms-consent"
                  required
                  className="mt-1 w-4 h-4 text-orange-500 border-slate-300 rounded focus:ring-orange-500 focus:ring-2 cursor-pointer"
                />
                <span className="ml-3 text-sm text-slate-600 leading-relaxed">
                  I consent to receive SMS notifications and alerts from Builders Desk. Message frequency varies. Message &amp; data rates may apply. Text HELP to 877-478-5356 for assistance. You can reply STOP to unsubscribe at any time. *
                </span>
              </label>

              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  name="marketing-consent"
                  required
                  className="mt-1 w-4 h-4 text-orange-500 border-slate-300 rounded focus:ring-orange-500 focus:ring-2 cursor-pointer"
                />
                <span className="ml-3 text-sm text-slate-600 leading-relaxed">
                  By checking this box I agree to receive occasional marketing messages from Builders Desk. *
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isSubmitting ? 'Submitting...' : 'Book My Demo'}
            </button>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm font-semibold">
                  ✓ Thank you! We&apos;ll contact you within 24 hours to schedule your demo.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm font-semibold">
                  Something went wrong. Please try again or call us at 877-478-5356.
                </p>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
