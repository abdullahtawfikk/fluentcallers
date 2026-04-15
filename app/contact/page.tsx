import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Find Your VA',
  description: 'Submit your requirements and receive matched VA profiles within 24 hours. No commitment required.',
  openGraph: {
    title: 'Contact — Find Your VA | Fluent Callers',
    description: 'Submit your requirements and receive matched VA profiles within 24 hours.',
    url: 'https://fluentcallers.com/contact',
  },
  alternates: { canonical: 'https://fluentcallers.com/contact' },
}

export default function ContactPage() {
  return (
    <main>
      <section id="contact" style={{ paddingTop: '140px', minHeight: '100vh' }}>
        <div className="contact-layout">
          <div>
            <div className="stag">Ready to find your VA?</div>
            <h2 className="sh2">Drop us your details. <span className="r">We&apos;ll match within 24 hours.</span></h2>
            <p className="ssub" style={{ marginBottom: '8px' }}>No commitment required. We&apos;ll send matched VA profiles to watch at your own pace.</p>
            <div className="g-cards">
              <div className="g-card">
                <div className="g-icon">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <div className="g-title">48-Hour Placement</div>
                  <div className="g-text">From form to matched VA profiles in your inbox — 24 to 48 hours, not weeks.</div>
                </div>
              </div>
              <div className="g-card">
                <div className="g-icon">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                </div>
                <div>
                  <div className="g-title">Watch Before You Hire</div>
                  <div className="g-text">Pre-recorded video intros mean you hear their voice before spending a dollar.</div>
                </div>
              </div>
              <div className="g-card">
                <div className="g-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <div className="g-title">Free Replacement Guarantee</div>
                  <div className="g-text">If it&apos;s not the right fit for any reason, we replace your VA at no extra cost.</div>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
