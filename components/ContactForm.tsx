'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [serverError, setServerError] = useState('')
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', company: '', industry: '', message: ''
  })

  function set(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }))
    if (errors[field]) setErrors(e => ({ ...e, [field]: false }))
  }

  function validate() {
    const errs: Record<string, boolean> = {}
    if (!form.firstName.trim()) errs.firstName = true
    if (!form.lastName.trim()) errs.lastName = true
    if (!form.email.trim() || !form.email.includes('@')) errs.email = true
    if (!form.industry) errs.industry = true
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  async function submit() {
    if (!validate()) return
    setServerError('')
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
      setServerError('Something went wrong. Email us directly at jackson@fluentcallers.com')
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
          <h3>We got it.</h3>
          <p>Expect matched VA profiles within 24 hours.<br />Check your inbox — and your spam folder just in case.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="form-box">
      <div className="form-title">Find My VA</div>
      <div className="f-row">
        <div className="fg">
          <label className="flabel">First Name <span className="freq">*</span></label>
          <input type="text" className={`finput${errors.firstName ? ' error' : ''}`} placeholder="John" value={form.firstName} onChange={e => set('firstName', e.target.value)} />
          {errors.firstName && <p className="ferr">Required</p>}
        </div>
        <div className="fg">
          <label className="flabel">Last Name <span className="freq">*</span></label>
          <input type="text" className={`finput${errors.lastName ? ' error' : ''}`} placeholder="Smith" value={form.lastName} onChange={e => set('lastName', e.target.value)} />
          {errors.lastName && <p className="ferr">Required</p>}
        </div>
      </div>
      <div className="fg">
        <label className="flabel">Work Email <span className="freq">*</span></label>
        <input type="email" className={`finput${errors.email ? ' error' : ''}`} placeholder="john@company.com" value={form.email} onChange={e => set('email', e.target.value)} />
        {errors.email && <p className="ferr">Valid email required</p>}
      </div>
      <div className="fg">
        <label className="flabel">Company</label>
        <input type="text" className="finput" placeholder="Apex Home Services" value={form.company} onChange={e => set('company', e.target.value)} />
      </div>
      <div className="fg">
        <label className="flabel">Industry <span className="freq">*</span></label>
        <select className={`fselect${errors.industry ? ' error' : ''}`} value={form.industry} onChange={e => set('industry', e.target.value)}>
          <option value="">Select your industry</option>
          <option>Home Services</option>
          <option>Solar &amp; Energy</option>
          <option>Real Estate</option>
          <option>Financial Services</option>
          <option>Insurance</option>
          <option>SaaS / Tech</option>
          <option>Roofing</option>
          <option>HVAC</option>
          <option>Mortgage</option>
          <option>B2B Sales</option>
          <option>Other</option>
        </select>
        {errors.industry && <p className="ferr">Please select your industry</p>}
      </div>
      <div className="fg">
        <label className="flabel">What do you need help with?</label>
        <textarea className="ftextarea" placeholder="Cold calling, appointment setting, lead qualification — tell us your goals." value={form.message} onChange={e => set('message', e.target.value)} />
      </div>
      {serverError && <p className="ferr" style={{ marginBottom: '12px' }}>{serverError}</p>}
      <button className="fsubmit" onClick={submit} disabled={loading}>
        {loading ? 'Sending…' : 'Find My VA →'}
      </button>
      <p className="fnote">We&apos;ll send matched profiles within 24 hours. No commitment required.</p>
    </div>
  )
}
