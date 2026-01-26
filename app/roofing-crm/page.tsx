import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roofing CRM Software",
  description:
    "Builders Desk Pro is a roofing CRM built for contractors to manage leads, estimates, jobs, crews, and payments in one place.",
  alternates: { canonical: "https://buildersdeskpro.com/roofing-crm" },
};

export default function RoofingCrmPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-300">
            Built for Roofing Contractors
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
            Roofing CRM Software that takes you from lead to payment
          </h1>

          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            Builders Desk Pro helps roofing companies capture leads, automate follow-up,
            schedule jobs, manage crews, send estimates and invoices, and get paid faster —
            without duct-taping five different tools together.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 font-semibold text-slate-900 hover:bg-orange-400 transition-colors"
            >
              Book a Demo
            </Link>
            <Link
              href="/product"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white hover:border-slate-500 transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Lead capture + follow-up",
              desc: "Capture calls, forms, and messages. Automate follow-ups so leads don’t slip through the cracks.",
            },
            {
              title: "Estimates, jobs, and scheduling",
              desc: "Turn leads into estimates and jobs, assign crews, and keep your calendar organized.",
            },
            {
              title: "Invoices + payments",
              desc: "Send invoices, collect payments, and track what’s outstanding — all in one workflow.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
            >
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="mt-3 text-slate-300 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">See Builders Desk Pro in action</h2>
              <p className="mt-3 text-slate-300">
                Book a quick walkthrough and we’ll show you the end-to-end roofing workflow.
              </p>
            </div>
            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 font-semibold text-slate-900 hover:bg-orange-400 transition-colors"
            >
              Book Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
