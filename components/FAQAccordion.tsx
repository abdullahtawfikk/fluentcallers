'use client'
import { useState } from 'react'

type FAQItem = { q: string; a: string }

const DEFAULT_FAQS: FAQItem[] = [
  {
    q: 'Where are your VAs based?',
    a: 'English-speaking countries with strong US sales culture training. Every VA passes a strict fluency screen before joining our network — your prospects will never second-guess who they\'re talking to.',
  },
  {
    q: 'What industries do you serve?',
    a: 'Home Services, Solar & Energy, Real Estate, Financial Services, Insurance, SaaS/Tech, Roofing, HVAC, Mortgage, and B2B Sales. We match based on your vertical so the VA already knows the common objections.',
  },
  {
    q: 'Is there a minimum contract?',
    a: 'No. We don\'t do long-term contracts. You\'re not locked in. Your arrangement with your VA is flexible — month-to-month is the default.',
  },
  {
    q: 'What if the VA isn\'t a good fit?',
    a: 'We replace them free, within 24 hours, no questions asked. Free replacement is included with every placement — just let us know and we handle it.',
  },
  {
    q: 'How much does it cost?',
    a: 'Pricing depends on your needs and call volume. Fill out the form and we\'ll give you a clear number on the discovery call. No surprises.',
  },
  {
    q: 'What does "watch before you hire" mean?',
    a: 'We send a pre-recorded video intro of your matched VA so you can hear their voice and judge their pitch before you commit to anything. You only move forward when you\'re confident.',
  },
]

export default function FAQAccordion({ items = DEFAULT_FAQS }: { items?: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
      {items.map((faq, i) => (
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
