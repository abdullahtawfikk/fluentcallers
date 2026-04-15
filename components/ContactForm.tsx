'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', company: '', industry: '', message: ''
  })

  function set(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }))
  }

  async function submit() {
    if (!form.firstName.trim() || !form.email.trim()) {
      setError('Please enter your name and email.')
      return
    }
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please email us directly at jackson@fluentcallers.com')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="form-box">
        <div className="fsuccess on">
          <div className="fsuccess-icon">
            <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <h3>You&apos;re on your way.</h3>
          <p>We&apos;ll send matched VA profiles within 24 hours.<br />Check your inbox — and your spam folder just in case.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="form-box">
      <div className="form-title">Find My VA</div>
      <div className="f-row">
        <div className="fg">
          <label className="flabel">First Name</label>
          <input type="text" className="finput" placeholder="John" value={form.firstName} onChange={e => set('firstName', e.target.value)} />
        </div>
        <div className="fg">
          <label className="flabel">Last Name</label>
          <input type="text" className="finput" placeholder="Smith" value={form.lastName} onChange={e => set('lastName', e.target.value)} />
        </div>
      </div>
      <div className="fg">
        <label className="flabel">Work Email</label>
        <input type="email" className="finput" placeholder="john@company.com" value={form.email} onChange={e => set('email', e.target.value)} />
      </div>
      <div className="fg">
        <label className="flabel">Company</label>
        <input type="text" className="finput" placeholder="Apex Home Services" value={form.company} onChange={e => set('company', e.target.value)} />
      </div>
      <div className="fg">
        <label className="flabel">Industry</label>
        <select className="fselect" value={form.industry} onChange={e => set('industry', e.target.value)}>
          <option value="">Select your industry</option>
          <option>Home Services</option>
          <option>Solar &amp; Energy</option>
          <option>Real Estate</option>
          <option>Financial Services</option>
          <option>Insurance</option>
          <option>SaaS / Tech</option>
          <option>Other</option>
        </select>
      </div>
      <div className="fg">
        <label className="flabel">What do you need help with?</label>
        <textarea className="ftextarea" placeholder="Cold calling, appointment setting, lead qualification — tell us your goals." value={form.message} onChange={e => set('message', e.target.value)} />
      </div>
      {error && <p style={{ color: '#D62828', fontSize: '.85rem', marginBottom: '12px' }}>{error}</p>}
      <button className="fsubmit" onClick={submit} disabled={loading}>
        {loading ? 'Sending…' : 'Find My VA →'}
      </button>
      <p className="fnote">We&apos;ll send matched profiles within 24 hours. No commitment required.</p>
    </div>
  )
}
