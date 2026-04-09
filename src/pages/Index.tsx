"use client";

import { useState } from "react";
import { Check, ArrowRight, Phone, Zap, Clock } from "lucide-react";

const DEMO_NUMBER = "+18665150533";
const DISPLAY_NUMBER = "(866) 515-0533";

type FormState = {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  industry: string;
  missedCallProblem: string;
};

const initialFormState: FormState = {
  fullName: "",
  companyName: "",
  phone: "",
  email: "",
  industry: "",
  missedCallProblem: "",
};

export default function ServiceLock() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const res = await fetch("/api/trial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Something went wrong.");
      }

      setSubmitSuccess(true);
      setFormData(initialFormState);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  function updateField(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-500">
              <Zap className="h-5 w-5 text-zinc-950" />
            </div>
            <span className="text-2xl font-semibold tracking-tight">
              ServiceLock
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <a href="#how" className="transition-colors hover:text-yellow-400">
              How it works
            </a>
            <a href="#pricing" className="transition-colors hover:text-yellow-400">
              Pricing
            </a>
            <a href="#faq" className="transition-colors hover:text-yellow-400">
              FAQ
            </a>

            <a
              href={`tel:${DEMO_NUMBER}`}
              className="flex items-center gap-2 rounded-2xl bg-yellow-500 px-6 py-2.5 font-medium text-zinc-950 transition-all hover:bg-yellow-400"
              aria-label={`Call demo at ${DISPLAY_NUMBER}`}
            >
              Call Demo <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-zinc-950 to-zinc-900 px-6 pb-24 pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-5 py-2">
            <span className="text-yellow-400">⚡</span>
            <span className="text-sm font-medium">Missed calls = lost revenue</span>
          </div>

          <h1 className="mb-6 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
            
            <br />
            Stop Losing Jobs
            <br />
            From <span className="text-yellow-400">Missed Calls</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-2xl text-zinc-400">
            Built for service businesses where missed calls mean lost revenue.
            <br />
            Instant SMS follow-up → smart qualification → warm lead handoff.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#trial"
              className="flex items-center justify-center gap-3 rounded-2xl bg-yellow-500 px-10 py-4 text-lg font-semibold text-zinc-950 transition-all hover:bg-yellow-400"
            >
              Start 14-Day Free Trial
              <ArrowRight className="h-5 w-5" />
            </a>

            <a
              href={`tel:${DEMO_NUMBER}`}
              className="flex items-center gap-2 rounded-2xl border border-zinc-700 px-8 py-4 text-lg font-medium transition-all hover:border-zinc-500"
              aria-label={`Call demo at ${DISPLAY_NUMBER}`}
            >
              <Phone className="h-5 w-5" /> Call Demo
            </a>
          </div>

          <p className="mt-8 text-sm text-zinc-500">
            No credit card required • No setup fee • Cancel anytime
          </p>
          <p className="mt-3 text-sm text-zinc-400">
            Demo line:{" "}
            <a
              href={`tel:${DEMO_NUMBER}`}
              className="transition-colors hover:text-yellow-400"
            >
              {DISPLAY_NUMBER}
            </a>
          </p>
        </div>
      </section>

      {/* Value Section */}
      <section className="bg-zinc-900 px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-5xl font-bold tracking-tight">
            Turn Missed Calls Into Recovered Jobs
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-zinc-400">
            When customers can’t reach you, they call the next company. ServiceLock
            responds faster, captures key details, and delivers warm leads so your
            team calls back with context, not cold.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-5xl font-bold tracking-tight">
              How ServiceLock Works
            </h2>
            <p className="text-xl text-zinc-400">
              From missed call to warm handoff in seconds
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                num: "01",
                title: "Missed call detected",
                desc: "A customer calls while your team is on a job, after hours, or during dispatch.",
              },
              {
                num: "02",
                title: "Instant response goes out",
                desc: "A fast, professional SMS is sent while the customer is still deciding who to hire.",
              },
              {
                num: "03",
                title: "Lead details get captured",
                desc: "We collect name, job type, urgency, and callback preference.",
              },
              {
                num: "04",
                title: "Your team gets the handoff",
                desc: "You receive a warm lead with full context, so your callback feels informed and fast.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition-all hover:border-yellow-500/50"
              >
                <div className="mb-6 text-7xl font-bold text-yellow-500/20 transition group-hover:text-yellow-500/40">
                  {step.num}
                </div>
                <h3 className="mb-4 text-2xl font-semibold">{step.title}</h3>
                <p className="text-zinc-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters + ROI */}
      <section className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-8 text-5xl font-bold tracking-tight">
                You’re Losing Real Money Every Time You Miss a Call
              </h2>
              <div className="space-y-8 text-lg">
                <div className="flex gap-4">
                  <div className="font-mono text-2xl text-yellow-400">$500</div>
                  <div>Small repair or service call</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-mono text-2xl text-yellow-400">$1,500</div>
                  <div>Mid-sized job or urgent issue</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-mono text-2xl text-yellow-400">$5,000+</div>
                  <div>High-value project or replacement</div>
                </div>
              </div>
              <p className="mt-10 text-zinc-400">
                You already paid for that call through ads, SEO, referrals, or
                reputation. ServiceLock helps you protect it.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10">
              <p className="text-xl leading-relaxed">
                If one recovered job covers the entire month, the math is already
                attractive.
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm text-yellow-400">
                <Clock className="h-5 w-5" /> One booked job can often justify the cost
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries & Use Cases */}
      <section className="bg-zinc-900 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-5xl font-bold tracking-tight">
            Built for Mid-Tier Service Businesses
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {["HVAC", "Plumbing", "Electrical", "Roofing"].map((industry) => (
              <div
                key={industry}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-yellow-500/30"
              >
                <h3 className="mb-4 text-2xl font-semibold">{industry}</h3>
                <p className="text-sm text-zinc-400">
                  After-hours emergencies, dispatch spikes, paid ad traffic, weekend
                  calls, ServiceLock keeps leads warm.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-black px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-5xl font-bold tracking-tight">
              Simple Pricing for Real Results
            </h2>
            <p className="text-xl text-zinc-400">
              One flat monthly price. No contract. Cancel anytime.
            </p>
          </div>

          <div className="mx-auto max-w-xl rounded-3xl border border-yellow-500 bg-zinc-900 p-10 shadow-2xl shadow-yellow-500/10">
            <div className="mb-6 inline-flex rounded-full bg-yellow-500 px-4 py-1.5 text-xs font-bold tracking-wider text-zinc-950">
              14-DAY FREE TRIAL • NO RISK
            </div>

            <div className="mb-3">
              <span className="text-6xl font-bold tracking-tighter">$447</span>
              <span className="ml-2 text-zinc-400">/mo</span>
            </div>

            <p className="text-sm text-zinc-400">
              Billed monthly • Cancel anytime • No overage fees
            </p>

            <p className="mt-6 text-lg font-medium text-white">
              Close just 1 recovered job and it can pay for itself.
            </p>

            <ul className="mt-10 space-y-4">
              {[
                "Instant SMS response on every missed call (5–15 seconds)",
                "Captures name, job type, and urgency",
                "Warm handoff with job context, ready to close",
                "Basic CRM / dispatch integrations",
                "Works 24/7 with no extra charges",
                "Replaces or beats most live answering services",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-400" />
                  <span className="text-zinc-300">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#trial"
              className="mt-10 block rounded-2xl bg-yellow-500 py-4 text-center text-lg font-semibold text-zinc-950 transition-all hover:bg-yellow-400"
            >
              Start 14-Day Free Trial
            </a>

            <p className="mt-6 text-center text-sm text-zinc-400">
              If we don’t capture at least 3 real inbound leads, you don’t pay.
            </p>

            <p className="mt-3 text-center text-xs text-zinc-500">
              If you're currently paying for an answering service, this usually costs
              the same or less, but actually books more jobs.
            </p>
          </div>
        </div>
      </section>

      {/* Trial Form */}
      <section
        id="trial"
        className="border-t border-zinc-800 bg-zinc-950 px-6 py-24"
      >
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-bold tracking-tight">
              Start Your 14-Day Free Trial
            </h2>
            <p className="text-xl text-zinc-400">
              Tell us a little about your business. We’ll review the fit and reach
              out fast.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-zinc-800 bg-zinc-900 p-8 md:p-10"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="mb-2 block text-sm font-medium">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={updateField}
                  className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-400"
                />
              </div>

              <div>
                <label
                  htmlFor="companyName"
                  className="mb-2 block text-sm font-medium"
                >
                  Company Name
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={updateField}
                  className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-400"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={updateField}
                  className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={updateField}
                  className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-400"
                />
              </div>
            </div>

            <div>
              <label htmlFor="industry" className="mb-2 block text-sm font-medium">
                Industry
              </label>
              <select
                id="industry"
                name="industry"
                required
                value={formData.industry}
                onChange={updateField}
                className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-400"
              >
                <option value="">Select one</option>
                <option value="HVAC">HVAC</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Electrical">Electrical</option>
                <option value="Roofing">Roofing</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="missedCallProblem"
                className="mb-2 block text-sm font-medium"
              >
                What happens today when you miss a call?
              </label>
              <textarea
                id="missedCallProblem"
                name="missedCallProblem"
                required
                rows={5}
                value={formData.missedCallProblem}
                onChange={updateField}
                className="w-full resize-none rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-400"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-2xl bg-yellow-500 px-8 py-4 text-lg font-semibold text-zinc-950 transition-all hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Start 14-Day Free Trial"}
            </button>

            {submitSuccess && (
              <div className="rounded-2xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-green-300">
                Thanks, your trial request is in. Check your email and we’ll follow
                up fast.
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

      {/* FAQ */}
      <section id="faq" className="bg-zinc-900 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-16 text-center text-5xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>

          <div className="space-y-10 text-lg">
            {[
              [
                "Does ServiceLock replace my receptionist or CSR?",
                "No. It only activates on missed calls to speed up follow-up. Your team still handles live calls.",
              ],
              [
                "Can I keep my current business number?",
                "Yes. It works with your existing phone number.",
              ],
              [
                "How fast does the customer get a response?",
                "Usually within 5–15 seconds of the missed call.",
              ],
              [
                "What information gets captured?",
                "Name, job type, urgency, callback preference, and any details the customer shares.",
              ],
              [
                "Who is this best for?",
                "Mid-tier HVAC, plumbing, electrical, and roofing businesses where missed calls equal real lost revenue.",
              ],
              ["Is there a contract?", "No contract. Cancel anytime."],
            ].map(([q, a], i) => (
              <div key={i} className="border-b border-zinc-800 pb-8 last:border-0">
                <h3 className="mb-3 font-semibold">{q}</h3>
                <p className="text-zinc-400">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-zinc-800 bg-black px-6 py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-5xl font-bold tracking-tight">
            Stop letting good calls disappear
          </h2>
          <p className="mb-10 text-2xl text-zinc-400">
            You already earned the lead. Protect it with faster, smarter follow-up.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#trial"
              className="inline-block rounded-2xl bg-yellow-500 px-12 py-5 text-xl font-semibold text-zinc-950 transition-all hover:bg-yellow-400"
            >
              Start Your 14-Day Free Trial
            </a>

            <a
              href={`tel:${DEMO_NUMBER}`}
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-700 px-10 py-5 text-xl font-semibold transition-all hover:border-zinc-500"
              aria-label={`Call demo at ${DISPLAY_NUMBER}`}
            >
              <Phone className="h-5 w-5" />
              Call Demo Now
            </a>
          </div>

          <p className="mt-8 text-sm text-zinc-500">
            No setup fee • No contract • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 px-6 py-12">
        <div className="mx-auto max-w-6xl text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} ServiceLock. All rights reserved.
          <br />
          Built for service businesses that refuse to lose revenue to missed calls.
          <br />
          <a
            href={`tel:${DEMO_NUMBER}`}
            className="transition-colors hover:text-yellow-400"
          >
            {DISPLAY_NUMBER}
          </a>

          <div className="mt-6 flex justify-center gap-6 text-sm text-zinc-400">
            <a href="/terms" className="transition hover:text-white">
              Terms
            </a>
            <a href="/privacy" className="transition hover:text-white">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
