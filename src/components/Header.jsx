import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Our Food', href: '#gallery' },
  { label: 'Specialty', href: '#specialty' },
  { label: 'Order', href: '#order' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    document.body.style.overflow = '';
    const target = document.querySelector(id);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const openMobile = () => {
    setMobileOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMobile = () => {
    setMobileOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <header id="header" className={scrolled ? 'scrolled' : ''}>
        <div className="nav">
          <a
            className="brand"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img src="/assets/logo.jpg" alt="Sircilla Cloud Kitchen logo" width="52" height="52" />
            <div className="brand-text">
              Sircilla<span>Cloud Kitchen</span>
            </div>
          </a>
          <nav className="links">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => scrollTo(e, l.href)}>
                {l.label}
              </a>
            ))}
          </nav>
          <a className="call-btn" href="tel:+918374964740">
            📞 Call to Order
          </a>
          <button className="menu-toggle" onClick={openMobile} aria-label="Open navigation menu">
            ☰
          </button>
        </div>
      </header>

      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeMobile} aria-label="Close navigation menu">
          ✕
        </button>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} className="mobile-link" onClick={(e) => scrollTo(e, l.href)}>
            {l.label}
          </a>
        ))}
        <a className="call-btn" href="tel:+918374964740" style={{ marginTop: 16 }}>
          📞 Call to Order
        </a>
      </div>
    </>
  );
}
