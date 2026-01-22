import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Builders Desk - Built by Operators for Operators",
  description: "Learn about Builders Desk's mission to empower roofing contractors with software that works the way they do. Built by operators who understand your challenges. Discover our story, mission, and values.",
  keywords: [
    "about Builders Desk",
    "roofing software company",
    "contractor software mission",
    "roofing business solutions",
    "construction software team",
    "operator-built software"
  ],
  openGraph: {
    title: "About Us | Builders Desk - Built by Operators for Operators",
    description: "Built by operators for operators. Learn how Builders Desk helps roofing contractors succeed with software designed around real workflows.",
    url: "https://buildersdeskpro.com/about",
    siteName: "Builders Desk",
    images: [
      {
        url: "https://readdy.ai/api/search-image?query=Professional%20roofing%20contractor%20team%20working%20together%20on%20a%20construction%20site%20with%20modern%20equipment%20and%20safety%20gear%20under%20clear%20blue%20sky%20showing%20teamwork%20and%20professionalism%20in%20the%20roofing%20industry%20with%20organized%20workspace%20and%20quality%20materials&width=1200&height=630&seq=aboutog1&orientation=landscape",
        width: 1200,
        height: 630,
        alt: "Builders Desk Team - Built by Operators for Operators",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Builders Desk",
    description: "Built by operators for operators. Learn how Builders Desk helps roofing contractors succeed.",
    images: ["https://readdy.ai/api/search-image?query=Professional%20roofing%20contractor%20team%20working%20together%20on%20a%20construction%20site%20with%20modern%20equipment%20and%20safety%20gear%20under%20clear%20blue%20sky%20showing%20teamwork%20and%20professionalism%20in%20the%20roofing%20industry%20with%20organized%20workspace%20and%20quality%20materials&width=1200&height=630&seq=aboutog1&orientation=landscape"],
  },
  alternates: {
    canonical: "https://buildersdeskpro.com/about",
  },
};

export default function About() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Builders Desk",
              "description": "Roofing contractor software built by operators for operators",
              "foundingDate": "2020",
              "url": "https://buildersdeskpro.com",
              "mission": "To empower roofing contractors with software that actually works the way they do—simple, powerful, and built for growth.",
              "knowsAbout": [
                "Roofing Contractor Management",
                "Construction Software",
                "Lead Management",
                "Job Scheduling",
                "Payment Processing"
              ]
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative py-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Built by Operators, for Operators
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Builders Desk was created to solve the real problems roofing contractors face every day—from managing leads to coordinating crews to getting paid on time.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Builders Desk started because we saw firsthand how roofing contractors were struggling with outdated tools that weren't built for their workflow. Generic CRMs, disconnected scheduling apps, and manual payment tracking were slowing down great businesses.
                </p>
                <p>
                  We knew there had to be a better way. So we built Builders Desk—a platform designed specifically for roofing contractors that brings everything together in one place.
                </p>
                <p>
                  From lead capture to job completion to payment processing, every feature is built around the real needs of roofing businesses. No bloat, no unnecessary complexity—just the tools you need to run your business efficiently.
                </p>
              </div>
            </div>
            
            <div className="relative h-96 lg:h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20roofing%20contractor%20team%20working%20together%20on%20a%20construction%20site%20with%20modern%20equipment%20and%20safety%20gear%20under%20clear%20blue%20sky%20showing%20teamwork%20and%20professionalism%20in%20the%20roofing%20industry%20with%20organized%20workspace%20and%20quality%20materials&width=800&height=1000&seq=about1&orientation=portrait" 
                alt="Roofing team at work" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              To empower roofing contractors with software that actually works the way they do—simple, powerful, and built for growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="w-14 h-14 flex items-center justify-center bg-orange-500 rounded-xl mb-6">
                <i className="ri-focus-3-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Contractor-First</h3>
              <p className="text-slate-600 leading-relaxed">
                Every feature is designed around real roofing workflows, not generic business processes. We build what contractors actually need.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="w-14 h-14 flex items-center justify-center bg-orange-500 rounded-xl mb-6">
                <i className="ri-lightbulb-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Simple & Powerful</h3>
              <p className="text-slate-600 leading-relaxed">
                Complex problems deserve elegant solutions. We make powerful automation feel effortless and intuitive.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="w-14 h-14 flex items-center justify-center bg-orange-500 rounded-xl mb-6">
                <i className="ri-team-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Always Improving</h3>
              <p className="text-slate-600 leading-relaxed">
                We listen to our customers and continuously improve. Your feedback directly shapes our product roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              What We Stand For
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-orange-500 rounded-lg">
                <i className="ri-shield-check-line text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Reliability</h3>
                <p className="text-slate-600">
                  Your business depends on our platform. We maintain 99.9% uptime and provide responsive support when you need it.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-orange-500 rounded-lg">
                <i className="ri-lock-line text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Security</h3>
                <p className="text-slate-600">
                  Your data is encrypted and protected with enterprise-grade security. We never share or sell your information.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-orange-500 rounded-lg">
                <i className="ri-customer-service-2-line text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Support</h3>
                <p className="text-slate-600">
                  Real people, real help. Our support team understands roofing and is here to help you succeed.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-orange-500 rounded-lg">
                <i className="ri-line-chart-line text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Growth</h3>
                <p className="text-slate-600">
                  We're invested in your success. Our platform scales with your business as you grow and take on more jobs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Join Hundreds of Roofing Contractors
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            See how Builders Desk can help you manage leads, schedule jobs, and get paid faster.
          </p>
          
          <a href="/book-demo" className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors whitespace-nowrap">
            Book Your Free Demo
          </a>
        </div>
      </section>
    </main>
  );
}
