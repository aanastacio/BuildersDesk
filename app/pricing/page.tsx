import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plans | Builders Desk - Roofing Software Starting at $199/mo",
  description: "Flexible pricing plans for roofing contractors of all sizes. Starter Plan at $199/mo for small teams, Growth Plan at $399/mo for growing businesses, and Pro Plan at $599/mo for established contractors. All plans include 14-day free trial, lead management, scheduling, invoicing, and payment processing. No setup fees, cancel anytime.",
  keywords: [
    "roofing software pricing",
    "contractor software cost",
    "Builders Desk pricing",
    "roofing CRM pricing",
    "contractor management software plans",
    "roofing software subscription",
    "affordable contractor software",
    "roofing business software cost",
    "construction management pricing",
    "roofing software plans"
  ],
  openGraph: {
    title: "Pricing Plans | Builders Desk - Roofing Software Starting at $199/mo",
    description: "Flexible pricing plans for roofing contractors. Starter $199/mo, Growth $399/mo, Pro $599/mo. All plans include 14-day free trial and complete features.",
    url: "https://buildersdeskpro.com/pricing",
    siteName: "Builders Desk",
    images: [
      {
        url: "https://readdy.ai/api/search-image?query=Professional%20pricing%20comparison%20chart%20for%20roofing%20contractor%20software%20showing%20three%20subscription%20tiers%20with%20features%20and%20benefits%20modern%20business%20dashboard%20with%20construction%20industry%20theme%20and%20professional%20design&width=1200&height=630&seq=pricingog1&orientation=landscape",
        width: 1200,
        height: 630,
        alt: "Builders Desk Pricing Plans - Starting at $199/month",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Plans | Builders Desk",
    description: "Flexible pricing for roofing contractors. Plans starting at $199/mo with 14-day free trial.",
    images: ["https://readdy.ai/api/search-image?query=Professional%20pricing%20comparison%20chart%20for%20roofing%20contractor%20software%20showing%20three%20subscription%20tiers%20with%20features%20and%20benefits%20modern%20business%20dashboard%20with%20construction%20industry%20theme%20and%20professional%20design&width=1200&height=630&seq=pricingog1&orientation=landscape"],
  },
  alternates: {
    canonical: "https://buildersdeskpro.com/pricing",
  },
};

export default function Pricing() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Builders Desk",
            "description": "Roofing contractor software with flexible pricing plans",
            "brand": {
              "@type": "Brand",
              "name": "Builders Desk"
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "Starter Plan",
                "price": "199",
                "priceCurrency": "USD",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "199",
                  "priceCurrency": "USD",
                  "billingDuration": "P1M"
                },
                "description": "Perfect for small roofing teams getting started with automation",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Starter Plan Features",
                  "description": "Up to 3 users, 100 leads/month, unlimited jobs, digital estimates, basic scheduling, invoicing & payments, mobile app, email support"
                }
              },
              {
                "@type": "Offer",
                "name": "Growth Plan",
                "price": "399",
                "priceCurrency": "USD",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "399",
                  "priceCurrency": "USD",
                  "billingDuration": "P1M"
                },
                "description": "For growing roofing businesses ready to scale",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Growth Plan Features",
                  "description": "Up to 10 users, 500 leads/month, unlimited jobs, advanced scheduling, crew management, analytics dashboard, priority support, API access"
                }
              },
              {
                "@type": "Offer",
                "name": "Pro Plan",
                "price": "599",
                "priceCurrency": "USD",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "599",
                  "priceCurrency": "USD",
                  "billingDuration": "P1M"
                },
                "description": "For established roofing contractors managing multiple crews",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Pro Plan Features",
                  "description": "Unlimited users, unlimited leads, unlimited jobs, AI-powered scheduling, custom workflows, dedicated account manager, white-label options, custom integrations"
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Choose the plan that fits your business. All plans include core features to help you manage leads, jobs, and payments.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200 hover:border-orange-500 transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
                <p className="text-slate-600">Perfect for small roofing teams</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-slate-900">$199</span>
                  <span className="text-slate-600 ml-2">/month</span>
                </div>
                <p className="text-slate-500 mt-2">Billed monthly</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <i className="ri-check-line text-xl text-orange-500 mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-slate-700">Up to 50 active jobs per month</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-xl text-orange-500 mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-slate-700">Lead management & tracking</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-xl text-orange-500 mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-slate-700">Digital estimates & invoicing</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-xl text-orange-500 mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-slate-700">Basic scheduling tools</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-xl text-orange-500 mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-slate-700">Payment processing</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-xl text-orange-500 mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-slate-700">Email support</span>
                </li>
              </ul>
              
              <a href="/book-demo" className="block w-full bg-slate-900 text-white text-center px-6 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors whitespace-nowrap">
                Get Started
              </a>
            </div>

            {/* Professional Plan */}
            <div className="bg-orange-500 rounded-2xl p-8 border-2 border-orange-600 relative transform lg:scale-105 shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-slate-900 text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                  Most Popular
                </span>
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                <p className="text-orange-100">For growing roofing businesses</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-white">$399</span>
                  <span className="text-orange-100 ml-2">/month</span>
                </div>
                <p className="text-orange-100 mt-2">Billed monthly</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <i className="ri-check-line text-xl text-white mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-white">Unlimited active jobs</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-xl text-white mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-white">Advanced lead routing & automation</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-xl text-white mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-white">AI-powered scheduling optimization</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-xl text-white mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-white">Custom branding on documents</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-xl text-white mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-white">Team collaboration tools</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-xl text-white mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-white">Advanced analytics & reporting</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-xl text-white mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-white">Priority phone & email support</span>
                </li>
              </ul>
              
              <a href="/book-demo" className="block w-full bg-white text-orange-500 text-center px-6 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-colors whitespace-nowrap">
                Get Started
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200 hover:border-orange-500 transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Enterprise</h3>
                <p className="text-slate-600">For large roofing operations</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-slate-900">Custom</span>
                </div>
                <p className="text-slate-500 mt-2">Tailored to your needs</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <i className="ri-check-line text-xl text-orange-500 mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-slate-700">Everything in Professional</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-xl text-orange-500 mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-slate-700">Multi-location support</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-xl text-orange-500 mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-slate-700">Custom integrations & API access</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-xl text-orange-500 mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-slate-700">Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-xl text-orange-500 mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-slate-700">Custom training & onboarding</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-xl text-orange-500 mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                  <span className="text-slate-700">24/7 priority support</span>
                </li>
              </ul>
              
              <a href="/book-demo" className="block w-full bg-slate-900 text-white text-center px-6 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors whitespace-nowrap">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Is there a setup fee?</h3>
              <p className="text-slate-600">
                No setup fees. You can start using Builders Desk immediately after signing up. We'll help you get everything configured during your onboarding call.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Can I cancel anytime?</h3>
              <p className="text-slate-600">
                Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees. Your data remains accessible for 30 days after cancellation.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">What payment methods do you accept?</h3>
              <p className="text-slate-600">
                We accept all major credit cards (Visa, Mastercard, American Express) and ACH bank transfers for annual plans.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Do you offer a free trial?</h3>
              <p className="text-slate-600">
                We offer a 14-day free trial on all plans. No credit card required to start. Book a demo to get started.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Can I upgrade or downgrade my plan?</h3>
              <p className="text-slate-600">
                Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at the start of your next billing cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Book a demo to see how Builders Desk can transform your roofing business.
          </p>
          
          <a href="/book-demo" className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors whitespace-nowrap">
            Book Your Free Demo
          </a>
        </div>
      </section>
    </main>
  );
}
