import type { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, one-time placement fees. No subscriptions, no ongoing cuts. Pay for the placement, keep the flexibility.',
  openGraph: {
    title: 'Pricing | Fluent Callers',
    description: 'Simple, one-time placement fees. No subscriptions, no ongoing cuts.',
    url: 'https://fluentcallers.com/pricing',
  },
  alternates: { canonical: 'https://fluentcallers.com/pricing' },
}

export default function PricingPage() {
  return (
    <main>
      {/* HEADER */}
      <section id="hero" style={{ minHeight: '44vh' }}>
        <div className="hero-vline" />
        <div className="hero-inner">
          <div className="eyebrow">Pricing</div>
          <h1 className="hero-h1">Simple, transparent</h1>
          <h2 className="hero-h2">pricing.</h2>
          <p className="hero-sub">No hidden fees. No lock-in. Pay for the placement, keep the flexibility. You pay your VA directly after — we don&apos;t take an ongoing cut.</p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section id="pricing" className="sec-sep">
        <div className="p-grid fu">
          <div className="p-card">
            <div className="p-name">Starter</div>
            <div className="p-price">$397</div>
            <div className="p-per">one-time placement fee</div>
            <div className="p-div" />
            <ul className="p-feats">
              <li className="p-feat">1 matched VA profile</li>
              <li className="p-feat">Pre-recorded video intro</li>
              <li className="p-feat">48-hour delivery</li>
              <li className="p-feat">1 free replacement</li>
              <li className="p-feat">15-min onboarding call</li>
            </ul>
            <Link href="/contact" className="p-btn p-btn-border">Get Started</Link>
          </div>
          <div className="p-card hot">
            <div className="p-badge">Most Popular</div>
            <div className="p-name">Growth</div>
            <div className="p-price">$697</div>
            <div className="p-per">one-time placement fee</div>
            <div className="p-div" />
            <ul className="p-feats">
              <li className="p-feat">3 matched VA profiles to choose from</li>
              <li className="p-feat">Pre-recorded intros for all 3</li>
              <li className="p-feat">24-hour priority delivery</li>
              <li className="p-feat">Unlimited replacements — 90 days</li>
              <li className="p-feat">Script &amp; pitch review session</li>
              <li className="p-feat">30-day check-in call</li>
            </ul>
            <Link href="/contact" className="p-btn">Get Started</Link>
          </div>
          <div className="p-card">
            <div className="p-name">Scale</div>
            <div className="p-price">Custom</div>
            <div className="p-per">for teams of 2+ callers</div>
            <div className="p-div" />
            <ul className="p-feats">
              <li className="p-feat">Multi-VA placement</li>
              <li className="p-feat">Dedicated account manager</li>
              <li className="p-feat">Performance tracking setup</li>
              <li className="p-feat">Ongoing replacement coverage</li>
              <li className="p-feat">Custom onboarding protocol</li>
            </ul>
            <Link href="/contact" className="p-btn p-btn-red">Talk to Us</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="sec-sep">
        <div className="stag">FAQ</div>
        <h2 className="sh2">Questions we get <span className="r">every time.</span></h2>
        <div className="faq-layout fu">
          <FAQAccordion />
          <div className="faq-panel">
            <div className="stag">Still have questions?</div>
            <h3 className="sh2" style={{ fontSize: '1.7rem' }}>We&apos;ll answer them <span className="r">personally.</span></h3>
            <p className="ssub" style={{ marginBottom: '30px' }}>Drop Jackson a note and you&apos;ll get a reply within a few hours. No bots, no support tickets, no waiting.</p>
            <a href="mailto:jackson@fluentcallers.com" className="btn-red">Email Jackson &rarr;</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="mid-cta sec-sep">
        <div className="stag" style={{ justifyContent: 'center' }}>No Commitment Required</div>
        <h2 className="sh2">Your next VA is already vetted. <span className="r">You just haven&apos;t seen them yet.</span></h2>
        <p className="ssub">Profiles delivered in 24 hours. No commitment.</p>
        <div style={{ textAlign: 'center' }}><Link href="/contact" className="btn-red">Find My VA</Link></div>
        <div className="mid-pills">
          <span className="mid-pill"><span>—</span> No long-term contracts</span>
          <span className="mid-pill"><span>—</span> Free replacement guarantee</span>
          <span className="mid-pill"><span>—</span> Watch before you hire</span>
        </div>
      </div>
    </main>
  )
}
