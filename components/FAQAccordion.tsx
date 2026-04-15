'use client'
import { useState } from 'react'

const FAQS = [
  {
    q: 'What industries do your VAs work in?',
    a: 'Our callers have worked across home services, solar, real estate, financial advisory, insurance, SaaS, and B2B. We match based on your vertical so the VA already knows the common objections.',
  },
  {
    q: 'What timezone do the VAs work in?',
    a: 'We match you with a VA who covers your preferred hours — EST, CST, PST, or split shift. Availability is confirmed before matching so there are no surprises.',
  },
  {
    q: 'Do I need to provide a script?',
    a: 'A script helps, but it\'s not required. We offer a script and pitch review as part of our onboarding. Our VAs are trained in US sales frameworks and adapt quickly.',
  },
  {
    q: 'What tools do the VAs use?',
    a: 'Most VAs are comfortable with HubSpot, GoHighLevel, Close, Salesforce, Mojo, PhoneBurner, and CallTools. Tell us what you use in the intake and we\'ll match accordingly.',
  },
  {
    q: 'How does billing work after placement?',
    a: 'The placement fee covers our matching and vetting service. After that you pay your VA directly — hourly or monthly, negotiated between you. We don\'t take an ongoing cut.',
  },
  {
    q: 'Is there a long-term contract?',
    a: 'No. There\'s no minimum commitment from us. Your arrangement with the VA is flexible — month-to-month is the default. We don\'t lock anyone in.',
  },
  {
    q: 'What if the VA doesn\'t work out?',
    a: 'We replace them at no extra charge — no conversation you have to manage. Free replacement is included with every placement. Just let us know and we\'ll handle it.',
  },
]

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
      {FAQS.map((faq, i) => (
        <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
          <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
            {faq.q}
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-ans">{faq.a}</div>
        </div>
      ))}
    </div>
  )
}
