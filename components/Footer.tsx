import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="ft">
        <div>
          <div className="fl">Fluent <span className="dot">●</span></div>
          <div className="fl">Callers</div>
          <p className="ftag">We match US businesses with pre-vetted cold calling VAs. Watch before you hire. Replace free if it doesn't work.</p>
          <div className="femail"><a href="mailto:jackson@fluentcallers.com">jackson@fluentcallers.com</a></div>
        </div>
        <div>
          <div className="fcol-title">Navigation</div>
          <ul className="flinks">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/why">Why Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <div className="fcol-title">Company</div>
          <ul className="flinks">
            <li><Link href="/apply">Apply as a VA</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <div className="fcol-title">Guarantees</div>
          <ul className="flinks">
            <li><span>48-Hour Placement</span></li>
            <li><span>Watch Before Hiring</span></li>
            <li><span>Free Replacement</span></li>
            <li><span>No Long-Term Contracts</span></li>
          </ul>
        </div>
      </div>
      <div className="fb">
        <div className="fcopy">Fluent Callers &copy; 2025. All rights reserved.</div>
        <div className="fcopy">Built for businesses that can&apos;t afford to hire wrong.</div>
      </div>
    </footer>
  )
}
