import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Fluent Callers. How we collect, use, and protect your information.',
  alternates: { canonical: 'https://fluentcallers.com/privacy' },
}

export default function PrivacyPage() {
  return (
    <main>
      <div className="page-header">
        <div className="page-header-inner">
          <div className="page-eyebrow">Legal</div>
          <h1 className="page-title">Privacy Policy</h1>
          <p className="page-meta">Effective date: <span>April 15, 2025</span> &nbsp;&middot;&nbsp; Last updated: <span>April 15, 2025</span></p>
        </div>
      </div>
      <div className="legal-wrap">
        <div className="legal-section">
          <h2 className="legal-h2">Overview</h2>
          <p className="legal-p">Fluent Callers (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information you provide when visiting fluentcallers.com or contacting us directly.</p>
          <p className="legal-p">Questions? Email us at <a href="mailto:jackson@fluentcallers.com">jackson@fluentcallers.com</a>. We respond to every message personally.</p>
        </div>
        <div className="legal-section">
          <h2 className="legal-h2">Information We Collect</h2>
          <p className="legal-p">We only collect information you actively provide:</p>
          <ul className="legal-ul">
            <li>Your name and email address when you submit our contact form or email us directly</li>
            <li>Your company name and industry, if provided via the contact form</li>
            <li>Any additional details you include in your message</li>
            <li>VA applicant information including video submissions sent via email</li>
          </ul>
          <p className="legal-p">We do not collect payment information through our website.</p>
        </div>
        <div className="legal-section">
          <h2 className="legal-h2">How We Use Your Information</h2>
          <ul className="legal-ul">
            <li>To respond to your inquiry and match you with suitable VA candidates</li>
            <li>To follow up on placements, replacements, or onboarding questions</li>
            <li>To evaluate VA applicants for inclusion in our network</li>
            <li>To improve how we communicate and present our services</li>
          </ul>
          <p className="legal-p">We will never sell or rent your personal data to third parties.</p>
        </div>
        <div className="legal-section">
          <h2 className="legal-h2">Data Sharing</h2>
          <p className="legal-p">We do not sell, trade, or transfer your personal information to outside parties. The only exception is when sharing is necessary to deliver the service — for example, sharing your business requirements with a VA candidate you&apos;ve agreed to be matched with.</p>
        </div>
        <div className="legal-section">
          <h2 className="legal-h2">Cookies &amp; Tracking</h2>
          <p className="legal-p">Our website does not use tracking cookies or third-party analytics scripts. We do not run retargeting ads or monitor your browsing behavior across other sites.</p>
          <p className="legal-p">Standard web server logs may be stored temporarily by our hosting provider (Vercel) for security purposes. These are not linked to your personal identity.</p>
        </div>
        <div className="legal-section">
          <h2 className="legal-h2">Data Retention</h2>
          <p className="legal-p">We retain your information for as long as reasonably necessary. To request deletion, email <a href="mailto:jackson@fluentcallers.com">jackson@fluentcallers.com</a>.</p>
        </div>
        <div className="legal-section">
          <h2 className="legal-h2">Changes to This Policy</h2>
          <p className="legal-p">We may update this policy from time to time. Changes will be posted on this page with an updated effective date.</p>
        </div>
        <div className="legal-section">
          <h2 className="legal-h2">Contact</h2>
          <p className="legal-p"><a href="mailto:jackson@fluentcallers.com">jackson@fluentcallers.com</a><br />Fluent Callers</p>
        </div>
      </div>
    </main>
  )
}
