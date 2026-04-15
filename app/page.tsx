import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fluent Callers | Hire a Pre-Vetted Cold Calling VA in 48 Hours',
  description: 'We match US businesses with pre-vetted cold calling and appointment setting VAs. Watch them before you hire. Free replacement guarantee. No long-term contracts.',
  openGraph: {
    title: 'Fluent Callers | Hire a Pre-Vetted Cold Calling VA in 48 Hours',
    description: 'Match with a native-English cold calling VA in 48 hours. Watch their pitch before you hire. Free replacement guarantee.',
    url: 'https://fluentcallers.com',
  },
  alternates: { canonical: 'https://fluentcallers.com' },
}

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section id="hero">
        <div className="hero-vline" />
        <div className="hero-inner">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Actively placing VAs — 48-hour turnaround
          </div>
          <h1 className="hero-h1">Stop Missing Leads.</h1>
          <h2 className="hero-h2"><span className="arr">↗</span> Hire a Trained Caller in 48 Hours.</h2>
          <p className="hero-sub">We match US businesses with pre-vetted cold calling and appointment setting VAs. You watch them before you hire. If it doesn&apos;t work out, we replace them free.</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-red">Find My VA</Link>
            <Link href="#how" className="btn-ghost">How it works</Link>
          </div>
          <div className="hero-pills">
            <span className="pill"><span className="chk">—</span> No long-term contracts</span>
            <span className="pill"><span className="chk">—</span> Free replacement guarantee</span>
            <span className="pill"><span className="chk">—</span> Watch before you hire</span>
          </div>
          <div className="hero-stats">
            <div className="hs">
              <div className="hs-num">48<em>h</em></div>
              <div className="hs-lbl">Average Placement<br />Time</div>
            </div>
            <div className="hs">
              <div className="hs-num">100<em>%</em></div>
              <div className="hs-lbl">VAs Reviewed Before<br />You See Them</div>
            </div>
            <div className="hs">
              <div className="hs-num"><em>$</em>0</div>
              <div className="hs-lbl">Replacement Cost If It<br />Doesn&apos;t Work Out</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-inner">
          <div className="m-item">Home Services <span className="m-sep">◆</span> Solar &amp; Energy <span className="m-sep">◆</span> Real Estate <span className="m-sep">◆</span> Financial Advisory <span className="m-sep">◆</span> Insurance <span className="m-sep">◆</span> SaaS &amp; Tech <span className="m-sep">◆</span> B2B Sales <span className="m-sep">◆</span> Roofing <span className="m-sep">◆</span> HVAC <span className="m-sep">◆</span> Mortgage <span className="m-sep">◆</span></div>
          <div className="m-item">Home Services <span className="m-sep">◆</span> Solar &amp; Energy <span className="m-sep">◆</span> Real Estate <span className="m-sep">◆</span> Financial Advisory <span className="m-sep">◆</span> Insurance <span className="m-sep">◆</span> SaaS &amp; Tech <span className="m-sep">◆</span> B2B Sales <span className="m-sep">◆</span> Roofing <span className="m-sep">◆</span> HVAC <span className="m-sep">◆</span> Mortgage <span className="m-sep">◆</span></div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section id="how" className="sec-sep">
        <div className="stag">The Process</div>
        <h2 className="sh2">How It <span className="r">Works</span></h2>
        <p className="ssub">Three steps from requirement to your VA making calls — no weeks of back-and-forth.</p>
        <div className="steps fu">
          <div className="step">
            <div className="step-n">01</div>
            <h3>Submit your requirements</h3>
            <p>Tell us your industry, goals, and what you need help with. Takes under 2 minutes. No lengthy intake calls required upfront.</p>
            <div className="step-bar" />
          </div>
          <div className="step">
            <div className="step-n">02</div>
            <h3>15-minute consultation</h3>
            <p>A quick discovery call to align on your goals. We do the heavy lifting — sourcing from our pool of top English-speaking callers trained in US sales culture.</p>
            <div className="step-bar" />
          </div>
          <div className="step">
            <div className="step-n">03</div>
            <h3>Review your matched VA</h3>
            <p>Watch a pre-recorded intro from your matched VA before making any decision. Hear their voice, judge their pitch. No commitment until you&apos;re confident.</p>
            <div className="step-bar" />
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="sec-sep">
        <div className="stag">Real Results</div>
        <h2 className="sh2">What happens when the <span className="r">right person picks up.</span></h2>
        <p className="ssub">Real businesses. Real outcomes. From week one.</p>
        <div className="results-accent fu">
          <div className="ra"><div className="ra-n">11<em>+</em></div><div className="ra-l">Appointments<br />booked week one</div></div>
          <div className="ra"><div className="ra-n">3<em>×</em></div><div className="ra-l">Outreach volume<br />at 40% of cost</div></div>
          <div className="ra"><div className="ra-n">24<em>h</em></div><div className="ra-l">Replacement<br />turnaround</div></div>
          <div className="ra"><div className="ra-n">48<em>h</em></div><div className="ra-l">Average<br />placement time</div></div>
        </div>
        <div className="results-grid fu">
          <div className="tcard">
            <span className="t-quote">&ldquo;</span>
            <p className="t-text">We had a VA booked and running calls within 48 hours of our first conversation. She booked 11 appointments in her first week, better than some of our in-house reps.</p>
            <div className="t-author">
              <div className="t-av">M</div>
              <div><div className="t-name">Marcus T.</div><div className="t-role">Founder, Apex Home Services</div></div>
            </div>
            <div className="t-result">11 appointments — week one</div>
          </div>
          <div className="tcard">
            <span className="t-quote">&ldquo;</span>
            <p className="t-text">I was skeptical about the accent, but our VA sounds completely professional. Clients don&apos;t ask questions. The pre-recorded intro sealed it for me before I even got on a call.</p>
            <div className="t-author">
              <div className="t-av">D</div>
              <div><div className="t-name">Danielle R.</div><div className="t-role">Owner, Clearview Solar</div></div>
            </div>
            <div className="t-result">3× outreach volume at 40% of the cost</div>
          </div>
          <div className="tcard">
            <span className="t-quote">&ldquo;</span>
            <p className="t-text">Our first VA wasn&apos;t quite the right energy for our brand. Jackson replaced her within 24 hours, no pushback, no extra charge. The second one has been with us for 4 months.</p>
            <div className="t-author">
              <div className="t-av">K</div>
              <div><div className="t-name">Kevin S.</div><div className="t-role">CEO, Northgate Financial</div></div>
            </div>
            <div className="t-result">Replacement handled in under 24 hours</div>
          </div>
        </div>
      </section>

      {/* MID CTA */}
      <div className="mid-cta sec-sep">
        <div className="stag" style={{ justifyContent: 'center' }}>No Commitment Required</div>
        <h2 className="sh2">Your next VA is already vetted. <span className="r">You just haven&apos;t seen them yet.</span></h2>
        <p className="ssub">Profiles delivered in 24 hours. No commitment.</p>
        <div style={{ textAlign: 'center' }}><Link href="/contact" className="btn-red">See My Matches</Link></div>
        <div className="mid-pills">
          <span className="mid-pill"><span>—</span> No long-term contracts</span>
          <span className="mid-pill"><span>—</span> Free replacement guarantee</span>
          <span className="mid-pill"><span>—</span> Watch before you hire</span>
        </div>
      </div>
    </main>
  )
}
