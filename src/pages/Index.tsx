'use client';
import { useState } from 'react';
import { Check, ArrowRight, Phone, Zap, Clock, TrendingDown } from 'lucide-react';

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
      {/* Navbar - unchanged */}
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

      {/* Hero - small tweak for relevance */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-full px-5 py-2 mb-8">
            <span className="text-yellow-400">⚡</span>
            <span className="text-sm font-medium">Stop paying for weak answering services</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
            ServiceLock<br />
            Replace Your Answering Service<br />
            And <span className="text-yellow-400">Never Miss Another Job</span>
          </h1>
          <p className="text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Instant AI response on missed calls. Smart qualification. Warm lead handoff.<br />
            Better results than most live services — at similar or lower cost.
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

      {/* Rest of your sections (Value, How it Works, ROI, Industries) can stay exactly as in the previous version I sent */}

      {/* New & Improved Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-black">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight mb-4">Smarter & Often Cheaper Than Your Current Answering Service</h2>
            <p className="text-xl text-zinc-400">
              Most service businesses pay $250–$600+/mo for live answering that just takes messages.<br />
              ServiceLock gives you instant responses, real qualification, and warm leads — usually for less.
            </p>
          </div>

          <div className="mx-auto max-w-md rounded-3xl border border-yellow-500/50 bg-zinc-900 p-10 text-center shadow-2xl shadow-yellow-500/10 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-zinc-950 px-6 py-1 rounded-full text-xs font-bold tracking-wider flex items-center gap-1">
              <TrendingDown className="w-4 h-4" /> BETTER VALUE
            </div>

            <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 px-4 py-1 rounded-full text-sm font-medium mb-6">
              14-DAY FREE TRIAL — NO RISK
            </div>

            <div className="font-display text-6xl font-bold tracking-tighter text-white mb-2">
              $447
              <span className="text-2xl font-medium text-zinc-400">/mo</span>
            </div>
            <p className="text-zinc-400 mb-8">Billed monthly • Cancel anytime • No overage fees</p>

            <ul className="mx-auto max-w-xs space-y-4 text-left text-zinc-300 mb-10">
              {[
                "Instant SMS response on every missed call (5–15 seconds)",
                "Smart lead qualification + urgency scoring",
                "Warm handoff with name, job type & context",
                "Basic CRM / dispatch integrations",
                "Works 24/7 with no extra charges",
                "Replaces or beats most live answering services",
                "Most users recoup cost with just 1 recovered job",
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
              If you're currently paying for an answering service, this usually costs the same or less — but actually books more jobs.
            </p>
          </div>
        </div>
      </section>

      {/* Trial form, FAQ, Final CTA, Footer — keep exactly as in the previous code I sent you */}

    </>
  );
}
