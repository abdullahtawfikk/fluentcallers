'use client'
import { useState } from 'react'

export default function ApplyForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [serverError, setServerError] = useState('')
  const [form, setForm] = useState({
    fullName: '', email: '', country: '', experience: '', recordingLink: ''
  })

  function set(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }))
    if (errors[field]) setErrors(e => ({ ...e, [field]: false }))
  }

  function validate() {
    const errs: Record<string, boolean> = {}
    if (!form.fullName.trim()) errs.fullName = true
    if (!form.email.trim() || !form.email.includes('@')) errs.email = true
    if (!form.experience) errs.experience = true
    if (!form.recordingLink.trim()) errs.recordingLink = true
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  async function submit() {
    if (!validate()) return
    setServerError('')
    setLoading(true)
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
    } catch {
      setServerError('Something went wrong. Email your application directly to jackson@fluentcallers.com')
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
          <h3>Application received.</h3>
          <p>We review every submission within 48 hours.<br />If you meet the bar, you&apos;ll hear from us.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="form-box">
      <div className="form-title">Apply to the Network</div>
      <div className="fg">
        <label className="flabel">Full Name <span className="freq">*</span></label>
        <input type="text" className={`finput${errors.fullName ? ' error' : ''}`} placeholder="Jane Doe" value={form.fullName} onChange={e => set('fullName', e.target.value)} />
        {errors.fullName && <p className="ferr">Required</p>}
      </div>
      <div className="fg">
        <label className="flabel">Email <span className="freq">*</span></label>
        <input type="email" className={`finput${errors.email ? ' error' : ''}`} placeholder="jane@email.com" value={form.email} onChange={e => set('email', e.target.value)} />
        {errors.email && <p className="ferr">Valid email required</p>}
      </div>
      <div className="fg">
        <label className="flabel">Country</label>
        <input type="text" className="finput" placeholder="e.g. Philippines, South Africa, Jamaica" value={form.country} onChange={e => set('country', e.target.value)} />
      </div>
      <div className="fg">
        <label className="flabel">Years of Cold Calling Experience <span className="freq">*</span></label>
        <select className={`fselect${errors.experience ? ' error' : ''}`} value={form.experience} onChange={e => set('experience', e.target.value)}>
          <option value="">Select range</option>
          <option value="less-than-1">&lt;1 year</option>
          <option value="1-2">1–2 years</option>
          <option value="3-5">3–5 years</option>
          <option value="5+">5+ years</option>
        </select>
        {errors.experience && <p className="ferr">Required</p>}
      </div>
      <div className="fg">
        <label className="flabel">Link to 60-Second Voice Recording <span className="freq">*</span></label>
        <input type="text" className={`finput${errors.recordingLink ? ' error' : ''}`} placeholder="https://loom.com/share/..." value={form.recordingLink} onChange={e => set('recordingLink', e.target.value)} />
        {errors.recordingLink && <p className="ferr">Please include your Loom or recording link</p>}
        <p style={{ fontSize: '.72rem', color: 'var(--w40)', marginTop: '6px' }}>Record a 60-second pitch on Loom — introduce yourself and walk through a sample cold call.</p>
      </div>
      {serverError && <p className="ferr" style={{ marginBottom: '12px' }}>{serverError}</p>}
      <button className="fsubmit" onClick={submit} disabled={loading}>
        {loading ? 'Submitting…' : 'Submit Application →'}
      </button>
      <p className="fnote">We respond to every qualified applicant within 48 hours.</p>
    </div>
  )
}
