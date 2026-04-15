'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')

  function submit() {
    if (!email.trim() || !firstName.trim()) {
      alert('Please enter your name and email.')
      return
    }
    setSubmitted(true)
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
          <input type="text" className="finput" placeholder="John" value={firstName} onChange={e => setFirstName(e.target.value)} />
        </div>
        <div className="fg">
          <label className="flabel">Last Name</label>
          <input type="text" className="finput" placeholder="Smith" />
        </div>
      </div>
      <div className="fg">
        <label className="flabel">Work Email</label>
        <input type="email" className="finput" placeholder="john@company.com" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div className="fg">
        <label className="flabel">Company</label>
        <input type="text" className="finput" placeholder="Apex Home Services" />
      </div>
      <div className="fg">
        <label className="flabel">Industry</label>
        <select className="fselect">
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
        <textarea className="ftextarea" placeholder="Cold calling, appointment setting, lead qualification — tell us your goals." />
      </div>
      <button className="fsubmit" onClick={submit}>Find My VA &rarr;</button>
      <p className="fnote">We&apos;ll send matched profiles within 24 hours. No commitment required.</p>
    </div>
  )
}
