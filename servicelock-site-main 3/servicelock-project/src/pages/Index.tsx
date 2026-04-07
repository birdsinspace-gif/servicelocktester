'use client';

import { useState } from 'react';
import { Check, ArrowRight, Phone, Zap, Clock } from 'lucide-react';

const DEMO_NUMBER = '+18665150533';
const DISPLAY_NUMBER = '(866) 515-0533';

const tiers = [
  {
    name: 'Core',
    price: 297,
    annual: 247,
    description: 'Perfect for growing mid-tier teams (4–8 techs)',
    features: [
      'Up to 150 missed calls / text responses per month',
      'Instant customizable SMS follow-up',
      'Lead capture: name, job type, urgency & callback info',
      'Warm lead handoff with context summary',
      'Basic calendar & dispatch note integration',
      'Team notifications (up to 4 users)',
      'Basic analytics dashboard',
      'No setup fee • No contract • Cancel anytime',
    ],
    cta: 'Call Demo',
    popular: false,
  },
  {
    name: 'Growth',
    price: 497,
    annual: 417,
    description: 'Best for most established mid-tier service businesses',
    features: [
      'Up to 400 missed calls / text responses per month',
      'Advanced lead qualification & urgency scoring',
      'Multi-step workflows & time-of-day rules',
      'Deeper CRM / ServiceTitan / Housecall Pro integrations',
      'Detailed ROI analytics & revenue attribution',
      'Priority support + quick onboarding call',
      'Team access up to 8 users',
      'No setup fee • No contract • Cancel anytime',
    ],
    cta: 'Call Demo',
    popular: true,
  },
  {
    name: 'Pro',
    price: 797,
    annual: 667,
    description: 'For high-volume mid-to-upper operations',
    features: [
      'Up to 800+ missed calls / text responses per month',
      'Fully custom scripts & branching workflows',
      'Advanced dispatch & CRM sync',
      'Premium reporting & estimated revenue tracking',
      'White-glove onboarding & dedicated support',
      'Higher team limits',
      'Low-cost usage overages if needed',
      'No setup fee • No contract • Cancel anytime',
    ],
    cta: 'Call Demo',
    popular: false,
  },
];

export default function ServiceLock() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-yellow-500 rounded-xl flex items-center justify-center">
              <Zap className="w-5 h-5 text-zinc-950" />
            </div>
            <span className="text-2xl font-semibold tracking-tight">ServiceLock</span>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <a href="#how" className="hover:text-yellow-400 transition-colors">
              How it works
            </a>
            <a href="#pricing" className="hover:text-yellow-400 transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hover:text-yellow-400 transition-colors">
              FAQ
            </a>

            <a
              href={`tel:${DEMO_NUMBER}`}
              className="bg-yellow-500 hover:bg-yellow-400 text-zinc-950 px-6 py-2.5 rounded-2xl font-medium flex items-center gap-2 transition-all"
              aria-label={`Call demo at ${DISPLAY_NUMBER}`}
            >
              Call Demo <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-full px-5 py-2 mb-8">
            <span className="text-yellow-400">⚡</span>
            <span className="text-sm font-medium">Missed calls = lost revenue</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
            ServiceLock
            <br />
            Stop Losing Jobs
            <br />
            From <span className="text-yellow-400">Missed Calls</span>
          </h1>

          <p className="text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Built for service businesses where missed calls mean lost revenue.
            <br />
            Instant SMS follow-up → smart qualification → warm lead handoff.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#pricing"
              className="bg-yellow-500 hover:bg-yellow-400 text-zinc-950 px-10 py-4 rounded-2xl text-lg font-semibold flex items-center justify-center gap-3 transition-all"
            >
              Start 14-Day Free Trial
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href={`tel:${DEMO_NUMBER}`}
              className="border border-zinc-700 hover:border-zinc-500 px-8 py-4 rounded-2xl text-lg font-medium transition-all flex items-center gap-2"
              aria-label={`Call demo at ${DISPLAY_NUMBER}`}
            >
              <Phone className="w-5 h-5" /> Call Demo
            </a>
          </div>

          <p className="text-sm text-zinc-500 mt-8">
            No credit card required • No setup fee • Cancel anytime
          </p>
          <p className="text-sm text-zinc-400 mt-3">
            Demo line: <a href={`tel:${DEMO_NUMBER}`} className="hover:text-yellow-400 transition-colors">{DISPLAY_NUMBER}</a>
          </p>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-20 px-6 bg-zinc-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold tracking-tight mb-6">
            Turn Missed Calls Into Recovered Jobs
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            When customers can’t reach you, they call the next company. ServiceLock responds faster, captures key details, and delivers warm leads so your team calls back with context, not cold.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight mb-4">How ServiceLock Works</h2>
            <p className="text-xl text-zinc-400">From missed call to warm handoff in seconds</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Missed call detected', desc: 'A customer calls while your team is on a job, after hours, or during dispatch.' },
              { num: '02', title: 'Instant response goes out', desc: 'A fast, professional SMS is sent while the customer is still deciding who to hire.' },
              { num: '03', title: 'Lead details get captured', desc: 'We collect name, job type, urgency, and callback preference.' },
              { num: '04', title: 'Your team gets the handoff', desc: 'You receive a warm lead with full context, so your callback feels informed and fast.' },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-500/50 transition-all group"
              >
                <div className="text-7xl font-bold text-yellow-500/20 group-hover:text-yellow-500/40 transition mb-6">
                  {step.num}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-zinc-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters + ROI */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold tracking-tight mb-8">
                You’re Losing Real Money Every Time You Miss a Call
              </h2>
              <div className="space-y-8 text-lg">
                <div className="flex gap-4">
                  <div className="text-yellow-400 font-mono text-2xl">$500</div>
                  <div>Small repair or service call</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-yellow-400 font-mono text-2xl">$1,500</div>
                  <div>Mid-sized job or urgent issue</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-yellow-400 font-mono text-2xl">$5,000+</div>
                  <div>High-value project or replacement</div>
                </div>
              </div>
              <p className="mt-10 text-zinc-400">
                You already paid for that call through ads, SEO, referrals, or reputation. ServiceLock helps you protect it.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
              <p className="text-xl leading-relaxed">
                If one recovered job covers the entire month, the math is already attractive.
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm text-yellow-400">
                <Clock className="w-5 h-5" /> One booked job can often justify the cost
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries & Use Cases */}
      <section className="py-24 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold tracking-tight text-center mb-16">
            Built for Mid-Tier Service Businesses
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['HVAC', 'Plumbing', 'Electrical', 'Roofing'].map((industry) => (
              <div
                key={industry}
                className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-500/30 transition"
              >
                <h3 className="text-2xl font-semibold mb-4">{industry}</h3>
                <p className="text-zinc-400 text-sm">
                  After-hours emergencies, dispatch spikes, paid ad traffic, weekend calls, ServiceLock keeps leads warm.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight mb-4">Simple Pricing for Real Results</h2>
            <p className="text-xl text-zinc-400">14-Day Free Trial on every plan • No contract • Cancel anytime</p>
          </div>

          {/* Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-zinc-900 rounded-2xl p-1">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-8 py-3 rounded-xl transition-all ${!isAnnual ? 'bg-zinc-800 shadow-md' : 'text-zinc-400'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-8 py-3 rounded-xl transition-all ${isAnnual ? 'bg-zinc-800 shadow-md' : 'text-zinc-400'}`}
              >
                Annual <span className="text-yellow-400 text-xs">Save ~16%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => {
              const currentPrice = isAnnual ? tier.annual : tier.price;
              return (
                <div
                  key={tier.name}
                  className={`relative rounded-3xl p-10 border flex flex-col transition-all ${
                    tier.popular
                      ? 'border-yellow-500 bg-zinc-900 scale-[1.02] shadow-2xl shadow-yellow-500/10'
                      : 'border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-zinc-950 px-6 py-1 rounded-full text-xs font-bold tracking-wider">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-4xl font-semibold">{tier.name}</h3>
                    <p className="text-zinc-400 mt-2">{tier.description}</p>
                  </div>

                  <div className="mb-10">
                    <span className="text-6xl font-bold tracking-tighter">${currentPrice}</span>
                    <span className="text-zinc-400 ml-2">/month</span>
                    {isAnnual && <p className="text-yellow-400 text-sm mt-1">Billed annually</p>}
                  </div>

                  <ul className="space-y-4 mb-12 flex-1">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                        <span className="text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`tel:${DEMO_NUMBER}`}
                    className={`block text-center py-4 rounded-2xl font-semibold text-lg transition-all ${
                      tier.popular
                        ? 'bg-yellow-500 hover:bg-yellow-400 text-zinc-950'
                        : 'bg-zinc-800 hover:bg-zinc-700 border border-zinc-700'
                    }`}
                    aria-label={`Call demo at ${DISPLAY_NUMBER}`}
                  >
                    {tier.cta}
                  </a>

                  <p className="text-center text-xs text-zinc-500 mt-6">
                    14-day risk-free trial • One recovered job often covers the cost
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-zinc-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold tracking-tight text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-10 text-lg">
            {[
              ['Does ServiceLock replace my receptionist or CSR?', 'No. It only activates on missed calls to speed up follow-up. Your team still handles live calls.'],
              ['Can I keep my current business number?', 'Yes. It works with your existing phone number.'],
              ['How fast does the customer get a response?', 'Usually within 5–15 seconds of the missed call.'],
              ['What information gets captured?', 'Name, job type, urgency, callback preference, and any details the customer shares.'],
              ['Who is this best for?', 'Mid-tier HVAC, plumbing, electrical, and roofing businesses where missed calls equal real lost revenue.'],
              ['Is there a contract?', 'No contract. Cancel anytime.'],
            ].map(([q, a], i) => (
              <div key={i} className="border-b border-zinc-800 pb-8 last:border-0">
                <h3 className="font-semibold mb-3">{q}</h3>
                <p className="text-zinc-400">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-6 border-t border-zinc-800 bg-black">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold tracking-tight mb-6">Stop letting good calls disappear</h2>
          <p className="text-2xl text-zinc-400 mb-10">
            You already earned the lead. Protect it with faster, smarter follow-up.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#pricing"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-zinc-950 px-12 py-5 rounded-2xl text-xl font-semibold transition-all"
            >
              Start Your 14-Day Free Trial
            </a>

            <a
              href={`tel:${DEMO_NUMBER}`}
              className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 px-10 py-5 rounded-2xl text-xl font-semibold transition-all"
              aria-label={`Call demo at ${DISPLAY_NUMBER}`}
            >
              <Phone className="w-5 h-5" />
              Call Demo Now
            </a>
          </div>

          <p className="mt-8 text-sm text-zinc-500">No setup fee • No contract • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-12 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} ServiceLock. All rights reserved.
          <br />
          Built for service businesses that refuse to lose revenue to missed calls.
          <br />
          <a href={`tel:${DEMO_NUMBER}`} className="hover:text-yellow-400 transition-colors">
            {DISPLAY_NUMBER}
          </a>
        </div>
      </footer>
    </>
  );
}
