import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Builders Desk | Roofing Contractor Software - Manage Leads, Jobs & Payments",
  description: "All-in-one roofing contractor software to manage leads, jobs, scheduling, invoicing, and payments. Built by operators for operators. Start your 14-day free trial today.",
  keywords: [
    "roofing contractor software",
    "roofing CRM",
    "contractor management software",
    "roofing business software",
    "job scheduling software",
    "roofing invoicing",
    "contractor payment processing",
    "roofing lead management",
    "construction management software",
    "roofing estimate software"
  ],
  openGraph: {
    title: "Builders Desk | Roofing Contractor Software - Manage Leads, Jobs & Payments",
    description: "All-in-one roofing contractor software to manage leads, jobs, scheduling, invoicing, and payments. Built by operators for operators.",
    url: "https://buildersdeskpro.com",
    siteName: "Builders Desk",
    images: [
      {
        url: "https://readdy.ai/api/search-image?query=Professional%20roofing%20contractor%20software%20dashboard%20showing%20lead%20management%20job%20scheduling%20and%20payment%20processing%20on%20modern%20computer%20screen%20with%20construction%20business%20analytics%20and%20workflow%20automation%20tools&width=1200&height=630&seq=ogimage1&orientation=landscape",
        width: 1200,
        height: 630,
        alt: "Builders Desk - Complete Roofing Contractor Software",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Builders Desk | Roofing Contractor Software",
    description: "All-in-one roofing contractor software to manage leads, jobs, scheduling, invoicing, and payments.",
    images: ["https://readdy.ai/api/search-image?query=Professional%20roofing%20contractor%20software%20dashboard%20showing%20lead%20management%20job%20scheduling%20and%20payment%20processing%20on%20modern%20computer%20screen%20with%20construction%20business%20analytics%20and%20workflow%20automation%20tools&width=1200&height=630&seq=ogimage1&orientation=landscape"],
  },
  alternates: {
    canonical: "https://buildersdeskpro.com",
  },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Roofing Contractor Software",
            "provider": {
              "@type": "Organization",
              "name": "Builders Desk"
            },
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Roofing Contractor Software Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Lead Management"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Smart Scheduling"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Estimates"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Job Management"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Invoicing & Payments"
                  }
                }
              ]
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Builders Desk?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Builders Desk is an all-in-one roofing contractor software that manages leads, jobs, scheduling, invoicing, and payments. Built by operators for operators, it automates your entire workflow from first contact to final payment."
                }
              },
              {
                "@type": "Question",
                "name": "How does Builders Desk help roofing contractors?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Builders Desk helps roofing contractors by automating lead capture, creating digital estimates, optimizing crew schedules, tracking jobs in real-time, generating automatic invoices, and processing payments faster. It reduces manual work and improves efficiency."
                }
              },
              {
                "@type": "Question",
                "name": "What features does Builders Desk include?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Builders Desk includes lead management, digital estimates with e-signatures, AI-powered scheduling, real-time job tracking, automatic invoicing, integrated payment processing, and analytics dashboards for data-driven decisions."
                }
              },
              {
                "@type": "Question",
                "name": "How much does Builders Desk cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Builders Desk offers flexible pricing plans starting at $199/month for small teams, $399/month for growing businesses, and $599/month for established contractors. All plans include a 14-day free trial."
                }
              }
            ]
          })
        }}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Professional%20roofing%20contractor%20working%20on%20residential%20roof%20installation%20with%20modern%20equipment%20and%20safety%20gear%20under%20clear%20blue%20sky%20showing%20quality%20craftsmanship%20and%20attention%20to%20detail%20with%20organized%20materials%20and%20professional%20workspace%20demonstrating%20expertise%20in%20roofing%20industry%20with%20clean%20suburban%20home%20background%20and%20professional%20construction%20site%20setup&width=1920&height=1080&seq=hero1&orientation=landscape" 
            alt="Construction background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2A2A2A]/95 via-[#2A2A2A]/85 to-[#2A2A2A]/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
          <div className="max-w-3xl">
            <div className="inline-block bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-orange-400 font-semibold text-sm">Built for Roofing Contractors</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              From Leads to Jobs to Payments
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-10 leading-relaxed">
              From lead capture to final payment, Builders Desk automates your entire workflow. Built by operators, for operators.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/book-demo" 
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors text-center whitespace-nowrap"
              >
                Book a Demo
              </a>
              <a 
                href="/product" 
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors text-center whitespace-nowrap"
              >
                See How It Works
              </a>
            </div>
            
            <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-orange-400 font-bold text-lg mb-2">Built for Roofing Contractors</div>
              <div className="text-slate-300 text-base">
                Software designed around real jobs, real crews, and real payments — not generic CRMs.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Everything You Need to Run Your Roofing Business
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Builders Desk brings together all the tools contractors need in one powerful, easy-to-use platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-slate-200">
              <div className="w-14 h-14 flex items-center justify-center bg-orange-500 rounded-xl mb-6">
                <i className="ri-user-add-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Lead Management</h3>
              <p className="text-slate-600 leading-relaxed">
                Capture and track every lead automatically. Never miss an opportunity with intelligent lead routing and follow-up automation.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-slate-200">
              <div className="w-14 h-14 flex items-center justify-center bg-orange-500 rounded-xl mb-6">
                <i className="ri-calendar-check-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Scheduling</h3>
              <p className="text-slate-600 leading-relaxed">
                Optimize your crew schedules with AI-powered routing. Reduce drive time and maximize productivity across all job sites.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-slate-200">
              <div className="w-14 h-14 flex items-center justify-center bg-orange-500 rounded-xl mb-6">
                <i className="ri-file-list-3-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Digital Estimates</h3>
              <p className="text-slate-600 leading-relaxed">
                Create professional estimates in minutes. Send, track, and close deals faster with built-in e-signature capabilities.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-slate-200">
              <div className="w-14 h-14 flex items-center justify-center bg-orange-500 rounded-xl mb-6">
                <i className="ri-hammer-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Job Management</h3>
              <p className="text-slate-600 leading-relaxed">
                Track every project from start to finish. Real-time updates, photo documentation, and crew communication in one place.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-slate-200">
              <div className="w-14 h-14 flex items-center justify-center bg-orange-500 rounded-xl mb-6">
                <i className="ri-file-text-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Instant Invoicing</h3>
              <p className="text-slate-600 leading-relaxed">
                Generate invoices automatically when jobs complete. Professional, branded documents sent directly to customers.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-slate-200">
              <div className="w-14 h-14 flex items-center justify-center bg-orange-500 rounded-xl mb-6">
                <i className="ri-bank-card-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fast Payments</h3>
              <p className="text-slate-600 leading-relaxed">
                Get paid faster with integrated payment processing. Accept cards, ACH, and financing options seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Your Complete Workflow, Automated
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From first contact to final payment, Builders Desk handles it all
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-start space-x-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-orange-500 text-white font-bold text-xl rounded-full">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Lead Capture</h3>
                  <p className="text-slate-600 text-lg">
                    Leads flow in from your website, phone calls, and referrals. Builders Desk captures every detail automatically and assigns them to your team instantly.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-orange-500 text-white font-bold text-xl rounded-full">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Job Creation</h3>
                  <p className="text-slate-600 text-lg">
                    Convert qualified leads into jobs with one click. All customer information, site details, and project requirements are organized and ready.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-orange-500 text-white font-bold text-xl rounded-full">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Smart Scheduling</h3>
                  <p className="text-slate-600 text-lg">
                    AI-powered scheduling optimizes your crew routes and maximizes efficiency. Automatic notifications keep everyone informed.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 lg:h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20roofing%20crew%20team%20working%20together%20on%20residential%20roof%20installation%20project%20with%20safety%20equipment%20and%20modern%20tools%20showing%20organized%20workflow%20and%20teamwork%20under%20clear%20sky%20with%20quality%20materials%20and%20professional%20construction%20site%20management%20demonstrating%20efficient%20roofing%20operations&width=1000&height=1200&seq=workflow1&orientation=portrait" 
                alt="Roofing workflow" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-96 lg:h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=Beautiful%20completed%20residential%20roofing%20project%20showing%20brand%20new%20high%20quality%20shingles%20on%20modern%20suburban%20home%20with%20perfect%20installation%20craftsmanship%20under%20blue%20sky%20demonstrating%20professional%20roofing%20work%20excellence%20with%20clean%20lines%20and%20attention%20to%20detail%20showcasing%20finished%20construction%20project&width=1000&height=1200&seq=workflow2&orientation=portrait" 
                alt="Completed roofing project" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-start space-x-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-orange-500 text-white font-bold text-xl rounded-full">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Instant Invoicing</h3>
                  <p className="text-slate-600 text-lg">
                    When the job is complete, invoices are generated automatically with all project details, photos, and materials documented.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-orange-500 text-white font-bold text-xl rounded-full">
                  5
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Fast Payment</h3>
                  <p className="text-slate-600 text-lg">
                    Customers can pay instantly via card, ACH, or financing. Money hits your account in 24-48 hours. No more chasing payments.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-orange-500 text-white font-bold text-xl rounded-full">
                  6
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Growth Analytics</h3>
                  <p className="text-slate-600 text-lg">
                    Track revenue, crew performance, and customer satisfaction. Make data-driven decisions to grow your business faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <TestimonialCarousel />

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Professional%20roofing%20contractor%20team%20celebrating%20successful%20project%20completion%20on%20residential%20roof%20with%20modern%20suburban%20home%20background%20under%20golden%20hour%20lighting%20showing%20teamwork%20and%20business%20success%20with%20quality%20craftsmanship%20and%20professional%20construction%20achievement%20demonstrating%20roofing%20industry%20excellence&width=1920&height=1080&seq=cta1&orientation=landscape" 
            alt="CTA background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/90"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Roofing Business?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Built to help contractors automate their workflow and run a more efficient business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/book-demo" 
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors whitespace-nowrap"
            >
              Book Your Free Demo
            </a>
            <a 
              href="/pricing" 
              className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors whitespace-nowrap"
            >
              View Pricing
            </a>
          </div>
          
          <p className="text-slate-400 mt-8">Fast setup • Flexible plans • Cancel anytime</p>
        </div>
      </section>
    </main>
  );
}

function TestimonialCarousel() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            What Builders Desk Is Built to Deliver
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real-world roofing workflows, designed to reduce manual work and improve how contractors operate.
          </p>
        </div>
        
        <TestimonialSlider />
      </div>
    </section>
  );
}

function TestimonialSlider() {
  const testimonials = [
    {
      stars: 5,
      quote: "Scheduling and crew coordination are some of the hardest parts of running a roofing business. Builders Desk is designed to automate those workflows so crews know where to go and customers stay informed — without constant manual follow-up.",
      title: "Scheduling & Crew Management",
      subtitle: "Keep jobs moving without chaos"
    },
    {
      stars: 5,
      quote: "Getting paid on time used to be a nightmare. Now invoices go out automatically when jobs finish, and customers can pay instantly. Our cash flow has never been better.",
      title: "Automated Invoicing & Payments",
      subtitle: "Get paid faster, every time"
    },
    {
      stars: 5,
      quote: "We were losing leads left and right because we couldn't follow up fast enough. Builders Desk captures every lead and routes them to the right person instantly. Our conversion rate has doubled.",
      title: "Lead Management That Works",
      subtitle: "Never miss an opportunity"
    },
    {
      stars: 5,
      quote: "The best part is how everything connects. From the first call to the final payment, all the information flows automatically. No more jumping between different apps or losing track of details.",
      title: "Complete Workflow Integration",
      subtitle: "Everything in one place"
    }
  ];

  return (
    <div className="relative max-w-4xl mx-auto">
      <div id="testimonial-container" className="bg-slate-900 rounded-2xl p-8 lg:p-12 border border-slate-700">
        <div className="flex mb-6" id="stars-container">
          {[...Array(5)].map((_, i) => (
            <i key={i} className="ri-star-fill text-2xl text-orange-500"></i>
          ))}
        </div>
        
        <p id="testimonial-quote" className="text-xl lg:text-2xl text-slate-100 mb-8 leading-relaxed">
          {testimonials[0].quote}
        </p>
        
        <div>
          <div id="testimonial-title" className="font-bold text-lg text-white">{testimonials[0].title}</div>
          <div id="testimonial-subtitle" className="text-slate-300">{testimonials[0].subtitle}</div>
        </div>
      </div>
      
      <div className="flex justify-center items-center space-x-4 mt-8">
        <button 
          id="prev-btn"
          className="w-12 h-12 flex items-center justify-center bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Previous testimonial"
        >
          <i className="ri-arrow-left-s-line text-2xl"></i>
        </button>
        
        <div className="flex space-x-2" id="dots-container">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer dot-btn ${index === 0 ? 'bg-orange-500' : 'bg-slate-300'}`}
              data-index={index}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
        
        <button 
          id="next-btn"
          className="w-12 h-12 flex items-center justify-center bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Next testimonial"
        >
          <i className="ri-arrow-right-s-line text-2xl"></i>
        </button>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const testimonials = ${JSON.stringify(testimonials)};
            let currentIndex = 0;

            function updateTestimonial(index) {
              const testimonial = testimonials[index];
              document.getElementById('testimonial-quote').textContent = testimonial.quote;
              document.getElementById('testimonial-title').textContent = testimonial.title;
              document.getElementById('testimonial-subtitle').textContent = testimonial.subtitle;
              
              const dots = document.querySelectorAll('.dot-btn');
              dots.forEach((dot, i) => {
                if (i === index) {
                  dot.classList.remove('bg-slate-300');
                  dot.classList.add('bg-orange-500');
                } else {
                  dot.classList.remove('bg-orange-500');
                  dot.classList.add('bg-slate-300');
                }
              });
              
              currentIndex = index;
            }

            document.getElementById('next-btn').addEventListener('click', function() {
              const nextIndex = (currentIndex + 1) % testimonials.length;
              updateTestimonial(nextIndex);
            });

            document.getElementById('prev-btn').addEventListener('click', function() {
              const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
              updateTestimonial(prevIndex);
            });

            document.querySelectorAll('.dot-btn').forEach((dot, index) => {
              dot.addEventListener('click', function() {
                updateTestimonial(index);
              });
            });
          })();
        `
      }} />
    </div>
  );
}
