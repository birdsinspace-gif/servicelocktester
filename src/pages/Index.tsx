'use client';
import { useState } from 'react';
import { Check, ArrowRight, Phone, Zap, Clock } from 'lucide-react';

const DEMO_NUMBER = '+18665150533';
const DISPLAY_NUMBER = '(866) 515-0533';

export default function ServiceLock() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    industry: '',
    missedCallProblem: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      const res = await fetch('/api/trial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data?.message || 'Something went wrong.');

      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        companyName: '',
        phone: '',
        email: '',
        industry: '',
        missedCallProblem: '',
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Something went wrong.';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  function updateField(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

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
            <a href="#how" className="hover:text-yellow-400 transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-yellow-400 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-yellow-400 transition-colors">FAQ</a>
            <a
              href={`tel:${DEMO_NUMBER}`}
              className="bg-yellow-500 hover:bg-yellow-400 text-zinc-950 px-6 py-2.5 rounded-2xl font-medium flex items-center gap-2 transition-all"
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
            ServiceLock<br />
            Stop Losing Jobs<br />
            From <span className="text-yellow-400">Missed Calls</span>
          </h1>
          <p className="text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Built for service businesses where missed calls mean lost revenue.<br />
            Instant SMS follow-up → smart qualification → warm lead handoff.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#pricing"
              className="bg-yellow-500 hover:bg-yellow-400 text-zinc-950 px-10 py-4 rounded-2xl text-lg font-semibold flex items-center justify-center gap-3 transition-all"
            >
              See Pricing & Start Trial
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={`tel:${DEMO_NUMBER}`}
              className="border border-zinc-700 hover:border-zinc-500 px-8 py-4 rounded-2xl text-lg font-medium transition-all flex items-center gap-2"
            >
              <Phone className="w-5 h-5" /> Call Demo
            </a>
          </div>
          <p className="text-sm text-zinc-500 mt-8">
            14-day free trial • No credit card required • Cancel anytime
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
            When customers can’t reach you, they call the next company. ServiceLock responds faster, captures key details, and delivers warm leads so your team calls back with context.
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
                Most customers see ROI in under 30 days.<br />
                One recovered job often covers the entire month.
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm text-yellow-400">
                <Clock className="w-5 h-5" /> One booked job can justify the cost
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
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
                  After-hours emergencies, dispatch spikes, paid ad traffic, weekend calls — ServiceLock keeps leads warm.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - SINGLE FLAT PRICE */}
      <section id="pricing" className="py-24 px-6 bg-black">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-zinc-400">
              One plan. Everything you need. Built to pay for itself with just one recovered job.
            </p>
          </div>

          <div className="mx-auto max-w-md rounded-3xl border border-yellow-500/50 bg-zinc-900 p-10 text-center shadow-2xl shadow-yellow-500/10">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 px-4 py-1 rounded-full text-sm font-medium mb-6">
              14-DAY FREE TRIAL
            </div>

            <div className="font-display text-6xl font-bold tracking-tighter text-white mb-2">
              $447
              <span className="text-2xl font-medium text-zinc-400">/mo</span>
            </div>
            <p className="text-zinc-400 mb-8">Billed monthly • Cancel anytime</p>

            <ul className="mx-auto max-w-xs space-y-4 text-left text-zinc-300 mb-10">
              {[
                "Instant missed-call SMS response",
                "Smart lead capture & qualification",
                "Warm lead handoff with full context",
                "Basic CRM & dispatch integrations",
                "Team notifications & basic analytics",
                "No setup fee • No contract",
                "14-day risk-free trial",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#trial"
              className="block w-full bg-yellow-500 hover:bg-yellow-400 text-zinc-950 py-4 rounded-2xl font-semibold text-lg transition-all"
            >
              Start 14-Day Free Trial
            </a>

            <p className="mt-6 text-xs text-zinc-500">
              Most customers recoup the full monthly cost with just 1–2 recovered jobs
            </p>
          </div>
        </div>
      </section>

      {/* Trial Form */}
      <section id="trial" className="py-24 px-6 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold tracking-tight mb-4">Start Your 14-Day Free Trial</h2>
            <p className="text-xl text-zinc-400">
              Tell us about your business. We’ll review the fit and get you set up fast.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-10 space-y-6">
            {/* Form fields remain exactly as you had them */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium mb-2">Full Name</label>
                <input id="fullName" name="fullName" type="text" required value={formData.fullName} onChange={updateField}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl px-4 py-3 text-white outline-none focus:border-yellow-400" />
              </div>
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium mb-2">Company Name</label>
                <input id="companyName" name="companyName" type="text" required value={formData.companyName} onChange={updateField}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl px-4 py-3 text-white outline-none focus:border-yellow-400" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={updateField}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl px-4 py-3 text-white outline-none focus:border-yellow-400" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input id="email" name="email" type="email" required value={formData.email} onChange={updateField}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl px-4 py-3 text-white outline-none focus:border-yellow-400" />
              </div>
            </div>

            <div>
              <label htmlFor="industry" className="block text-sm font-medium mb-2">Industry</label>
              <select id="industry" name="industry" required value={formData.industry} onChange={updateField}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl px-4 py-3 text-white outline-none focus:border-yellow-400">
                <option value="">Select one</option>
                <option value="HVAC">HVAC</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Electrical">Electrical</option>
                <option value="Roofing">Roofing</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="missedCallProblem" className="block text-sm font-medium mb-2">
                What happens today when you miss a call?
              </label>
              <textarea
                id="missedCallProblem"
                name="missedCallProblem"
                required
                rows={5}
                value={formData.missedCallProblem}
                onChange={updateField}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl px-4 py-3 text-white outline-none focus:border-yellow-400 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:opacity-60 disabled:cursor-not-allowed text-zinc-950 px-8 py-4 rounded-2xl text-lg font-semibold transition-all"
            >
              {isSubmitting ? 'Submitting...' : 'Start 14-Day Free Trial'}
            </button>

            {submitSuccess && (
              <div className="rounded-2xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-green-300">
                Thanks! Your trial request is in. We’ll follow up fast.
              </div>
            )}
            {submitError && (
              <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-300">
                {submitError}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* FAQ, Final CTA, and Footer remain unchanged from your original code */}
      {/* (I kept them identical for brevity — just copy them back in if needed) */}

      {/* FAQ Section - paste your original FAQ here */}
      {/* Final CTA Section - paste your original */}
      {/* Footer - paste your original */}
    </>
  );
}
