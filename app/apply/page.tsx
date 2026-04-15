import type { Metadata } from 'next'
import Link from 'next/link'
import ApplyForm from '@/components/ApplyForm'

export const metadata: Metadata = {
  title: 'Apply as a VA',
  description: 'Join the Fluent Callers network. We place elite English-speaking cold callers with high-growth US businesses. Apply in two steps.',
  openGraph: {
    title: 'Apply as a VA | Fluent Callers',
    description: 'Join our network of elite cold callers. 48-hour application review.',
    url: 'https://fluentcallers.com/apply',
  },
  alternates: { canonical: 'https://fluentcallers.com/apply' },
}

export default function ApplyPage() {
  return (
    <main>
      <section id="hero" style={{ minHeight: '72vh' }}>
        <div className="hero-vline" />
        <div className="hero-inner">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Reviewing applications — 48-hour response
          </div>
          <div className="eyebrow">Caller Network</div>
          <h1 className="hero-h1">We Only Place<br />the Best.</h1>
          <h2 className="hero-h2">If you can close, we want to hear from you.</h2>
          <p className="hero-sub">Fluent Callers works with a small, carefully vetted network of cold callers. We place you with high-growth US businesses in your niche — and we keep the work consistent.</p>
          <div className="hero-actions">
            <a href="#how-to-apply" className="btn-red">Apply Now</a>
            <a href="#requirements" className="btn-ghost">See Requirements</a>
          </div>
          <div className="hero-stats">
            <div className="hs"><div className="hs-num">48<em>h</em></div><div className="hs-lbl">Application<br />Review Time</div></div>
            <div className="hs"><div className="hs-num">100<em>%</em></div><div className="hs-lbl">Response to<br />Qualified Candidates</div></div>
            <div className="hs"><div className="hs-num"><em>$</em>0</div><div className="hs-lbl">Cost to<br />Apply or Join</div></div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section id="requirements" className="sec-sep">
        <div className="stag">What We Look For</div>
        <h2 className="sh2">The bar is high. <span className="r">That&apos;s the point.</span></h2>
        <p className="ssub">We&apos;re selective because our clients trust us to send only callers who are ready to perform from day one.</p>
        <div className="req-layout fu">
          {[
            { n: '01', t: 'Native or Near-Native English', d: "No detectable accent. Your prospects should never second-guess who they're speaking to. Fluency isn't negotiable — it's the foundation." },
            { n: '02', t: 'Cold Calling or Appointment Setting Background', d: 'Active experience in outbound calling, preferably in B2B or high-ticket verticals. You understand objection handling, tonality, and what a qualified lead looks like.' },
            { n: '03', t: 'US Business Hours Availability', d: "You can commit to EST, CST, or PST working hours on a consistent schedule. Our clients are US businesses — you need to be available when they are." },
            { n: '04', t: 'CRM & Dialer Proficiency', d: "Comfortable with tools like Mojo, PhoneBurner, GoHighLevel, HubSpot, Salesforce, or Close. You don't need to know every platform — but you can't be starting from scratch." },
            { n: '05', t: 'Professional Home Setup', d: "USB headset, stable wired or high-speed internet, and a quiet workspace with no background noise. First impressions start with audio quality." },
            { n: '06', t: 'Commitment to Results', d: "You're not looking for light work. You're looking to build a track record with real US clients, deliver measurable outcomes, and stay placed long-term." },
          ].map(r => (
            <div className="req-item" key={r.n}>
              <div className="req-n">{r.n}</div>
              <div>
                <div className="req-title">{r.t}</div>
                <div className="req-text">{r.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="how-to-apply" className="sec-sep" style={{ background: 'var(--bg2)' }}>
        <div className="stag">The Application</div>
        <h2 className="sh2">Join the Network. <span className="r">Apply in minutes.</span></h2>
        <p className="ssub">We&apos;re always looking for top-tier English-speaking cold callers. Fill out the form and we&apos;ll review it within 48 hours.</p>
        <div className="apply-layout">
          <div className="apply-steps fu">
            <div className="apply-step">
              <span className="apply-step-num">01</span>
              <h3>Record a 60-second Loom video</h3>
              <p>Introduce yourself and walk through a sample cold call pitch. Show us your voice, your energy, and your ability to handle a live call. Keep it under 60 seconds — tight pitches win clients.</p>
              <div className="apply-step-bar" />
            </div>
            <div className="apply-step">
              <span className="apply-step-num">02</span>
              <h3>Submit the form</h3>
              <p>Paste your Loom link in the form alongside your details. We review every submission personally and respond to every qualified applicant within 48 hours.</p>
              <div className="apply-step-bar" />
            </div>
          </div>
          <div className="apply-aside fu">
            <ApplyForm />
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="sec-sep">
        <div className="stag">After You Apply</div>
        <h2 className="sh2">What to expect <span className="r">on our end.</span></h2>
        <div className="next-grid fu">
          <div className="next-card">
            <div className="next-n">01</div>
            <div className="next-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
            <h3>Review within 48 hours</h3>
            <p>Jackson personally reviews every application. You&apos;ll hear back within two business days — qualified or not.</p>
          </div>
          <div className="next-card">
            <div className="next-n">02</div>
            <div className="next-icon"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
            <h3>Short intro call</h3>
            <p>If your application stands out, we schedule a brief call to align on your experience, availability, and client fit.</p>
          </div>
          <div className="next-card">
            <div className="next-n">03</div>
            <div className="next-icon"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div>
            <h3>Matched &amp; placed</h3>
            <p>Once you&apos;re in the network, we match you with client opportunities as they come in — no job boards, no guesswork.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
