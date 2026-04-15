import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Fluent Callers — VA matching and placement service.',
  alternates: { canonical: 'https://fluentcallers.com/terms' },
}

export default function TermsPage() {
  return (
    <main>
      <div className="page-header">
        <div className="page-header-inner">
          <div className="page-eyebrow">Legal</div>
          <h1 className="page-title">Terms of Service</h1>
          <p className="page-meta">Effective date: <span>April 15, 2025</span> &nbsp;&middot;&nbsp; Last updated: <span>April 15, 2025</span></p>
        </div>
      </div>
      <div className="legal-wrap">
        <div className="legal-section">
          <h2 className="legal-h2">Agreement to Terms</h2>
          <p className="legal-p">By using fluentcallers.com or engaging our VA matching services, you agree to be bound by these Terms of Service. &ldquo;You&rdquo; refers to the individual or business accessing our services. &ldquo;We,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo; refers to Fluent Callers.</p>
        </div>
        <div className="legal-section">
          <h2 className="legal-h2">What We Provide</h2>
          <p className="legal-p">Fluent Callers is a VA matching and placement service. We source, screen, and present pre-vetted cold calling Virtual Assistants to US businesses. We are not a staffing agency, employer of record, or party to the ongoing working arrangement between you and your VA.</p>
          <ul className="legal-ul">
            <li>A discovery call to understand your hiring requirements</li>
            <li>Sourcing and vetting candidates from our network</li>
            <li>Delivering matched VA profiles with pre-recorded video introductions</li>
            <li>Free replacement support if the initial match is not the right fit</li>
          </ul>
        </div>
        <div className="legal-section">
          <h2 className="legal-h2">Placement Fees &amp; Billing</h2>
          <p className="legal-p">Our placement fee covers the matching, vetting, and introduction process. After placement, you pay your VA directly — hourly or monthly, as agreed between you and your VA. Fluent Callers does not take an ongoing commission after placement.</p>
          <p className="legal-p">All fees are non-refundable once candidate profiles have been delivered, except at our sole discretion in cases where we are unable to fulfill a placement.</p>
        </div>
        <div className="legal-section">
          <h2 className="legal-h2">Replacement Policy</h2>
          <p className="legal-p">If a placed VA is not the right fit, we will source and present a replacement at no additional charge, subject to:</p>
          <ul className="legal-ul">
            <li>The original placement fee having been paid in full</li>
            <li>The request being made in good faith</li>
            <li>Our ability to identify a suitable candidate within our network</li>
          </ul>
        </div>
        <div className="legal-section">
          <h2 className="legal-h2">Your Responsibilities</h2>
          <ul className="legal-ul">
            <li>Provide accurate information during the intake process</li>
            <li>Treat VA candidates and placed VAs professionally and lawfully</li>
            <li>Compensate your VA directly and on time</li>
            <li>Not solicit VAs from our network outside of a completed placement</li>
            <li>Comply with all applicable employment and contractor laws</li>
          </ul>
        </div>
        <div className="legal-section">
          <h2 className="legal-h2">No Employment Relationship</h2>
          <p className="legal-p">Fluent Callers is not an employer of any VA in our network. All VAs operate as independent contractors. Any working arrangement you enter into with a placed VA is solely between you and that individual.</p>
        </div>
        <div className="legal-section">
          <h2 className="legal-h2">Disclaimer of Warranties</h2>
          <p className="legal-p">Our services are provided &ldquo;as is.&rdquo; We make no guarantees regarding specific performance or results achieved by any placed VA. Sales results depend on many factors outside our control.</p>
        </div>
        <div className="legal-section">
          <h2 className="legal-h2">Limitation of Liability</h2>
          <p className="legal-p">To the maximum extent permitted by law, Fluent Callers shall not be liable for any indirect, incidental, or consequential damages. Our total liability shall not exceed the placement fee paid by you.</p>
        </div>
        <div className="legal-section">
          <h2 className="legal-h2">Governing Law</h2>
          <p className="legal-p">These Terms shall be governed by the laws of the United States. Disputes shall be resolved through good-faith negotiation before any formal proceedings.</p>
        </div>
        <div className="legal-section">
          <h2 className="legal-h2">Contact</h2>
          <p className="legal-p"><a href="mailto:jackson@fluentcallers.com">jackson@fluentcallers.com</a><br />Fluent Callers</p>
        </div>
      </div>
    </main>
  )
}
