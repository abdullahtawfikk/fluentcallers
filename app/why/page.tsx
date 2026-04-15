import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Why Fluent Callers',
  description: 'Cold calling specialists, not general VAs. Native-level English, 48-hour placement, free replacement guarantee — built for US businesses that need outbound done right.',
  openGraph: {
    title: 'Why Fluent Callers',
    description: 'Cold calling specialists, not general VAs. Native-level English, 48-hour placement, free replacement guarantee.',
    url: 'https://fluentcallers.com/why',
  },
  alternates: { canonical: 'https://fluentcallers.com/why' },
}

export default function WhyPage() {
  return (
    <main>
      {/* PAGE HERO */}
      <section id="hero" style={{ minHeight: '52vh' }}>
        <div className="hero-vline" />
        <div className="hero-inner">
          <div className="eyebrow">Why Fluent Callers</div>
          <h1 className="hero-h1">Built for one thing:</h1>
          <h2 className="hero-h2">calls that convert.</h2>
          <p className="hero-sub">We don&apos;t do general VA placement. Every person in our network is a trained, tested cold caller — nothing else. Here&apos;s what that means for you.</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-red">Find My VA</Link>
            <Link href="/pricing" className="btn-ghost">See Pricing</Link>
          </div>
        </div>
      </section>

      {/* WHY US CARDS */}
      <section id="why" className="sec-sep">
        <div className="stag">What Sets Us Apart</div>
        <h2 className="sh2">Six reasons clients <span className="r">keep coming back.</span></h2>
        <p className="ssub">Each one of these is a real differentiator — not a marketing bullet point.</p>
        <div className="why-grid fu">
          <div className="why-card">
            <div className="why-num">01</div>
            <span className="why-icon">
              <svg viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
            </span>
            <h3>Native-Level English</h3>
            <p>Every caller passes a strict English fluency screen. Your prospects will never know they&apos;re not talking to someone down the street.</p>
          </div>
          <div className="why-card">
            <div className="why-num">02</div>
            <span className="why-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            </span>
            <h3>Cold Calling Specialists</h3>
            <p>Our VAs specialize in outbound — not general admin work. They handle objections, qualify leads, and set appointments that actually show up.</p>
          </div>
          <div className="why-card">
            <div className="why-num">03</div>
            <span className="why-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
            </span>
            <h3>Watch Before You Hire</h3>
            <p>We send you a pre-recorded video intro from every matched candidate. Hear their voice and judge their pitch before spending a dollar.</p>
          </div>
          <div className="why-card">
            <div className="why-num">04</div>
            <span className="why-icon">
              <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </span>
            <h3>Free Replacement Guarantee</h3>
            <p>If your VA isn&apos;t the right fit for any reason, we find you a replacement at no extra cost. Zero risk, no awkward conversations.</p>
          </div>
          <div className="why-card">
            <div className="why-num">05</div>
            <span className="why-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </span>
            <h3>48-Hour Placement</h3>
            <p>From intake to matched VA profiles in your inbox — 24 to 48 hours. Most platforms take 2–4 weeks to get you nowhere. We don&apos;t.</p>
          </div>
          <div className="why-card">
            <div className="why-num">06</div>
            <span className="why-icon">
              <svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
            </span>
            <h3>Scale As You Grow</h3>
            <p>Need two callers? Three? We&apos;ve placed teams. Add capacity without going back to square one on hiring every single time.</p>
          </div>
        </div>
      </section>

      {/* STATS PANEL */}
      <section className="sec-sep" style={{ padding: '0', background: 'var(--bg3)' }}>
        <div className="stats-panel">
          <div className="stat-item">
            <div className="stat-n">48<em>h</em></div>
            <div className="stat-l">Average Placement<br />Time</div>
          </div>
          <div className="stat-item">
            <div className="stat-n">100<em>%</em></div>
            <div className="stat-l">VAs Reviewed Before<br />You See Them</div>
          </div>
          <div className="stat-item">
            <div className="stat-n"><em>$</em>0</div>
            <div className="stat-l">Replacement Cost If<br />It Doesn&apos;t Work Out</div>
          </div>
          <div className="stat-item">
            <div className="stat-n">7<em>+</em></div>
            <div className="stat-l">Industries Actively<br />Served</div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="sec-sep">
        <div className="about-layout fu">
          <div>
            <div className="stag">Who We Are</div>
            <h2 className="sh2">Built by someone who&apos;s been <span className="r">on the phones.</span></h2>
            <p className="about-p">Fluent Callers was built after watching too many US businesses lose revenue to inconsistent, hard-to-find outbound talent. The problem wasn&apos;t a lack of callers — it was a lack of callers who could actually speak English, stay on script, and show up consistently.</p>
            <p className="about-p">We built the solution: a tightly vetted network of cold calling specialists, matched to your industry and goals, delivered to your inbox in 48 hours. You watch them pitch before you spend a dollar. If it doesn&apos;t work out, we replace them for free.</p>
            <p className="about-p">No job boards. No resume stacks. No back-and-forth that takes two weeks to go nowhere. Just the right person on the phone, fast.</p>
            <Link href="/contact" className="btn-red">Work With Us</Link>
          </div>
          <div className="about-aside">
            <div className="about-quote-card">
              <span className="about-quote-mark">&ldquo;</span>
              <p className="about-quote-text">Every business I talked to had the same problem — they couldn&apos;t find callers who spoke clean English and stayed on script. So we built the network ourselves.</p>
              <div className="about-attr">— Jackson, Founder</div>
            </div>
            <div className="about-photo-slot">
              <div className="about-photo-av">J</div>
              <div>
                <div className="about-photo-name">Jackson</div>
                <div className="about-photo-role">Founder, Fluent Callers &nbsp;·&nbsp; jackson@fluentcallers.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="mid-cta sec-sep">
        <div className="stag" style={{ justifyContent: 'center' }}>Ready to Start?</div>
        <h2 className="sh2">Your next VA is already vetted. <span className="r">You just haven&apos;t seen them yet.</span></h2>
        <p className="ssub">Profiles delivered in 24 hours. No commitment.</p>
        <div style={{ textAlign: 'center' }}><Link href="/contact" className="btn-red">Find My VA</Link></div>
      </div>
    </main>
  )
}
