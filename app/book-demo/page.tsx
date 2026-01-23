'use client';

import { useState } from 'react';

export default function BookDemo() {
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
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Book Your Free Demo
          </h1>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                What You'll Learn
              </h2>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-orange-500 rounded-lg mr-4">
                    <i className="ri-check-line text-xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Complete Platform Tour</h3>
                    <p className="text-slate-600">See every feature in action and how they work together</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-orange-500 rounded-lg mr-4">
                    <i className="ri-check-line text-xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Custom Workflow Design</h3>
                    <p className="text-slate-600">We'll show you how to set up Builders Desk for your specific needs</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-orange-500 rounded-lg mr-4">
                    <i className="ri-check-line text-xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">ROI Analysis</h3>
                    <p className="text-slate-600">Calculate how much time and money you'll save</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-orange-500 rounded-lg mr-4">
                    <i className="ri-check-line text-xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Q&A Session</h3>
                    <p className="text-slate-600">Get answers to all your questions from our experts</p>
                  </div>
                </li>
              </ul>

              <div className="mt-10 p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-start">
                  <i className="ri-time-line text-2xl text-orange-500 mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">30-Minute Demo</h3>
                    <p className="text-slate-600">Quick, focused, and tailored to your business</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Schedule Your Demo
                </h2>
                
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
                          I consent to receive SMS notifications and alerts from Builders Desk. Message frequency varies. Message & data rates may apply. Text HELP to 877-478-5356 for assistance. You can reply STOP to unsubscribe at any time. *
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
                          ✓ Thank you! We'll contact you within 24 hours to schedule your demo.
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
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Trusted by Roofing Contractors Nationwide
            </h2>
            <p className="text-xl text-slate-600">
              Join hundreds of successful roofing businesses using Builders Desk
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">500+</div>
              <p className="text-slate-600 font-semibold">Active Contractors</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">$50M+</div>
              <p className="text-slate-600 font-semibold">Processed in Payments</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">98%</div>
              <p className="text-slate-600 font-semibold">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
