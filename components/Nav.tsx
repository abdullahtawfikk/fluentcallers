'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastY = useRef(0)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 30)
      if (y > 80) {
        setHidden(y > lastY.current)
      } else {
        setHidden(false)
      }
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <nav className={[scrolled ? 'scrolled' : '', hidden ? 'nav-hidden' : ''].filter(Boolean).join(' ')}>
        <Link href="/" className="nav-logo">
          <span className="nav-logo-line">Fluent <span className="dot">●</span></span>
          <span className="nav-logo-line">Callers</span>
        </Link>
        <ul className="nav-center">
          <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link href="/why" className={pathname === '/why' ? 'active' : ''}>Why Us</Link></li>
          <li><Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact Us</Link></li>
        </ul>
        <div className="nav-right">
          <a href="mailto:jackson@fluentcallers.com" className="nav-email">jackson@fluentcallers.com</a>
          <Link href="/contact" className="btn-red">Find My VA</Link>
        </div>
        <button className="hamburger" aria-label="Menu" onClick={() => setMenuOpen(o => !o)}>
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/why" onClick={() => setMenuOpen(false)}>Why Us</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        <a href="mailto:jackson@fluentcallers.com" style={{ color: 'var(--w40)' }}>jackson@fluentcallers.com</a>
        <Link href="/contact" className="btn-red" onClick={() => setMenuOpen(false)}>Find My VA</Link>
      </div>
    </>
  )
}
